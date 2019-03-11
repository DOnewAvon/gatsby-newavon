import React from "react"
import Layout from "../components/Layout"
import LeadPromo from "../components/LeadPromo"
import Link from 'gatsby-link'

  
export default () => <Layout>
<LeadPromo />

<section className="container container--page">
        <div className="row mt-0 mt-sm-3 mb-3 py-5">
          <div className="col-md-6 col-md-push-6 col-lg-5 px-4 px-sm-5 mx-0 mx-md-5 mx-lg-0">
            <div className="mb-4">
              <h4 className="title-secondary text-center" >
                <span className="text-uppercase" style={{letterSpacing:.9 +'px'}}>Become a Representative
                </span>
              </h4> 
            </div>
            <div id="duplicate-email-error-message" className="mb-4">
              <section className="alert alert-danger alert-level-page">
                <span className="alert-cols">
                  <span className="alert-aside">
                    <span className="alert-icon alert-icon-badge lt-warning-fill">
                    </span>
                  </span>
                  <span className="alert-main  text-left">
                    <span className="alert-headline">An account with that email address exists.
                      <br/>
                      <span style={{fontWeight:'normal'}}>Please enter a different email address or access your account from the 
                        <Link to="#">
                          <span className="link-underline" style={{color:'#d6321c'}}>Login page
                          </span>
                        </Link>.
                      </span>
                    </span>
                  </span>
                </span>
              </section> 
            </div>
            <div className="mt-0 mb-2">
              <hr className="register"/>
            </div>
            <div className="row form-group loginContent">
              <div className="col-xs-6">
                <label for="email">First Name
                </label>
                <input type="firstName" className="form-control" name="firstName" value="" placeholder="Janet"/>
              </div>
              <div className="col-xs-6 pl-0">
                <label for="email">Last Name
                </label>
                <input type="lastName" className="form-control" name="lastName" value="" placeholder="Johnson"/>
              </div>
            </div>
            <div className="form-group has-error loginContent">
              <label for="email">
				  <span className="text-danger">Email Address</span>
              </label>
              <input type="email" className="form-control" name="email" value="" placeholder="johnsonj@gmail.com"/>
            </div>
            <div className="form-group loginContent">
              <div className="row">
                <div className="col-xs-6">
                  <label className="" for="email">
					  Password
                  </label>
                </div>
              </div>
              {/* <input type="password" className="form-control" name="email" value=""> */}
              <div className="form-group has-feedback">
                {/* <label className="control-label" for="inputSuccess2">Input with success</label> */}
                <input id="password" className="form-control textinput ng-pristine ng-invalid ng-invalid-required ng-touched ng-untouched ng-valid-maxlength" name="password" type="password" required="" ng-model="password" maxlength="16" size="16" aria-invalid="true" />
                <span toggle="#password" className="lt-icon lt-eye lt-large toggle-password form-control-feedback">
                </span>
                <script id="twitter-wjs" async="" src="https://platform.twitter.com/widgets.js"></script>
                <script>
                    
                </script>
              </div>
            </div>
            <div id="password-error-messages" className="mb-3">
              <div>
                <small>
                  <span className="lt-icon lt-close lt-medium">
                  </span> Password strength: Weak
                </small>
              </div>
              <div className="pink">
                <small>
                  <span className="lt-icon lt-checkmark lt-medium">
                  </span> Password strength: Strong
                </small>
              </div>
              <div className="pink">
                <small>
                  <span className="lt-icon lt-checkmark lt-medium">
                  </span> Between 6 and 16 characters
                </small>
              </div>
              <div>
                <small>
                  <span className="lt-icon lt-close lt-medium">
                  </span> Must have one symbol or number
                </small>
              </div>
              <div className="pink">
                <small>
                  <span className="lt-icon lt-checkmark lt-medium">
                  </span> Must have one letter
                </small>
              </div>
            </div>
            <div className="text-center pt-4">
              <Link to="#" className="btn btn-primary btn-block">
                Register
              </Link>
              <div className="row mt-2 mb-3 px-4">
                <div className="col-xs-5 mt-4" style={{border: 'solid 0.5px #ccc'}}>
                </div>
                <div className="col-xs-2">or
                </div>
                <div className="col-xs-5 mt-4" style={{border: 'solid 0.5px #ccc'}}>
                </div>
              </div>
              <div id="fb_login" className="btn loginBtn loginBtn-facebook fb-div" ng-click="fbLogin()" data-analytics="login-facebook-btn" role="button" tabindex="0">
                <span className="ng-binding loginBtn-text">SIGN IN WITH FACEBOOK
                </span>
              </div>
              <div id="google_login" className="btn loginBtn loginBtn-google m-top-s1 google-div" ng-click="googleLogin()" role="button" tabindex="0">
                <span className="ng-binding loginBtn-text">SIGN IN WITH GOOGLE
                </span>
              </div>
              <div className="m-top-s1 m-bottom-s2">
                <hr className="register"/>
              </div>
              <p>
                Already have an account? 
                <Link to="#" style={{textDecoration: 'underline'}}>Sign in
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-md-pull-6 col-lg-5 col-lg-offset-2">
            <span className="visible-md visible-lg">
              <img src="https://dummyimage.com/460x735/ccc/fff" className="img-responsive" alt=""/>
            </span>
            <span className="visible-xs visible-sm px-0 mx-0 px-sm-5 mx-sm-4 px-md-5 mx-md-4 mt-5">
              <img src="https://dummyimage.com/630x350/ccc/fff" className="img-responsive" alt=""/>
            </span>
          </div>
        </div>
      </section>


</Layout>