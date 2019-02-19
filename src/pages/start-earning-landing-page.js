import React from "react"
import Layout from "../components/Layout"
import GrayFWBlk from "../components/GrayFWBlk"
import LeadPromo from "../components/lead-promo";
import styles from "./start-earning-landing-pages.module.css"


const sectionStyle = {
    display: 'block',
  };
  console.log(styles)
export default () => <Layout>
<LeadPromo />
<section class="container container--page p-0" style={sectionStyle}>
    <GrayFWBlk />
</section>
</Layout>