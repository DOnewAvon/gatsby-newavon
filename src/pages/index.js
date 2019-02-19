import React from "react"
import Layout from "../components/Layout"
import Link from "gatsby-link"


export default () => ( <Layout>
    <section class="container container--page p-0">
        <h1>Welcome!</h1>
        <Link to="/page-2">Page 2 </Link>
    </section>
  </Layout>
  
)