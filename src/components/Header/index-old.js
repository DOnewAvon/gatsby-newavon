import React from 'react'
import logo from "../../images/logos/your-avon-20.png"
import Link from 'gatsby-link'
import './custom.scss'

export default props => 

  <div className="no-reverse-bg avon-header">
    <div className="row px-0 mx-0">
      <div className="col-xs-12 px-0">
      <header className="global-header global-header--simple page-signin border-0" role="banner">
          <nav className="navbar navbar-inverse navbar-static-top navbar--utility-2 border-0 d-flex">
            <Link  className="link-reverse-plain small small-link-utility text-uppercase" to="/">
              <strong>Avon.com</strong>
            </Link >
            <Link  className="link-reverse-plain small small-link-utility underline ml-auto" to="/">Ver en Español
            </Link >
          </nav>
      </header>
      </div>
    </div>
  </div>
  