import React from "react"
import Link from "gatsby-link"



export default props => 
<div className="grey-bg get-started-banner text-center mt-5 pt-3 pb-5 hidden-xs">
  <div className="mt-5">
    <h3>
      <strong>Start your business today
      </strong>
    </h3>
  </div>
  <div className="mt-5 pb-3 text-center">
    <Link to="#">
      <button className="btn btn-black">Get Started
      </button>
    </Link>
  </div>
</div>