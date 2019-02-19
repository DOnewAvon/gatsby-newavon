import React from 'react'
import Link from 'gatsby-link'
import './custom.scss'
import logo from '../images/logos/your-avon-20.png'
import headerStyles from "./header.module.css"



{/*export default props => */}
export default () =>

<div className="no-reverse-bg avon-header">
  <div className="row px-0 mx-0">
    <div className="col-xs-12 px-0">
      {/*START - SIMPLE HEADER CONTAINER */} 
      <header className="global-header global-header--simple page-signin border-0" role="banner">
          {/*top bar */}
          <nav className="navbar navbar-inverse navbar-static-top navbar--utility-2 border-0 d-flex">
            <Link  className="link-reverse-plain small small-link-utility text-uppercase" href="#">
              <strong>Avon.com
              </strong>
            </Link>
            <Link  className="link-reverse-plain small small-link-utility underline ml-auto" href="#">Ver en Español
            </Link>
          </nav>
      </header>
      {/*END - SIMPLE HEADER CONTAINER */}
      {/*START - GLOBAL HEADER CONTAINER */}  
      <header className="global-header" role="banner">
        <nav className="navbar navbar--primary-nav navbar-default border-bottom d-flex flex-wrap align-items-center justify-content-center" role="navigation">
          {/*ghost placeholder - this invisible div holds a relative position for utility nav on desktop */}
          <style media="screen">
            {headerStyles.container}
          </style>
          <div className="primary-nav__ghost" >
          </div>
          {/*search */}
          <div className="primary-nav__search">
            <span>
            </span>
          </div>
          {/*logo */}
          <div className="primary-nav__logo flex-fill">
            <Link  href="/">
              <img src={logo} title="YourAvon 2.0" alt="YourAvon 2.0" />  
            </Link>
          </div>
          {/*order / cart */}
          <div className="primary-nav__cart">
            <span className="sign-in-link">
              <Link  href="#" className="text-black small">
                <strong>SIGN IN
                </strong>
              </Link>
            </span>
          </div>
        </nav>
      </header>
      {/*END - GLOBAL HEADER CONTAINER */}  
    </div>
  </div>
  {/* /.row */}
</div>
