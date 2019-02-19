import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/Layout"

const ThirdPage = () => <Layout>
  <section class="container container--page p-0">
    <h1>Hi people</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </section>
</Layout>
export default ThirdPage
