import React from "react"
// import { Link } from "gatsby"
import { FaGulp } from "react-icons/fa"
import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>hello</h1>
    <FaGulp />
  </Layout>
)

export default IndexPage