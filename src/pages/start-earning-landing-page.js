import React from "react"
import Layout from "../components/Layout"
import GrayFWBlk from "../components/GrayFWBlk"
import LeadPromo from "../components/LeadPromo";


const sectionStyle = {
    display: 'block',
  };
export default () => <Layout>
<LeadPromo />
<section className="container container--page p-0" style={sectionStyle}>
    <GrayFWBlk />
</section>
</Layout>