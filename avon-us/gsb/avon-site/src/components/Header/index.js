import React from 'react'
import logo from "../../images/logos/your-avon-20.png"
import Link from 'gatsby-link'

export default props => 

  <div className="no-reverse-bg avon-header">
  
    <div className="row px-0 mx-0">
      <div className="col-xs-12 px-0">
        <header className="global-header global-header--simple page-signin" role="banner">
  
          {/* START - SIMPLE HEADER CONTAINER */}
          <nav className="navbar navbar--primary-nav navbar-default d-flex" role="navigation">
         
            {/* top bar */}
            {/* START - UTILITY NAV 2 */}
            <nav className="navbar navbar-inverse navbar-static-top navbar--utility-2 border-0 d-flex">
              <Link className="link-reverse-plain small text-uppercase" to="/"><strong>Avon.com</strong></Link>
              <Link className="link-reverse-plain small underline ml-auto" to="/">Ver en Español</Link>
            </nav>
            {/* END - UTILITY NAV 2 */}
         
          </nav>
          <section>
            {/* logo */}
            
         
            <div className="primary-nav__logo flex-fill text-center">
                <Link to="/">
                <img src={logo} className="pt-5 pb-5" title="YourAvon 2.0" alt="YourAvon 2.0" />  
                </Link>
                <span style={{ float: 'right' }}><Link to="/" className="text-black"><strong>SIGN IN</strong></Link></span>
            </div>
         
            {/* links */}
         
          </section>
          {/* END - SIMPLE HEADER CONTAINER */}
         
          {/* START - GLOBAL MESSAGE */}
         
          {/* END - GLOBAL MESSAGE */}
         
        </header>
      </div>
    </div>
    {/* /.row 
    
    */}
   
    
  </div>
