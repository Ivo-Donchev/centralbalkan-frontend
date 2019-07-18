/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div class="centralbalkan">
      <header>
        Central Balkan
        <Tabs class="navigation">
          <Tab label="Метални конструкции" />
          <Tab label="Огради" />
          <Tab label="Монтажни дейности" />
          <Tab label="Парапети" />
          <Tab label="Навеси" />
          <Tab label="За нас" />
          <Tab label="Контакти" />
        </Tabs>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
