import React from "react"
import Layout from "../components/Layout"
import Link from 'gatsby-link'

  
const OLFundraiserReg = () => (<Layout>
	
	
	<div className="container container--page">
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<p>	<span className="small">Home | Fundraisers</span>
					</p>
					<br/>
					{/* START - MAGNOLIA BLOCK */}
					{/* START - GENERIC CONTENT BLOCK */}
					<div className="generic-content-block top">
						<div className="reverse-bg py-3">
							<p className="m-0 text-center text-muted">Mangolia Managed Content Block</p>
						</div>
					</div>
					{/* END - GENERIC CONTENT BLOCK */}
					{/* END - MAGNOLIA BLOCK */}
					<br/>
					<br/>
					{/* START - REGISTER YOUR FUNDRAISER FORM*/}
					<section className="">
						<div className="">
							<div className="text-center">
								<h1 className="title">REGISTER YOUR FUNDRAISER</h1>
								<div className="col-md-12 col-lg-10 col-lg-offset-1 px-0">
									<p className="m-top-s2 text-left">Please fill out the form below in order to generate your customized link for an Avon Fundraiser on your online store. Details about the organization, such as the name, logo, "about" and use of funds will populate on the personalized web page andhelp shoppers get familiar with the cause.</p>
								</div>
							</div>
							<div className="clearfix visible-lg visible-md"></div>
							<form role="form">
								{/*START - FORM DATA*/}
								<div className="row m-top-s3">
									{/*Col 1*/}
									<div className="col-md-6">
										<div className="form-group">
											<label for="orgName">Organization Name*</label>
											<input type="text" className="form-control" id="orgName" name="name" required=""/>
										</div>
										<div className="form-group m-top-s1">
											<label for="orgZipCode">Organization Zip Code*</label>
											<input type="text" className="form-control" id="orgZipCode" name="orgZipCode" required=""/>
										</div>
										<div className="form-group m-top-s1">
											<label for="chairEmail">Date Range</label>
											<p className="lp" style={{padding: 0}}>The start date can't be edited once your fundraiser is active. You can extend the date range while your fundraiser is active.</p>
										</div>
										<div className="row m-top-s1">
											<div className="col-xs-6 col-sm-6 col-md-6">
												<div className="form-group">
													<label for="dateStart">Date Start*</label>
													<div className="has-feedback">
														<input type="text" className="form-control" id="startDate" name="startDate" required=""/> <span className="lt-icon lt-calendar form-control-feedback" ng-click="selectStartDate()" role="button" tabindex="0"></span>
													</div>
													{/* <input type="text" className="form-control" id="dateStart" name="dateStart" required/> */}
												</div>
											</div>
											<div className="col-xs-6 col-sm-6 col-md-6">
												<div className="form-group">
													<label for="dateStart">Date End*</label>
													<div className="has-feedback">
														<input type="text" className="form-control" id="endDate" name="endDate" required=""/> <span className="lt-icon lt-calendar form-control-feedback" ng-click="selectEndDate()" role="button" tabindex="0"></span>
													</div>
													{/* <input type="text" className="form-control" id="dateStart" name="dateStart" required> */}
												</div>
											</div>
										</div>
										<div className="form-group">
											<label for="totalSalesGoal">Total Sales Goal*</label>
											<input type="text" className="form-control" id="totalSalesGoal" name="totalSalesGoal" placeholder="$" required=""/>
										</div>
									</div>
									{/* Col 1 */}
									{/*Col 2*/}
									<div className="col-md-6">
										<div className="form-group">
											<label for="chairName">Chairperson Name*
												<Link to="javascript:void(0)" data-toggle="modal" data-target="#chairpersonname" className="lt-icon lt-tip lt-medium align-middle no-underline d-inline" data-container="body" data-placement="bottom"></Link>
											</label>
											<div className="row">
												<div className="col-md-6">
													<input type="text" className="form-control" id="chairFirstName" name="chairFirstName" placeholder="First Name" required=""/>
												</div>
												<div className="col-md-6 m-top-xs-10">
													<input type="text" className="form-control" id="chairFirstName" name="chairLastName" placeholder="Last Name" required=""/>
												</div>
											</div>
										</div>
										<div className="form-group m-top-s1">
											<label for="chairEmail">Chairperson Email Address*</label>
											<input type="text" className="form-control" id="chairEmail" name="chairEmail" required=""/>
										</div>
										<div className="form-group m-top-s1">
											<label for="chairPhone">Chairperson Phone Number (optional)</label>
											<input type="text" className="form-control" id="chairPhone" name="chairPhone" required=""/>
										</div>
										<div className="form-group m-top-s1">
											<label for="aboutOrg">About the Organization (please add customized copy below for this fundraiser)
												<Link to="javascript:void(0)" data-toggle="modal" data-target="#abouttheorganization" className="lt-icon lt-tip lt-medium align-middle no-underline d-inline" data-container="body" data-placement="bottom"></Link>
											</label>
											<textarea type="text" rows="6" className="form-control textAreaCounter" id="aboutOrg" name="aboutOrg" placeholder="The Avon Fundraising program helps organizations in your community connect with an Avon Representative to raise money for a worthy cause. Thank you for shopping to support this organization." required=""></textarea> <span style={{marginTop: 5 + 'px'}} className="text-muted pull-right charCount">0/600</span>
											{/*START TEXT COUNTER SCRIPT
											<script id="twitter-wjs" async="" src="https://platform.twitter.com/widgets.js"></script><script>
												const textMax = 600
												  let chars = 0
												  let charCount = document.querySelector('.charCount')
												  var textArea = document.querySelector('.textAreaCounter')
												  charCount.innerHTML = `${chars}/${textMax}`
												
												  function countCharacters(e) {
												    console.log(e.target.value)
												    chars = e.target.value.length
												    charCount.innerHTML = `${chars}/${textMax}`
												  }
												
												  textArea.addEventListener('keyup', countCharacters, false)
											</script>*/}
											{/*EMD TEXT COUNTER SCRIPT*/}
										</div>
									</div>
									{/*End Col 2*/}
								</div>
								<div className="row">
									{/*Col 1*/}
									<div className="col-md-6">
										<div className="m-top-xs-10"><span className="text-muted small">You will be sharing a portion of your fundraiser earnings with the organization.  Before selecting from the dropdown, check your <strong>Contender</strong> earnings levels <Link to="#" data-toggle="modal" data-target="#earningslevels">here</Link>.  Be clear with the organization on what constitutes Beauty &amp; Jewelry (Makeup, Skin Care, Bath &amp; Body, Fragrance, Health &amp; Wellness, Jewelry) and Fashion &amp; Home and what percentage of sales they’ll earn on each.</span>
										</div>
										<div className="m-top-s2">
											<label>What Percentage of Sales Would You Like to Donate?</label>
										</div>
										<div className="row m-top-s1">
											<div className="col-md-6">
												<label className="control-label">Beauty &amp; Jewelry</label>
												<div className="form-group has-feedback">
													<select className="form-control ng-pristine ng-valid ng-touched" ng-model="typeSelected" aria-invalid="false">
														<option value="0" selected="selected" label="Select Percentage">Select Percentage</option>
														<option value="1" label="200%">200%</option>
														<option value="2" label="3500%">3500%</option>
													</select> <span className="lt-icon lt-triangle-down form-control-feedback"></span>
													<div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												<label className="control-label">Fashion &amp; Home</label>
												<div className="form-group has-feedback">
													<select className="form-control ng-pristine ng-valid ng-touched" ng-model="typeSelected" aria-invalid="false">
														<option value="0" selected="selected" label="Select Percentage">Select Percentage</option>
														<option value="1" label="6300%">6300%</option>
														<option value="2" label="350%">350%</option>
													</select> <span className="lt-icon lt-triangle-down form-control-feedback"></span>
													<div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* Col 1 */}
									{/*Col 2*/}
									<div className="col-md-6">
										<div className="row m-top-s1">
											<div className="col-xs-6">
												<label for="orgLogo">Organization Logo (optional)</label>
												<br/> <span className="jpg text-muted">JPG, PNG, or GIF</span>
											</div>
											<div className="col-xs-6" style={{marginTop: 5 + 'px'}}><Link to="#" id="orgLogo" className="btn btn-default btn-sm">Upload</Link>
											</div>
										</div>
										<div className="form-group m-top-s1">
											<div className="checkbox one two">
												<label className="jpg">
													<input type="checkbox" id="checkbox1" name="checkbox1" value="option1"/> <span className="mr-4"><i className="lt-icon lt-checkbox-checkmark lt-small"></i><i className="indeterminate lt-icon lt-checkbox-minus"></i></span>
													The organization has provided me with written permission to use their logo in all fundraiser markerting efforts</label>
											</div>
										</div>
									</div>
									{/*End Col 2*/}
								</div>
								{/*END - FORM DATA*/}
								<div className="m-top-s3 text-center m-top-xs-20"><Link to="#" className="btn btn-primary button-full-width-mobile fundraiser-registration-submit-button">Submit</Link>
								</div>
							</form>
						</div>
					</section>
					<div className="clearfix"></div>
					{/* END - REGISTER YOUR FUNDRAISER FORM*/}
					<hr/>
					{/* START - CONFIRMATION*/}
					<section className="">
						<div className="text-center">
							<h1 className="title">Congrats!<br/>This Fundraiser is Registered</h1>
							<div className="m-top-s2 text-left">
								<p>Your online store now has an exclusive link where supporters of [Name of Organization] can shop to help raise money toward their goal.</p>
								<p>Email the fundraiser link to the organization's chairperson. Remind them to share the link (via email or any of their social networks) with their fundraiser participants and supporters. And the more they share the link with their families, friends and anyone who might want to support their cause, the bigger their sales!</p>
							</div>
							<div className="row m-top-s2 text-left">
								<div className="col-sm-3">
									<p><strong>Your Fundraising Link:</strong>
								</p></div>
								<div className="col-sm-9"><Link to="#" target="_blank">avon.com/fundraiser-link</Link>
									<p></p>
								</div>
							</div>
							<div className="row text-left">
								<div className="col-sm-3">
									<p><strong>Share Now:</strong>
								</p></div>
								<div className="col-sm-9"><Link to="#" data-toggle="modal" data-target="#email">Send Email</Link>
									<p></p>
								</div>
							</div>
							<div className="m-top-s2 text-center"><Link to="#" className="btn btn-primary m-top-s1 button-full-width-mobile">View All Fundraisers</Link>
							</div>
						</div>
					</section>
					{/* END - CONFIRMATION*/}
					<hr/>
					{/* START EMAIL MODAL */}
					<section className="modal has-no-footer fade " id="email" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">EMAIL YOUR FUNDRAISER LINK</h4>
								</div>
								<div className="modal-body">
									<section className="py-5">
										<div className="row text-center">
											{/*MODAL CONTENT*/}
											<div className="col-xs-12 vcenter text-center fundraiser-email-modal">
												{/* <h1 className="modal-title text-center">EDIT PROFILE IMAGE</h1>*/}
												<p className="text-left">Email the link to the organization and anyone else you're working with on this fundraiser.</p>
												<p className="text-muted text-left m-bottom-s1"><strong>To:</strong>
													<br/> <span className="text-muted">Up to 10 email addresses, separated by comma</span>
												</p>
												<div className="text-left">
													<div className="form-group">
														<input type="text" className="form-control" placeholder="organization email address" id=""/>
														<div> <span className="has-error"><small className="mb-3 text-danger ng-binding">One or more email addresses entered is not valid.</small></span>
														</div>
													</div>
												</div>
												<div className="checkbox one two text-left m-top-s2">
													<label>
														<input type="checkbox" id="checkbox1" name="checkbox1" value="option1" checked=""/> <span className="mr-4"><i className="lt-icon lt-checkbox-checkmark lt-small"></i><i className="indeterminate lt-icon lt-checkbox-minus"></i></span>Send me a copy</label>
												</div>
												<div className="text-center m-top-s2 m-bottom-s1">
													<h4 className="modal-title">Preview Email Content</h4>
												</div>
												{/*START MODAL ADDRESS BOX CONTAINER*/}
												<div className="reg-fundraiser-box-outer-container">
													<div className="reg-fundraiser-box-inner-container">
														<div className="text-left">
															<p className="text-muted m-top-s2 m-left-s2 m-right-s2">Congrats! Your Fundraiser is Now Registered!</p>
															<p className="text-muted m-top-s2 m-left-s2 m-right-s2">You now have an exclusive Avon online store with [Name of Organization] where supporters of [Name of Organization] can shop to help raise money toward your goal of [$Total sales goal]</p>
															<p className="text-muted m-top-s2 m-left-s2 m-right-s2">Spread the word and help [Name of Organization] raise money by sharing this message on your social media - just copy and paste the link below with a message encouraging your followers to shop for [Name of Organization]</p>
														</div>
													</div>
												</div>
												{/*END MODAL ADDRESS BOX CONTAINER*/}
												<div className="m-top-s3">
													<div className="row">
														<div className="col-sm-12 col-md-6 col-md-push-6">
															<Link data-toggle="data-target=" ng-click="closeImageModal()">
																<button className="btn btn-primary btn-block">Send</button>
															</Link>
														</div>
														<div className="col-sm-12 col-md-6 col-md-pull-6 m-top-xs-20">
															<Link data-toggle="" data-target="" onClick="" to="">
																<button className="btn btn-default upload-result btn-block">Cancel</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
											{/*END MODAL CONTENT*/}
										</div>
									</section>
								</div>
							</div>
						</div>
					</section>
					{/* END EMAIL MODAL */}
					{/* START EARNINGS LEVELS MODAL */}
					<section className="modal has-no-footer fade " id="earningslevels" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">EARNINGS LEVELS</h4>
								</div>
								<div className="modal-body">
									<section className="py-5">
										<div className="row">
											{/*START MODAL CONTENT*/}
											<div className="m-top-s1 m-left-s3">
												<p>Content goes here.</p>
											</div>
											{/*END MODAL CONTENT*/}
										</div>
									</section>
								</div>
							</div>
						</div>
					</section>
					{/* END EARNINGS LEVELS MODAL */}
					{/* START ABOUT THE ORGANIZATION MODAL */}
					<section className="modal has-no-footer fade " id="abouttheorganization" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">About the Organization</h4>
								</div>
								<div className="modal-body">
									<section className="py-5">
										<div className="row">
											{/*MODAL CONTENT*/}
											<div className="m-top-s1 m-left-s3">
												<p>Content goes here.</p>
											</div>
											{/*END MODAL CONTENT*/}
										</div>
									</section>
								</div>
							</div>
						</div>
					</section>
					{/* END ABOUT THE ORGANIZATION MODAL */}
					{/* START CHAIRPERSON NAME MODAL */}
					<section className="modal has-no-footer fade " id="chairpersonname" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">Chairperson Name</h4>
								</div>
								<div className="modal-body">
									<section className="py-5">
										<div className="row">
											{/*MODAL CONTENT*/}
											<div className="m-top-s1 m-left-s3">
												<p>Content goes here.</p>
											</div>
											{/*END MODAL CONTENT*/}
										</div>
									</section>
								</div>
							</div>
						</div>
					</section>
					{/* END CHAIRPERSON NAME MODAL */}
					{/* START - MAGNOLIA BLOCK */}
					{/* START - GENERIC CONTENT BLOCK */}
					<div className="generic-content-block bottom pt-4">
						<div className="reverse-bg py-3">
							<p className="m-0 text-center text-muted">Mangolia Managed Content Block</p>
						</div>
					</div>
					{/* END - GENERIC CONTENT BLOCK */}
					{/* END - MAGNOLIA BLOCK */}
				</div>
			</div>
		</div>
	</Layout>)

export default OLFundraiserReg