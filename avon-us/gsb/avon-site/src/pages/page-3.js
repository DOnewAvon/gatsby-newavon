import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"

const ThirdPage = () => <Layout>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
</Layout>
export default ThirdPage
