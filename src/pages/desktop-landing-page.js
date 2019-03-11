import React from "react"
import Layout from "../components/Layout"
import LeadPromo from "../components/LeadPromo"
import StartEarning from "../components/StartEarning"


const sectionStyle = {
    display: 'block',
  };
export default () => <Layout>
<LeadPromo />
<section className="container container--page p-0" style={sectionStyle}>
    <StartEarning />
</section>

</Layout>