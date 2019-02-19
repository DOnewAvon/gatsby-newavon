import React from 'react'
import Link from 'gatsby-link'

export default props => 

    <footer className="my-5 footer text-center global-footer small">
        <hr/>
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="footer-group mb-4">
                      <ul className="list-unstyled list-inline">
                          <li className="my-1 mx-2"><Link  to="/">Site Map</Link></li>
                          <li className="my-1 mx-2"><Link  to="/">Privacy Statement</Link></li>
                          <li className="my-1 mx-2"><Link  to="/">Conditions of Use</Link></li>
                          <li className="my-1 mx-2"><Link  to="/">Product Recall</Link></li>
                          <li className="my-1 mx-2"><Link  to="/">Direct Selling Messaging</Link></li>
                          <li className="my-1 mx-2"><Link  to="/">Product Safety Certificates</Link></li>
                          <li className="my-1 mx-2"><Link  to="/">California Supply Chains Act</Link></li>
                          <li className="my-1 mx-2"><Link  to="/">Animal Welfare Policy</Link></li>
                      </ul>
                  </div>
                  <div className="footer-group my-4">
                      <h6 className="title mb-2 d-inline mx-2">Call Support</h6>
                      <ul className="list-unstyled list-inline d-inline">
                          <li className="my-1 mx-2">English: <a  href="tel:1-866-513-2866" className="link-phone-number">(866) 513-AVON</a></li>
                          <li className="my-1 mx-2">Espanol: <a  href="tel:1-866-588-2866" className="link-phone-number">(866) 588-AVON</a></li>
                      </ul>
                  </div>
                  <div className="footer-group my-4">
                      © 2018 New Avon LLC
                  </div>
                </div>
            </div>
        </div>
    </footer>