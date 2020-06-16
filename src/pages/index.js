import React from "react";
import axios from "axios";

import Layout from "../components/layout";
import ProductsGrid from "../components/ProductsGrid";
import ProductModal from "../components/ProductModal";
import { PRODUCT_LIST_URL, PRODUCT_DETAIL_URL } from "../constants";

class IndexPage extends React.Component {
  state = {
    categories: [],
    products: {},
    currentCategory: null,
    isProductModalOpen: false,
    productModalId: null,
    productModal: null
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

  openProductModal = productModalId =>
    this.setState({ isProductModalOpen: true }, () =>
      axios.get(PRODUCT_DETAIL_URL(productModalId)).then(res => {
        this.setState({
          productModalId,
          productModal: res.data
        });
      })
    );

  closeProductModal = () =>
    this.setState({
      isProductModalOpen: false,
      productModalId: null,
      ProductModal: null
    });

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
        {this.state.isProductModalOpen && (
          <ProductModal
            isOpen={this.state.isProductModalOpen}
            handleClose={this.closeProductModal}
            productModal={this.state.productModal}
          />
        )}
        <ProductsGrid
          categoryName={currentCategoryName}
          products={currentProducts}
          openProductModal={this.openProductModal}
        />
      </Layout>
    );
  }
}

export default IndexPage;
