import React from "react";
import axios from "axios";

import Layout from "../components/layout";
import ProductsGrid from "../components/ProductsGrid";
import { PRODUCT_LIST_URL } from "../constants";

class IndexPage extends React.Component {
  state = {
    categories: [],
    products: {},
    currentCategory: null
  };

  componentDidMount() {
    axios.get(PRODUCT_LIST_URL).then(res => {
      this.setState({
        categories: res.data.categories,
        products: res.data.products
      });
    });
  }
  onCurrentCategoryChange = currentCategory =>
    this.setState({ currentCategory });

  render() {
    const currentProducts = this.state.currentCategory
      ? this.state.products[this.state.currentCategory]
      : [];

    const foundCategories = this.state.categories.filter(
      el => el.id === this.state.currentCategory
    );
    const currentCategoryName =
      foundCategories.length > 0
        ? foundCategories[0].name
        : "Няма избрана категория";

    return (
      <Layout
        categories={this.state.categories}
        onCurrentCategoryChange={this.onCurrentCategoryChange}
      >
        <ProductsGrid
          categoryName={currentCategoryName}
          products={currentProducts}
        />
      </Layout>
    );
  }
}

export default IndexPage;
