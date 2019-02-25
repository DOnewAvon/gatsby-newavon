import React from "react"
import Layout from "../components/Layout"
import LeadPromo from "../components/LeadPromo"
import Link from 'gatsby-link'
import mentor from '../components/images/mentor.jpg'

  
export default () => <Layout>
<LeadPromo />
<section className="container container--page">
        <div className="row mt-0 mt-sm-3 mb-3 py-5">
          <div className="col-md-6 col-md-push-6 col-lg-5 px-4 px-sm-5 mx-0 mx-md-5 mx-lg-0">
			                      <div className="mb-4">
			                        <h4 className="title-secondary text-center">
									  <span style={{letterSpacing: .9, textTransform: 'uppercase'}}>Become a Representative
									  </span>
								     </h4> 
			                      </div>
			        {/* START - MENTOR CONTENT */}
                    <div className="mt-0 mb-2">
                      <hr className="register-mentor"/>
                    </div>
                    <div className="row mb-3">
                      <div className="col-xs-9"><img src={mentor} className="pr-3" style={{float: 'left'}} alt="mentor" />
						  <span className="mt-2" style={{display:'inline-block', lineHeight:18+'px'}}><small>YOUR MENTOR</small><br/>Trisha Pennington</span>
					  </div>
					  <div className="col-xs-3 mt-3 text-right">
						<Link href="#" data-toggle="modal" data-target="#removeMentor" style={{textDecoration:'underline'}}>Remove</Link >
					  </div>	
                    </div>
			        {/* END - MENTOR CONTENT */}
                    <div className="mt-0 mb-2">
                      <hr className="register"/>
                    </div>
                    <div className="row form-group loginContent">
                      <div className="col-xs-6">
						  <label for="email">First Name</label>
                          <input type="firstName" className="form-control" name="firstName" value="" />
					  </div>
                      <div className="col-xs-6 pl-0">
						  <label for="email">Last Name</label>
                          <input type="lastName" className="form-control" name="lastName" value="" />
					  </div>
                    </div>
                    <div className="form-group loginContent">
                      <label for="email">Email Address</label>
                      <input type="email" className="form-control" name="email" value="" />
                    </div>
                    <div className="form-group loginContent">
                      <div className="row">
                        <div className="col-xs-6">
                          <label for="email">Password</label>
                        </div>
                      </div>
                      {/* <input type="password" className="form-control" name="email" value=""> */}
                      <div className="form-group has-feedback">
                        {/* <label className="control-label" for="inputSuccess2">Input with success</label> */}
                        <input type="text" style={{borderColor: '#ccc'}} className="form-control" id="inputSuccess2" />
                        <span className="lt-icon lt-eye lt-medium form-control-feedback"></span>
                      </div>
                    </div>
                    <div className="text-center pt-4">
                      <Link href="#" className="btn btn-primary btn-block">
                        Register
                      </Link >
                      <div className="row mt-2 mb-3 px-4">
						<div className="col-xs-5 mt-4" style={{border: 'solid', borderWidth: 0.5, borderColor: '#ccc'}}></div>
                        <div className="col-xs-2">or</div>
						<div className="col-xs-5 mt-4" style={{border: 'solid', borderWidth: 0.5, borderColor: '#ccc'}}></div>
                      </div>
                      <div id="fb_login" className="btn loginBtn loginBtn-facebook fb-div"  data-analytics="login-facebook-btn" role="button" tabindex="0">
                        <span className="ng-binding loginBtn-text">SIGN IN WITH FACEBOOK
                        </span>
                      </div>
                      <div id="google_login" className="btn loginBtn loginBtn-google m-top-s1 google-div"  role="button" tabindex="0">
                        <span className="ng-binding loginBtn-text">SIGN IN WITH GOOGLE
                        </span>
                      </div>
                      <div className="m-top-s1 m-bottom-s2">
                        <hr className="register"/>
                      </div>
                      <p>
                        Already have an account? <Link href="#" style={{textDecoration: 'underline'}}>Sign in</Link >
                      </p>
                    </div>
		  </div>
          <div className="col-md-6 col-md-pull-6 col-lg-5 col-lg-offset-2">
			  <span className="visible-md visible-lg">
				  <img src="https://dummyimage.com/460x735/ccc/fff" className="img-responsive" alt="" />
			  </span>
			  <span className="visible-xs visible-sm px-0 mx-0 px-sm-5 mx-sm-4 px-md-5 mx-md-4 mt-5">
				  <img src="https://dummyimage.com/630x350/ccc/fff" className="img-responsive" alt="" />
			  </span>
		  </div>
        </div>
      </section>
</Layout>