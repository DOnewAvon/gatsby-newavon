import React from 'react'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import Link from "gatsby-link"


export default ({data}) => {
    return (
        <Layout>
            <section className="container container--page p-0">

            <ul>
            {data.allSitePage.edges.map(({node}, i) => (
                <li><Link to={data.allSitePage.edges[i].node.path}>{data.allSitePage.edges[i].node.path}</Link></li>
             ))}
            </ul>
            </section>

        </Layout>
    )
}

export const query = graphql`
    query {
        allSitePage {
            edges {
              node {
                path
              }
            }
          }
    }
`
