import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"

export default () => <Layout>
<section class="container container--page p-0">
    <div className="row">
				<div className="col-md-10 col-md-offset-1">
					<p>
						<Link onclick="javascript:window.history.go(-1);">
<span className="lt-icon lt-left lt-medium mr-2"></span>
							<span className="small">Support</span>
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
					{/* START -EMAIL AVON FORM*/}
					<section className="">
						<div className="col-md-8 col-md-offset-2">
							<h1 className="title">EMAIL AVON</h1>
							<div className="m-top-s2">
								<p>*All fields are required.</p>
							</div>
							<div className="m-top-s2">
								<form className="">
									<div className="form-group">
										<div className="row">
											<div className="col-lg-12">
												<label className="control-label">Your Name*</label>
												<input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="name" validate-spl-char="" aria-invalid="false" placeholder="Representative Name"/>
												{/*<div>
                                <span className="has-error"><small className="mb-3 text-danger ng-binding">This URL is not valid.</small></span>
                            </div>*/}</div>
										</div>
										<div className="row m-top-s2">
											<div className="col-lg-12">
												<label className="control-label">Your Email*</label>
												<input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="email" validate-spl-char="" aria-invalid="false" placeholder="Representativename@gmail.com"/>
												<div> <span className="has-error"><small className="mb-3 text-danger ng-binding">Please enter a valid email address.</small></span>
												</div>
											</div>
										</div>
										<div className="row m-top-s2">
                                            <div className="col-md-6 mt-1 mt-md-0">
                                                <label className="control-label">Choose a Topic*</label>
                                                <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
                                                <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown" role="button" title="Select a Topic"><span className="filter-option pull-left">Select a Topic</span><span className="bs-caret"><span className="caret"></span></span></button>
                                                <div className="dropdown-menu open" role="combobox" style={{maxHeight: 157 + 'px', overflow:'hidden'}}>
                                                    <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 + 'px', overflowY: 'auto'}}>
                                                        <li data-original-index="1"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Orders</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="2"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Leadership</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="3"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Payments</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="4"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Returns</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Account</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>                                                    
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>
											<br className="visible-sm"/>
                                            <div className="col-md-6 mt-5 mt-md-0">
                                                <label className="control-label">Choose a Subtopic*</label>
                                                <div className="btn-group bootstrap-select form-control form-inline ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid ng-valid-required">
                                                <button type="button" className="btn dropdown-toggle bs-placeholder btn-select" data-toggle="dropdown" role="button" title="Choose a Subtopic"><span className="filter-option pull-left">Choose a Subtopic</span><span className="bs-caret"><span className="caret"></span></span></button>
                                                <div className="dropdown-menu open" role="combobox" style={{maxheight: 157+'px', overflow: 'hidden'}}>
                                                    <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: 156 +'px', overflowY:'auto'}}>
                                                        <li data-original-index="1"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Hold Order</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="2"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Fundraiser Order</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="3"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Cancel Order</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="4"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Order Status</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
                                                        <li data-original-index="5"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Missing Products</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li>
														<li data-original-index="6"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Cancel Backorders</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li> 
														<li data-original-index="7"><Link tabindex="0" className="ng-binding ng-scope" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Price Adjustments</span><span className="lt-icon glyphicon-ok check-mark"></span></Link></li> 
                                                    </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
										<div className="row m-top-s2">
											<div className="col-lg-12">
												<label className="control-label">Message*</label>
												<textarea className="form-control" rows="8"></textarea>
												<div> <span className="has-error"><small className="mb-3 text-danger ng-binding">Please add in a message.</small></span>
												</div>
											</div>
										</div>
									</div>
									<div className="m-top-s3"> <Link to="#" className="btn btn-primary button-full-width-mobile">Send</Link>
									</div>
								</form>
							</div>
						</div>
					</section>
					<div className="clearfix"></div>
					{/* END - EMAIL AVON FORM*/}
					<hr/>
					{/* START - CONFIRMATION*/}
					<section className="">
						<div className="col-md-8 col-md-offset-2">
							<h1 className="title">Thanks, your message has been sent</h1>
							<div className="m-top-s2">
								<p>Someone will get back to you within 24 hours.</p>
							</div>
							<div className="row m-top-s3">
								<div className="col-lg-6"><Link to="#" className="btn btn-primary d-block">Send Another</Link>
								</div>
								<br className="hidden-lg"/>
								<div className="col-lg-6"><Link to="#" className="btn btn-default d-block">Back to Support Page</Link>
								</div>
							</div>
					</div></section>
					<div className="clearfix"></div>
					{/* END - CONFIRMATION*/}
					{/* START - MAGNOLIA BLOCK */}
					{/* START - GENERIC CONTENT BLOCK */}
					<br/>
					<div className="generic-content-block bottom pt-4">
						<div className="reverse-bg py-3">
							<p className="m-0 text-center text-muted">Mangolia Managed Content Block</p>
						</div>
					</div>
					{/* END - GENERIC CONTENT BLOCK */}
					{/* END - MAGNOLIA BLOCK */}
					</div>
				</div>
        </section>
</Layout>