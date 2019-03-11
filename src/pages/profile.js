import React from "react"
import Link from "gatsby-link"
import Layout from "../components/Layout"

export default () => <Layout>
    <section class="container container--page p-0">
{/* START - GENERIC CONTENT BLOCK */}
<div className="generic-content-block top">
    <div className="reverse-bg py-3">
        <p className="m-0 text-center text-muted">Mangolia Managed Content Block</p>
    </div>
</div>
{/* END - GENERIC CONTENT BLOCK */}
<div className="row">
    <Link className="col-md-3 secondary-nav px-2 px-lg-4" role="complementary">
        {/* START - SECONDARY NAV */}
        <nav className="navbar navbar-secondary collapsed" role="navigation">
            <ul className="list-group small">
                {/* START - BASE LIST ITEM */}
                <li className="list-group-item">
                    {/* START - LEVEL 2 - COLLAPSABLE TRIGGER */}
                    {/* Developer note: must have data-toggle="collapse" and data-target value must match ID of "COLLAPSABLE CONTENT"*/}
                    <Link className="collapsed" data-toggle="collapse" data-target="#secondary-nav-collapse-1">
                        <br/>
                        <br/>My Account <span className="lt-icon lt-carat-down lt-medium"></span>
                    </Link>
                    {/* END - LEVEL 2 - COLLAPSABLE TRIGGER */}
                    {/* START - LEVEL 2 - COLLAPSABLE CONTENT */}
                    <div className="collapse in" id="secondary-nav-collapse-1" aria-expanded="true" style={{height: 'auto'}}>
                        {/* START - LEVEL 2 - LIST */}
                        <ul className="list-group mb-0 mt-2">
                            <li className="list-group-item"><Link className="active" to="#">Profile</Link>
                            </li>
                            <li className="list-group-item"><Link to="#">Password</Link>
                            </li>
                            <li className="list-group-item"><Link to="#">Account Balance</Link>
                            </li>
                            <li className="list-group-item"><Link to="#">Pay Avon</Link>
                            </li>
                            <li className="list-group-item"><Link to="#">Get Paid by Avon</Link>
                            </li>
                        </ul>
                        {/* END - LEVEL 2 - LIST */}
                    </div>
                    {/* END - LEVEL 2 - COLLAPSABLE CONTENT */}
                </li>
                {/* END - BASE LIST ITEM */}
            </ul>
        </nav>
        {/* END - SECONDARY NAV */}
    </Link>
    <main className="col-md-9" role="main">
        <h2><br/>My Profile (Address Change &amp; Validation)</h2>
        <hr/>
        {/* START - NAME AND ADDRESS*/}
        <section className="profile-name-address">
            <h5 className="my-5">NAME &amp; ADDRESS</h5>
            <p>Need to temporarily deliver your order to another address? Update any time by clicking Edit below.</p>
            <div className="row my-5">
                <div className="form-group">
                    <div className="col-sm-4">
                        <h6>Name</h6>
                    </div>
                    <div className="col-sm-8">Nancy Ferguson</div>
                </div>
            </div>
            <div className="row my-5">
                <div className="form-group">
                    <div className="col-sm-4">
                        <h6>Billing Address</h6>
                    </div>
                    <div className="col-sm-8">5403 Old Nc 18
                        <br/>Connellys Spg,NC 28612</div>
                </div>
            </div>
            <div className="row my-5">
                <div className="form-group">
                    <div className="col-sm-4">
                        <h6>Shipping Address</h6>
                    </div>
                    <div className="col-sm-8">5403 Old Nc 18
                        <br/>Connellys Spg, NC 28612</div>
                </div>
            </div>
            <Link className="disabled">
                <button className="btn btn-sm btn-primary">Edit</button>
            </Link>
        </section>
        {/* END - NAME AND ADDRESS*/}
        <hr/>
        {/* START - NAME AND ADDRESS EDIT*/}
        <section className="profile-name-address">
            <h5 className="my-5">NAME &amp; ADDRESS</h5>
            <p>Need to temporarily deliver your order to another address? Update any time by clicking Edit below.</p>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-12 col-md-6 m-top-s1">
                        <label className="control-label">Name</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="name" validate-spl-char="" aria-invalid="false" placeholder="Test Account"/>
                        <div className="m-top-s3 ">
                            <h6>Billing Address</h6>
                        </div>
                    </div>
                </div>
                <div className="row m-top-s0">
                    <div className="col-sm-12 col-md-6 mb-4">
                        <label className="control-label">Address 1</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="billingaddress" validate-spl-char="" aria-invalid="false"/>
                        <div> <span className="has-error"><small className="mb-3 text-danger ng-binding">Please enter a valid address.</small></span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-4">
                        <label className="control-label">Address 2 (optional)</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="billingaddress2" validate-spl-char="" aria-invalid="false"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 mb-4">
                        <label className="control-label">City</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="city" validate-spl-char="" aria-invalid="false"/>
                        <div> <span className="has-error"><small className="mb-3 text-danger ng-binding">Please enter a city.</small></span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <label className="control-label">State</label>
                        <div className="form-group has-feedback">
                            <select className="form-control ng-pristine ng-valid ng-touched" ng-model="typeSelected" ng-init="typeSelected = transactionTypes[0]" aria-invalid="false">
                                <option value="0" selected="selected" label="Select">Select</option>
                                <option value="1" label="AL">AL</option>
                                <option value="2" label="AK">FL</option>
                                <option value="3" label="AZ">WA</option>
                            </select> <span className="lt-icon lt-triangle-down form-control-feedback"></span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <label className="control-label">Zip</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="zip" validate-spl-char="" aria-invalid="false"/>
                    </div>
                </div>
                <div className="row m-top-s1">
                    <div className="col-md-12">
                        <div className="checkbox one two">
                            <label>
                                <input type="checkbox" id="checkbox1" name="checkbox1" value="option1" checked=""/> <span className="mr-4"><i className="lt-icon lt-checkbox-checkmark lt-small"></i><i className="indeterminate lt-icon lt-checkbox-minus"></i></span>
                                Shipping address is the same as billing address</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="m-top-s2">
                            <h6>Shipping Address</h6>
                        </div>
                    </div>
                </div>
                <div className="row m-top-s0">
                    <div className="col-sm-12 col-md-6 mb-4">
                        <label className="control-label">Address 1</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="shippingaddress" validate-spl-char="" aria-invalid="false"/>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-4">
                        <label className="control-label">Address 2 (optional)</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="shippingaddress2" validate-spl-char="" aria-invalid="false"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 mb-4">
                        <label className="control-label">City</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="city" validate-spl-char="" aria-invalid="false"/>
                    </div>
                    <div className="col-sm-12 col-md-2">
                        <label className="control-label">State</label>
                        <div className="form-group has-feedback">
                            <select className="form-control ng-pristine ng-valid ng-touched" ng-model="typeSelected" ng-init="typeSelected = transactionTypes[0]" aria-invalid="false">
                                <option value="0" selected="selected" label="Select">Select</option>
                                <option value="1" label="AL">AL</option>
                                <option value="2" label="AK">FL</option>
                                <option value="3" label="AZ">WA</option>
                            </select> <span className="lt-icon lt-triangle-down form-control-feedback"></span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 mb-4">
                        <label className="control-label">Zip</label>
                        <input type="text" className="form-control ng-pristine ng-untouched ng-valid" confirm-beforeexit="" name="zip" validate-spl-char="" aria-invalid="false"/>
                    </div>
                </div>
            </div>
            <div>
                <Link className="disabled">
                    <button className="btn btn-sm btn-primary">Save</button>
                </Link>
                <Link className="disabled">
                    <button className="btn btn-sm btn-default">Cancel</button>
                </Link>
            </div>
        </section>
        {/* END - NAME AND ADDRESS EDIT*/}
        <hr/>
        <div><Link to="#" data-toggle="modal" data-target="#addressvalidation1">Address Validation Modal 1</Link>
            <br/> <Link to="#" data-toggle="modal" data-target="#addressvalidation2">Address Validation Modal 2</Link>
            <br/>
            <br/>
        </div>
        {/* START ADDRESS VALIDATION MODAL 1 */}
        <section className="modal has-no-footer fade " id="addressvalidation1" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
                            <span className="lt-icon lt-close lt-large py-1"></span>
                        </button>
                        <h4 className="modal-title text-center">ADDRESS VALIDATION</h4>
                    </div>
                    <div className="modal-body">
                        <section className="py-5">
                            <div className="row">
                                <div className="col-md-12 vcenter m-top-s0">
                                    <p>We are unable to verify your address as entered. Please confirm the correct address or try again.</p>
                                </div>
                                <div className="col-xs-12 text-left m-top-s2">
                                    <h6>Use the address I provided:</h6>
                                </div>
                                {/*START DEFAULT ADDRESS CONTENT*/}
                                <div className="m-top-s1 m-left-s3">
                                    <div className="radio col-md-4">
                                        <label className="text-black" style={{display: 'block'}}>
                                            <input type="radio" name="radioGroup" id="radio1" value="option1" checked=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                            123 Main Street
                                            <br/>Anywhere, KS 41098</label>
                                    </div>
                                </div>
                                {/*END DEFAULT ADDRESS CONTENT*/}
                                <div className="col-xs-12 text-left m-top-s1">
                                    <h6>Or select a matching address:</h6>
                                </div>
                                {/*START MODAL ADDRESS BOX CONTAINER*/}
                                <div className="reg-address-box-outer-container">
                                    <div className="reg-address-box-inner-container">
                                        <div className="text-left">
                                            <div>
                                                <div className="radio col-md-12">
                                                    <label className="text-black" style={{display: 'block'}}>
                                                        <input type="radio" name="radioGroup" id="radio2" value="option2" false=""/> <span className="mr-4 text-black" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                        123 Main Street
                                                        <br/>Anywho, KS 41098</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio col-md-12">
                                                    <label className="text-black" style={{display: 'block'}}>
                                                        <input type="radio" name="radioGroup" id="radio3" value="option3" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                        123 Main Street
                                                        <br/>Anywhat, KS 41097</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio col-md-12">
                                                    <label className="text-black" style={{display: 'block'}}>
                                                        <input type="radio" name="radioGroup" id="radio4" value="option4" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                        1234 Main Street
                                                        <br/>Anywhat, KS 41097</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio col-md-12">
                                                    <label className="text-black" style={{display: 'block'}}>
                                                        <input type="radio" name="radioGroup" id="radio5" value="option5" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                        123 Main Street
                                                        <br/>Anywhen, KS 41099</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio col-md-12">
                                                    <label className="text-black" style={{display: 'block'}}>
                                                        <input type="radio" name="radioGroup" id="radio6" value="option6" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                        4321 Main Street
                                                        <br/>Anywhen, KS 41099</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="radio col-md-12">
                                                    <label className="text-black" style={{display: 'block'}}>
                                                        <input type="radio" name="radioGroup" id="radio7" value="option7" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                        123 Rain Street
                                                        <br/>Anywhy, KS 41098</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*END MODAL ADDRESS BOX CONTAINER*/}
                                </div>
                                {/*START ACTION BUTTONS*/}
                                <div className="col-md-12 m-top-s2">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-md-push-6">
                                            <Link data-toggle="modal">
                                                <button className="btn btn-primary" style={{width: 100 + '%'}}>Select These Addresses</button>
                                            </Link>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-md-pull-6 m-top-xs-20">
                                            <Link data-toggle="modal">
                                                <button className="btn btn-default" style={{width: 100 + '%'}}>Cancel</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*END ACTION BUTTONS*/}
                                {/*START UPS LOGO & COPY*/}
                                <div className="col-md-12 m-top-s3">
                                    <p style={{lineHeight: 20 + 'px'}}>
                                        <img src="https://qaf.youravon.com/dam/avon-leads/images/ups-logo.png" className="m-right-s3 m-bottom-s2" alt="..." align="left"/><small>UPS, the UPS brand mark, and the Color Brown are trademarks of United Parcel Service of America, <br className="hidden-xs"/>Inc. All Rights Reserved.</small>
                                    </p>
                                </div>
                                {/*END UPS LOGO & COPY*/}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        {/* END ADDRESS VALIDATION MODAL 1 */}
        {/* START ADDRESS VALIDATION MODAL 2 */}
        <section className="modal has-no-footer fade " id="addressvalidation2" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close link-muted" data-dismiss="modal" aria-hidden="true"> <span className="sr-only">Close modal</span>
                            <span className="lt-icon lt-close lt-large py-1"></span>
                        </button>
                        <h4 className="modal-title text-center">ADDRESS VALIDATION</h4>
                    </div>
                    <div className="modal-body">
                        <section className="py-5">
                            <div className="row">
                                <div className="col-md-12 vcenter m-top-s0">
                                    <p>We are unable to verify your addresses as entered. Please confirm the correct addresses or try again.</p>
                                </div>
                                {/*START DEFAULT BILLING ADDRESS CONTENT*/}
                                <div className="col-xs-12 col-md-6 text-left m-top-s2">
                                    <div>
                                        <h6>Use the billing address provided:</h6>
                                    </div>
                                    <div className="radio">
                                        <label className="text-black" style={{display: 'block'}}>
                                            <input type="radio" name="radioGroup" id="radio8" value="option8" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                            123 Main Street
                                            <br/>Anywhere, KS 41098</label>
                                    </div>
                                    {/*END DEFAULT BILLING ADDRESS CONTENT*/}
                                    <div className="m-top-s2">
                                        <h6>Or select a matching address:</h6>
                                    </div>
                                    {/*START BILLING ADDRESS BOX CONTAINER*/}
                                    <div>
                                        <div className="reg-address-box-inner-container">
                                            <div className="text-left">
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio10" value="option10" false=""/> <span className="mr-4 text-black" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            123 Main Street
                                                            <br/>Anywho, KS 41098</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio11" value="option11" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            123 Main Street
                                                            <br/>Anywhat, KS 41097</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio12" value="option12" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            4321 Main Street
                                                            <br/>Anywhat, KS 41097</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio13" value="option13" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            123 Main Street
                                                            <br/>Anywhen, KS 41099</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio14" value="option14" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            321 Main Street
                                                            <br/>Anywhen, KS 41099</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio15" value="option15" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            123 Rain Street
                                                            <br/>Anywhy, KS 41098</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*END BILLING ADDRESS BOX CONTAINER*/}
                                    </div>
                                </div>
                                {/*START DEFAULT SHIPPING ADDRESS CONTENT*/}
                                <div className="col-xs-12 col-md-6 text-left m-top-s2">
                                    <div className="visible-xs visible-sm">
                                        <hr className="m-top-s0"/>
                                    </div>
                                    <div>
                                        <h6>Use the shipping address provided:</h6>
                                    </div>
                                    <div className="radio">
                                        <label className="text-black" style={{display: 'block'}}>
                                            <input type="radio" name="radioGroup" id="radio9" value="option9" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                            1111 Broadway
                                            <br/>Somewhere, OK 73008</label>
                                    </div>
                                    {/*END DEFAULT SHIPPING ADDRESS CONTENT*/}
                                    <div className="m-top-s2">
                                        <h6>Or select a matching address:</h6>
                                    </div>
                                    {/*START SHIPPING ADDRESS BOX CONTAINER*/}
                                    <div>
                                        <div className="reg-address-box-inner-container">
                                            <div className="text-left">
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio16" value="option16" false=""/> <span className="mr-4 text-black" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            2111 Broadway
                                                            <br/>Somewhere, OK 73008</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio17" value="option17" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            1112 Broadway
                                                            <br/>Somewhere, OK 73008</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio18" value="option18" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            2111 Broadway
                                                            <br/>Somewhere, OK 73008</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio19" value="option19" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            1111 Broadway
                                                            <br/>Someplace, OK 73007</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio20" value="option20" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            2111 Broadway
                                                            <br/>Someplace, OK 73007</label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="radio col-md-12">
                                                        <label className="text-black" style={{display: 'block'}}>
                                                            <input type="radio" name="radioGroup" id="radio21" value="option21" false=""/> <span className="mr-4" style={{marginBottom: 1.5 + 'rem'}}></span>
                                                            1111 Broadway
                                                            <br/>Something, OK 73009</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*END SHIPPING ADDRESS BOX CONTAINER*/}
                                    </div>
                                </div>
                                <div className="clearfix visible-xs visible-sm"></div>
                                {/*START ACTION BUTTONS*/}
                                <div className="col-md-12 m-top-s3">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-md-push-6">
                                            <Link data-toggle="modal">
                                                <button className="btn btn-primary" style={{width: 100 + '%'}}>Select These Addresses</button>
                                            </Link>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-md-pull-6 m-top-xs-20">
                                            <Link data-toggle="modal">
                                                <button className="btn btn-default" style={{width: 100 + '%'}}>Cancel</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/*END ACTION BUTTONS*/}
                                {/*START UPS LOGO & COPY*/}
                                <div className="col-md-12 m-top-s3">
                                    <p style={{lineHeight: 20 + 'px'}}>
                                        <img src="https://qaf.youravon.com/dam/avon-leads/images/ups-logo.png" className="m-right-s3 m-bottom-s2" alt="..." align="left"/><small>UPS, the UPS brand mark, and the Color Brown are trademarks of United Parcel Service of America, <br className="hidden-xs"/>Inc. All Rights Reserved.</small>
                                    </p>
                                </div>
                                {/*END UPS LOGO & COPY*/}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        {/* END ADDRESS VALIDATION MODAL 2 */}
    </main>
</div>
{/* /.row */}
{/* START - MAGNOLIA BLOCK */}
{/* START - GENERIC CONTENT BLOCK */}
<div className="generic-content-block bottom">
    <div className="reverse-bg py-3">
        <p className="m-0 text-center text-muted">Mangolia Managed Content Block</p>
    </div>
</div>
{/* END - GENERIC CONTENT BLOCK */}
{/* END - MAGNOLIA BLOCK */}
</section>
</Layout>