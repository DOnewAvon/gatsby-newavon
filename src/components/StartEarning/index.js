import React from "react"
import Link from "gatsby-link"



export default props => 
<div>
  <div className="grey-bg get-started-banner text-center mt-5 mb-5 pt-5 pb-5 col-md-12 hidden-xs">
    <div className="mt-5">
      <p>It's time to</p>
      <h1>
        <strong>Start Earning</strong>
      </h1>
    </div>
    <div className="mt-5 pb-5 text-center">
      <Link to="#">
        <button className="btn btn-black pb-5" >Get Started
        </button>
      </Link>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-6 col-md-4 mt-5">
        <div className="caption">
          <h4>Why become an Avon Representative?</h4>
          <p className="text-muted">Start your own business be your own boss Fugiat minim duis quis do. Mollit enim ad dolore voluptate ex deserunt cillum consequat sint dolor anim minim tempor.</p>
        </div>
    </div>
    <div className="col-sm-6 col-md-4 mt-5">
        <div className="caption">
          <h4>Create and grow your independence</h4>
          <p className="text-muted">Your hours, your customers, your team - YourAvon is all about YOU.
          </p>
        </div>
    </div>
    <div className="col-sm-6 col-md-4 mt-5">
        <div className="caption">
          <h4>The Avon community is family</h4>
          <p className="text-muted">Bettween your Upline, your downline, local events, and the Avon team - you/'re never alone and allways supported.</p>
        </div>
    </div>
  </div>
  <div className="col-md-7 col-md-offset-2 mt-5 pt-5 text-center">
    <h2 className="text-uppercase lead">Real people, real success</h2>
    <div className="text-muted marge ml-5 mr-5">Get inspired as other Avon Representatives share their stories of how they went from gloss to boss.</div>
    <div className="row text-center">
      <div className="col-xs-6 col-md-3">
        <Link to="#" className="thumbnail">
          <img src="https://dummyimage.com/180x180/dcdce0/fff" className="img-responsive" alt="" />
        </Link>
        <h6>David</h6>
        <p>Fugiat elit ea minim nulla adipisicing Lorem ullamco deserunt adipisicing excepteur cillum labore do.</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <Link to="#" className="thumbnail">
          <img src="https://dummyimage.com/180x180/dcdce0/fff" className="img-responsive" alt="" />
        </Link>
        <h6>David</h6>
        <p>Fugiat elit ea minim nulla adipisicing Lorem ullamco deserunt adipisicing excepteur cillum labore do.</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <Link to="#" className="thumbnail">
          <img src="https://dummyimage.com/180x180/dcdce0/fff" className="img-responsive" alt="" />
        </Link>
        <h6>David</h6>
        <p>Fugiat elit ea minim nulla adipisicing Lorem ullamco deserunt adipisicing excepteur cillum labore do.</p>
      </div>
      <div className="col-xs-6 col-md-3">
        <Link to="#" className="thumbnail">
          <img src="https://dummyimage.com/180x180/dcdce0/fff" className="img-responsive" alt="" />
        </Link>
        <h6>David</h6>
        <p>Fugiat elit ea minim nulla adipisicing Lorem ullamco deserunt adipisicing excepteur cillum labore do.</p>
      </div>
    </div>
    <div>Find your success and be an inspiration for others</div>
    <button type="button" className="btn btn-discourage text-uppercase">Get Started</button>
    <hr />
    <h2 className="text-uppercase">Frequently asked questions</h2>
  </div>
</div>