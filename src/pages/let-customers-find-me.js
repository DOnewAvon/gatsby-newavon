import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"


export default () => <Layout>
    <section className="container container--page p-0">
    <div className="container container--page">
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<p>
						<Link onClick="javascript:window.history.go(-1);">
<span className="lt-icon lt-left lt-medium mr-2"></span>
							<span className="small">Profile</span>
						</Link>
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
					{/* START - LET CUSTOMERS FIND ME FORM*/}
					<section className="">
						<div className="">
							<h1 className="title">Let Customers Find You Online</h1>
							<div className="m-top-s2">
								<p>Make yourself findable on "Find a representative" on avon.com. Grow your Avon business and customer base by opting into our program that matches online customers with an active Representative. <Link href="#" data-toggle="modal" data-target="#readmore">Read More</Link>
								</p>
							</div>
							<div className="m-top-s2">
								<form className="">
									<div className="form-group">
										<label>Select all languages that apply
											<Link href="javascript:void(0)" data-toggle="modal" data-target="#languagelearnmore" className="lt-icon lt-tip lt-medium align-middle no-underline d-inline" data-container="body" data-placement="bottom"></Link>
										</label>
										<div className="checkbox one two">
											<label>
												<input type="checkbox" id="checkbox1" name="checkbox1" value="option1"/> <span className="mr-4"><i className="lt-icon lt-checkbox-checkmark lt-small"></i><i className="indeterminate lt-icon lt-checkbox-minus"></i></span>
												English</label>
										</div>
										<div className="checkbox one two">
											<label>
												<input type="checkbox" id="checkbox2" name="checkbox2" value="option2"/> <span className="mr-4"><i className="lt-icon lt-checkbox-checkmark lt-small"></i><i className="indeterminate lt-icon lt-checkbox-minus"></i></span>
												Spanish</label>
										</div>
										<div className="m-top-s0"><span className="has-error"><small className="mb-3 text-danger ng-binding">Please select your preferred languages.</small></span>
										</div>
									</div>
									<div className="form-group m-top-s2 mb-3">
										<label className="control-label">Select the distance you're willing to travel to customers
											<Link href="javascript:void(0)" data-toggle="modal" data-target="#travellearnmore" className="lt-icon lt-tip lt-medium align-middle no-underline d-inline" data-container="body" data-placement="bottom"></Link>
										</label>
									</div>
									    <div className="row">
									    <div className="col-sm-2 mb-2">
										    <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
                                                <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown" role="button" title="Select"><span className="filter-option pull-left">Select</span><span className="bs-caret"><span className="caret"></span></span></button>
                                                <div className="dropdown-menu open" role="combobox" style={{maxHeight: 157 + 'px', overflow: 'hidden'}}>
                                                    <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 + 'px', overflowY: 'auto'}}>
                                                        <li data-original-index="1"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">1 mile</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="2"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">5 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="3"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">10 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="4"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">15 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">20 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li> 
														<li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">30 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
														<li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">40 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
														<li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">50 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
														<li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">75 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
														<li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">100 miles</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                    </ul>
                                                </div>
											</div></div>
									</div>
									<div className="form-group mt-5">
										<div className="checkbox one two">
											<label>
												<input type="checkbox" id="checkbox1" name="checkbox1" value="option1"/> <span className="mr-4"><i className="lt-icon lt-checkbox-checkmark lt-small"></i><i className="indeterminate lt-icon lt-checkbox-minus"></i></span>
												Accept <Link href="#" data-toggle="modal" data-target="#termsconditions">Terms &amp; Conditions</Link>
											</label>
										</div>
										<div className="m-top-s0"><span className="has-error"><small className="mb-3 text-danger ng-binding">Please accept Terms &amp; Conditions of Use.</small></span>
										</div>
									</div>
									<div className="m-top-s2"> <Link href="#" className="btn btn-primary m-top-s1 button-full-width-mobile">Enroll Now</Link>
										<Link href="#" className="btn btn-default m-top-s1 button-full-width-mobile">Cancel</Link>
									</div>
								</form>
							</div>
						</div>
					</section>
					{/* END - LET CUSTOMERS FIND ME FORM*/}
					<hr/>
					{/* START - CONFIRMATION*/}
					<section className="">
						<div>
							<h1 className="title">Congrats, You're Enrolled</h1>
							<div className="m-top-s2">
								<p>Make yourself findable on "Find a representative" on avon.com. Grow your business and customer base by opting
									<br/>into our program that matches online customers with an active Representative.</p>
							</div>
							<div className="m-top-s2"><Link href="#" className="btn btn-default m-top-s1 button-full-width-mobile">Edit</Link>
								<Link href="#" className="btn btn-primary m-top-s1 button-full-width-mobile">Go to Profile</Link>								
							</div>
						</div>
					</section>
					{/* END - CONFIRMATION*/}
					<hr/>
					{/* START READ MORE MODAL */}
					<section className="modal has-no-footer fade " id="readmore" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">MAKE IT EASY FOR CUSTOMERS &amp; NEW RECRUITS TO FIND YOU</h4>
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
					{/* END READ MORE MODAL */}
					{/* START TERMS & CONDITIONS MODAL */}
					<section className="modal has-no-footer fade " id="termsconditions" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">TERMS &amp; CONDITIONS</h4>
								</div>
								<div className="modal-body">
									<section className="py-5">
										<div className="row">
											{/*MODAL CONTENT*/}
											<div className="m-top-s1 m-left-s3">
												<div className="embed-responsive embed-responsive-16by9">
                                                {/* <iframe className="embed-responsive-item" src="https://www.youravon.com/us-home/other-content/conditionsofuse.html" allowfullscreen=""></iframe>*/}
											</div>
											{/*END MODAL CONTENT*/}
										</div>
									</div></section>
								</div>
							</div>
						</div>
					</section>
					{/* END TERMS & CONDITIONS MODAL */}
					{/* START LET CUSTOMERS FIND ME INFO MODAL */}
					<section className="modal has-no-footer fade " id="letcustomersfindmelearnmore" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">Make it Easy for Customers &amp; New Recruits to Find You</h4>
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
					{/* END LET CUSTOMERS FIND ME INFO MODAL */}
					{/* START LANGUAGE INFO MODAL */}
					<section className="modal has-no-footer fade " id="languagelearnmore" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">SELECT THE LANGUAGE(S) IN WHICH YOU DO BUSINESS</h4>
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
					{/* END LANGUAGE INFO MODAL */}
					{/* START TRAVEL INFO MODAL */}
					<section className="modal has-no-footer fade " id="travellearnmore" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
						<div className="modal-dialog modal-lg">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
										<span className="lt-icon lt-close lt-large py-1"></span>
									</button>
									<h4 className="modal-title text-center">SELECT THE DISTANCE YOU'RE WILLING TO TRAVEL</h4>
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
					{/* END TRAVEL INFO MODAL */}
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
    </section>
</Layout>