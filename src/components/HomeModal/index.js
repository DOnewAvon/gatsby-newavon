import React from 'react'
import Link from 'gatsby-link'


export default props => 
<section className="container container--page">
        {/* START - ROTATING BANNER */}
        <section className="mb-5 ng-scope" ng-controller="notifyMeController" ng-show="showNofifyBanner" aria-hidden="false">
          <section className="alert alert-reverse banner-notifications">
            <div className="row">
              <div className="col-md-12 col-xs-12 d-flex align-items-center justify-content-between">
                <div id="home-banner-carousel" className="carousel carousel--banner slide flex-fill text-left" data-ride="carousel" data-interval="0">
                  <div className="carousel-inner" id="notificationMessages">
                    {/* ngRepeat: notify in notifyMeArray */}
                    <div className="item ng-scope active" id="notify" ng-className="{active: (isNotifyMeAvailable &amp;&amp; $index == 0)}" ng-repeat="notify in notifyMeArray">
                      <span className="ng-binding" ng-bind-html="notify">
                        <p>
                          <strong>HUGE DEALS: 
                          </strong>We’re hosting 12 Days of Deals starting November 29. Tell all your customers to shop your Online Store to snag these incredible gifts with purchase.
                        </p>
                      </span>
                    </div>
                    {/* end ngRepeat: notify in notifyMeArray */}
                    <div className="item ng-scope" id="notify" ng-className="{active: (isNotifyMeAvailable &amp;&amp; $index == 0)}" ng-repeat="notify in notifyMeArray">
                      <span className="ng-binding" ng-bind-html="notify">
                        <p>
                          <strong>INTRODUCING YOURAVON 2.0
                          </strong>
                          <br />
                          <u>
                            <Link href="/home/video-gallery/tutorials">Click here
                            </Link>
                          </u> to view the tutorial video. For additional training, head to 
                          <u>
                            <Link href="/home/avon-u" target="_blank">AVON U
                            </Link>
                          </u> and be sure to earn the YourAvon 2.0
                          badge!&nbsp;
                        </p>
                      </span>
                    </div>
                    {/* end ngRepeat: notify in notifyMeArray */}
                    <div className="item ng-scope" id="notify" ng-className="{active: (isNotifyMeAvailable &amp;&amp; $index == 0)}" ng-repeat="notify in notifyMeArray">
                      <span className="ng-binding" ng-bind-html="notify">
                        <p>
                          <strong>INTRODUCING YOUR NEW ONLINE STORE
                          </strong>
                          <br />
                          Enjoy a new and improved look and feel to your online store. 
                          <Link href="/home/my-estore.html">
                            <u>Edit Online Store
                            </u>
                          </Link>
                        </p>
                      </span>
                    </div>
                    {/* end ngRepeat: notify in notifyMeArray */}
                    {/* ngRepeat: product in productDetailJson */}
                    <div className="item ng-scope" id="product" ng-className="{active: (!isNotifyMeAvailable &amp;&amp; $index == 0)}" ng-repeat="product in productDetailJson">
                      <span className="ng-binding" ng-bind-html="(prodAvailInfo)+(product.prodNm)+(backInStock)" ng-click="redirectToPDP(product.prodFscNr,product.prodDetlId)" role="button" tabindex="0">The item Perceive for Men Cologne Spray is back in
                        stock. Click here to order.
                      </span>
                    </div>
                    {/* end ngRepeat: product in productDetailJson */}
                    <div className="item ng-scope" id="product" ng-className="{active: (!isNotifyMeAvailable &amp;&amp; $index == 0)}" ng-repeat="product in productDetailJson">
                      <span className="ng-binding" ng-bind-html="(prodAvailInfo)+(product.prodNm)+(backInStock)" ng-click="redirectToPDP(product.prodFscNr,product.prodDetlId)" role="button" tabindex="0">The item Avon True Color Flawless Cream-to-Powder
                        Foundation is back in stock. Click here to order.
                      </span>
                    </div>
                    {/* end ngRepeat: product in productDetailJson */}
                    <div className="item ng-scope" id="product" ng-className="{active: (!isNotifyMeAvailable &amp;&amp; $index == 0)}" ng-repeat="product in productDetailJson">
                      <span className="ng-binding" ng-bind-html="(prodAvailInfo)+(product.prodNm)+(backInStock)" ng-click="redirectToPDP(product.prodFscNr,product.prodDetlId)" role="button" tabindex="0">The item Velvet Vial-on-Card Sample- Pack of 5 is
                        back in stock. Click here to order.
                      </span>
                    </div>
                    {/* end ngRepeat: product in productDetailJson */}
                  </div>
                </div>
                <div className="carousel-controls mx-4 nowrap hidden-xs" ng-show="isArrowsShown" aria-hidden="false">
                  <Link ng-non-bindable="" className="left" href="#home-banner-carousel" data-slide="prev" data-analytics="browse-messages">
                    <span className="lt-icon lt-left lt-large">
                    </span>
                  </Link>
                  <Link ng-non-bindable="" className="right" href="#home-banner-carousel" data-slide="next" data-analytics="browse-messages">
                    <span className="lt-icon lt-right lt-large">
                    </span>
                  </Link>
                </div>
                <div className="ml-4 mr-3" data-analytics="view-all-messages-center">
                  <Link href="#" className="view-all ng-binding" ng-click="navigateToMessageCenterPage()" ng-bind-html="viewAllLinklbl">View All
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* END - ROTATING BANNER */}
        <section className="mb-5">
          <div className="row">
            <div className="col-md-12 col-xs-12">

              <div align="center" className="m-top-s0 m-bottom-s1">
                <div id="carousel-home-page" className="carousel slide" data-ride="carousel" data-interval="8000">
                  {/* Indicators */}
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-home-page" data-slide-to="0" className="active">
                    </li>
                    <li data-target="#carousel-home-page" data-slide-to="1" className="">
                    </li>
                    <li data-target="#carousel-home-page" data-slide-to="2" className="">
                    </li>
                  </ol>
                  {/* Wrapper for slides */}
                  <div className="carousel-inner">
                    <div className="item active">
                      <Link href="/home/campaign-insider" data-link="gemini:hp-a-spot:anew-hydra-fusion:20180904">
                        <img src="./images/a-spots/hp-a-spot-anew-hydra-fusion-desktop-gem-v2-en.jpg" className="hidden-xs img-responsive" alt="Anew Hyrdra Fusion"/>
                      </Link>
                      <Link href="/home/campaign-insider" data-link="gemini:hp-a-spot:fall-for-paris:20180904">
                        <img src="./images/a-spots/hp-a-spot-anew-hydra-fusion-mobile-gem-en.jpg" className="visible-xs img-responsive" alt="Anew Hydra Fusion"/>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/home/rake-in-the-cash" data-link="gemini:hp-a-spot:rake-in-the-cash:20180830">
                        <img src="./images/a-spots/hp-a-spot-rake-in-the-cash-desktop-gem-en.jpg" className="hidden-xs img-responsive" alt="Rake in the Cash"/>
                      </Link>
                      <Link href="/home/rake-in-the-cash" data-link="gemini:hp-a-spot:rake-in-the-cash:20180830">
                        <img src="./images/a-spots/hp-a-spot-rake-in-the-cash-mobile-gem-en.jpg" className="visible-xs img-responsive" alt="Rake in the Cash"/>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="/home/ordering/product-list.html?lvl=2&amp;deptHr=301" data-link="gemini:hp-a-spot:unlimited-lashes:20180904">
                        <img src="./images/a-spots/hp-a-spot-lashes-mascara-desktop-gem-en-v2.jpg" className="hidden-xs img-responsive" alt="Unlimited Lashes"/>
                      </Link>
                      <Link href="/home/ordering/product-list.html?lvl=2&amp;deptHr=301" data-link="gemini:hp-a-spot:unlimited-lashes:20180904">
                        <img src="./images/a-spots/hp-a-spot-lashes-mascara-mobile-gem-en-v2.jpg" className="visible-xs img-responsive" alt="Unlimited Lashes"/>
                      </Link>
                    </div>
                  </div>
                  {/* Controls */}
                  <Link className="left carousel-control" href="#carousel-home-page" data-slide="prev" ng-non-bindable="">
                    <img className="arrow arrow-left" alt="..." src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjhGOTI1OUZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjhGOTI1QUZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGOEY5MjU3RkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZGOEY5MjU4RkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+shpj0QAABCJJREFUeNrs3OlTEmEcwHFYZEEBBcxy0sq8stTkD8i0+1I7PbKSrH+qu6w80KZxytSZprTjdYMjHnlkmtbkhQkpoCz9noeF6b17PDvP7hvfufP9PL+9cFEbiUT6NBRvjIbyTQVQAVQAFUAFUAFUABVABVDCFh5ZNvqqOgsivpCOOgAcf7Tdsfl2Oi38ZT6JKoDwKMQfa3dw3oDe3FE5mFCW6aMGAMfDynPLAb3lRdWgviJ7hZpzQHjMCyvfgePN7ZWCxxMNgOOPwMovrevNropBtipnRYz9EAkQHvcaIL4Ex7dB/PncFbH2xRAZX45XnjW3nvOwF8SLJw4gPLFi4MeeNbdA/MU8LzU3Qji+3OXgFiG+GeIviR9PDEB85VH8s7Me9rI08UQA4Hh0nV9YQ/FDbHW+V8r9ywrATfLx82sGPn6ZmochFL+KLnUovumMR454tCXIEj/1Jxr/e81ofgrxtfuW5VoIRpb4cj6+6bSs8ZIDcN9XWRz/yx+NryuQNV5SABxfBtd5FI/GnoB4yc4B3DRaeYj/SVa8JBOA49HKz/HxV8mJFx2Am+FXfg4f80OkxYsKgOPRys9C/BOIr9+/ROKjtygA3KwPxZfg+McQf43MeFEAcHxpG4pPND08NcReJzdecAA41vWrh12x+GFDwwGi4wUFwPGlbQ7uhy/R9OAkil/UKGBjhFt5Pv7eiWGDs1AR8YIAoHj8Sc4MxN+F+MYixcRv+U4Qx8PYh9HK3zk+YrilrPgtT8Dm5zlLeGY1CcJnDbeLFzQK3LYEkHAow6fLtv4NPvJkhp6PpFIHwGSYNyx9NQO6rOQ1f2NvYahZeQhbPglihP5ahLDuvwkILcpCEOQyyCO4md2Wdb8TEFpH7VQBxBCSP9a5mV2A0NBTpBQEQW+FMcInHsEJCG3kIwj+MBSdhNoB+BmdBMIRRHkcZjItIZiEKIKztyjk+mqnCiCO8AEmYacpgCeBUARRPxJjdicjBDdGQOeEjjE7VQBxBHSJTAeEG93EIUjydwFmDz8JUYRCQLBRBRBHQJOwwxTkJ8FGFQDeWRY/CTGEl+M2qgDiCP01A8z2pKC//o3sCLK8H8DsTQniS2QMoXPCShVAHKGPn4S6rmK5EGR9RYbJscYQQhjh1aSVKoAYguV9jRsj1LyWHIGI1+R0uTxCWhRho+ublSqAOEIfIGxLDPmrpUMg6lVZjAA3S9pUYwwhhSqA/ydBazeiw+Gg2AhEvi6vy7PBJACCjUfonkqhCiCOAJdIQNiAw0E0BKK/MqPLtwXw4WA1RBF6hEcg/ktTGOFdtVubwm74r8CJUWAERXxtTldgD6D7BEDYDN4fTBfyd2uV9E9U0Gu26LNGjZ6JCPU7EzQK2tADFHXnAOpuhFQAFUAFUAFUABVABZBs+yfAAD8tSjLscAUnAAAAAElFTkSuQmCC"/>
                  </Link>
                  <Link className="right carousel-control" href="#carousel-home-page" data-slide="next" ng-non-bindable="">
                    <img className="arrow arrow-right" alt="..." src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjhGOTI1NUZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjhGOTI1NkZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGOEY5MjUzRkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZGOEY5MjU0RkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/LaByQAAA0lJREFUeNrs29tOE0EYB3A6a6C2brs9QZGKeAyW1vgAXvkAXmGLGo8Y9Z2MGo0H1KhYENQawMO1aYOKZ6PBG028sFvpzrbUbzfLBK+7uzOTmXmAJv9fZ6Yz33wNtNvt+S6BR0ACSAAJIAEkgASQABJAAgg6kFsf1K5hpXZwcri19DsoJEDr1c9Qs/wtVTtwex9PCK4uAXP6i1YbLeVRPGiqc4WKMhxvCLcH8IbgySaIS581vTCVR4mNpjoPCLtjDaEAbIQHnzS9OM08gqc/g3gSEMZsBKwuAMKumCHcOQDf/xjTDz/MsYrgy0EI3wOEI4CQtBCKFWWnZggFYCPcBYSj7CH4ehTGdz7E9GMzOZQKYXtjZADB97sAIMQBYQT1AsIcfQQqlyEHIQcIRgRmAtpBD4HabRDfeh/XT8xaCA1AqNJCoHodthGOA0IfIDwrVtG2qCEUgI0w8Q5mwqMcSocbkYWC7whMFERsBGsm9G+yZkIFDUWwUAA0EZgqieGbDsKAg7DVewTmaoJ+IzBZFMU3lhKwMY6gjIMw6B0Cs1VhfB0QTnqPwHRZHF8DhFM2wkrkxVgVZVQsFIA1jKtvE/Xxx54hcPEwAghJQMiiLaqFUIEN0hQKwEa48iZZP/PEdQSunsaMy6+T9bPlLBoEhOfuIHD3NmhcAoRz5awyFFmxKkudInD5OGpcXEzVzz/do8ByUDtcDqiLw9Eznv/Vczq33Pr+J9R8+UPt5LO4BLDOB7AUMsp2rb5h/0BNqCWwdkKEPeAv7AFVofaAtTuCWxsgVwDklujiTyA3ACS8iCdBUinKuB+e/dvgBCmOiHcbJCXzzWHPwjMLsC68eBUh8mzW73145gBI+HRYvKoweTpPhw2/wjMDQML3OeFFehki7TMUwlMHIOGtPgHRXodJCx3F8NQA/gtPsTmCCgBpo+0NYdrtMb4DrA/PQoOUrwCki5yhFjnfAKzw+qGpfCARFK9TFMJHIfxeFsN7DmCHL0D4WFC8bnFz5mtUHy0xHd4zADu8Ne21HvH+MWLOWt88H+FdB3DC5wPR7iYv/xpz9WnMuLCY5im8+0vAXA2sLte6aV1suC2ISAAJIAEkgASQABJAAkgACuOfAAMAvs0kdJEPkrYAAAAASUVORK5CYII="/>
                  </Link>
                </div>
              </div>
              {/* MODAL FOR THE RICH HTML COMPONENT */}

              {/* A-Spot Online Store Modal */}
              <div className="modal fad modal-dialog modal-lg" id="myModalOnlineStore" tabindex="-1" role="dialog" aria-labelledby="myModalOnlineStoreLabel" aria-hidden="true">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close link-muted" data-dismiss="modal">
                      <span className="sr-only">Close modal
                      </span>
                      <span className="lt-icon lt-close lt-large py-1">
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12 m-bottom-s1" style={{marginTop: -20 + 'px'}}>
                        <h1 className="modal-title text-center">NEW ONLINE STORE FEATURES
                        </h1>
                      </div>
                    </div>
                    {/*MODAL CONTENT*/}
                    <div align="center" className="m-top-s0 m-bottom-s2">
                      <div id="carousel-home-page-modal" className="carousel slide" data-ride="carousel" data-interval="8000">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#carousel-home-page-modal" data-slide-to="0" className="">
                          </li>
                          <li data-target="#carousel-home-page-modal" data-slide-to="1" className="">
                          </li>
                          <li data-target="#carousel-home-page-modal" data-slide-to="2" className="active">
                          </li>
                          <li data-target="#carousel-home-page-modal" data-slide-to="3" className="">
                          </li>
                          <li data-target="#carousel-home-page-modal" data-slide-to="4" className="">
                          </li>
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                          <div className="item">
                            <div className="text-center">
                              <div className="row">
                                <div className="col-md-12" align="center">
                                  <img src="/dam/gemini/home/promos/2018/online-store/carousel-1.jpg" className="img-responsive" alt="..."/>
                                </div>
                                <div className="col-xs-8 col-xs-offset-2 m-top-s1 copy-block">
                                  <h4 className="modal-title">EASIER EDITING
                                  </h4>
                                  <p className="lp" style={{lineHeight: 22 +'px'}}>Easily edit items by clicking on the pink icons next to 
                                    <br className="hidden-xs" />different content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="text-center">
                              <div className="row">
                                <div className="col-md-12" align="center">
                                  <img src="/dam/gemini/home/promos/2018/online-store/carousel-2.jpg" className="img-responsive" alt=""/>
                                </div>
                                <div className="col-xs-8 col-xs-offset-2 m-top-s1 copy-block">
                                  <h4 className="modal-title">UPDATE YOUR PROFILE &amp; PERSONAL INFO DISPLAYED
                                  </h4>
                                  <p className="lp" style={{lineHeight: 22 + 'px'}}>Easily change and edit your profile image and choose 
                                    <br className="hidden-xs" />which personal information you’d like displayed.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item active">
                            <div className="text-center">
                              <div className="row">
                                <div className="col-md-12" align="center">
                                  <img src="/dam/gemini/home/promos/2018/online-store/carousel-3.jpg" className="img-responsive" alt="..." />
                                </div>
                                <div className="col-xs-8 col-xs-offset-2 m-top-s1 copy-block">
                                  <h4 className="modal-title">ADD YOUR OWN DESCRIPTION
                                  </h4>
                                  <p className="lp" style={{lineHeight: 22 + 'px'}}>Add some information about yourself.
                                    <br className="hidden-xs" />
                                    <br className="hidden-xs" />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="text-center">
                              <div className="row">
                                <div className="col-md-12" align="center">
                                  <img src="/dam/gemini/home/promos/2018/online-store/carousel-4.jpg" className="img-responsive" alt="..." />
                                </div>
                                <div className="col-xs-8 col-xs-offset-2 m-top-s1 copy-block">
                                  <h4 className="modal-title">ADD VIDEOS &amp; FEATURED CONTENT
                                  </h4>
                                  <p className="lp" style={{lineHeight: 22 + 'px'}}>Add your own YouTube videos and any of our pre-
                                    <br className="hidden-xs" />selected featured content.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="text-center">
                              <div className="row">
                                <div className="col-md-12" align="center">
                                  <img src="/dam/gemini/home/promos/2018/online-store/carousel-5.jpg" className="img-responsive" alt="" />
                                </div>
                                <div className="col-xs-8 col-xs-offset-2 m-top-s1 copy-block">
                                  <h4 className="modal-title">READY TO GET STARTED?
                                  </h4>
                                  <p className="lp" style={{lineHeight: 22 + 'px'}}>
                                    <br className="hidden-xs" />
                                    <br className="hidden-xs" />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* carousel-inner */}
                        {/* Controls */}
                        <Link className="left carousel-control" href="#carousel-home-page-modal" data-slide="prev" ng-non-bindable="">
                          <img className="arrow arrow-left" alt="..." src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjhGOTI1OUZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjhGOTI1QUZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGOEY5MjU3RkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZGOEY5MjU4RkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+shpj0QAABCJJREFUeNrs3OlTEmEcwHFYZEEBBcxy0sq8stTkD8i0+1I7PbKSrH+qu6w80KZxytSZprTjdYMjHnlkmtbkhQkpoCz9noeF6b17PDvP7hvfufP9PL+9cFEbiUT6NBRvjIbyTQVQAVQAFUAFUAFUABVABVDCFh5ZNvqqOgsivpCOOgAcf7Tdsfl2Oi38ZT6JKoDwKMQfa3dw3oDe3FE5mFCW6aMGAMfDynPLAb3lRdWgviJ7hZpzQHjMCyvfgePN7ZWCxxMNgOOPwMovrevNropBtipnRYz9EAkQHvcaIL4Ex7dB/PncFbH2xRAZX45XnjW3nvOwF8SLJw4gPLFi4MeeNbdA/MU8LzU3Qji+3OXgFiG+GeIviR9PDEB85VH8s7Me9rI08UQA4Hh0nV9YQ/FDbHW+V8r9ywrATfLx82sGPn6ZmochFL+KLnUovumMR454tCXIEj/1Jxr/e81ofgrxtfuW5VoIRpb4cj6+6bSs8ZIDcN9XWRz/yx+NryuQNV5SABxfBtd5FI/GnoB4yc4B3DRaeYj/SVa8JBOA49HKz/HxV8mJFx2Am+FXfg4f80OkxYsKgOPRys9C/BOIr9+/ROKjtygA3KwPxZfg+McQf43MeFEAcHxpG4pPND08NcReJzdecAA41vWrh12x+GFDwwGi4wUFwPGlbQ7uhy/R9OAkil/UKGBjhFt5Pv7eiWGDs1AR8YIAoHj8Sc4MxN+F+MYixcRv+U4Qx8PYh9HK3zk+YrilrPgtT8Dm5zlLeGY1CcJnDbeLFzQK3LYEkHAow6fLtv4NPvJkhp6PpFIHwGSYNyx9NQO6rOQ1f2NvYahZeQhbPglihP5ahLDuvwkILcpCEOQyyCO4md2Wdb8TEFpH7VQBxBCSP9a5mV2A0NBTpBQEQW+FMcInHsEJCG3kIwj+MBSdhNoB+BmdBMIRRHkcZjItIZiEKIKztyjk+mqnCiCO8AEmYacpgCeBUARRPxJjdicjBDdGQOeEjjE7VQBxBHSJTAeEG93EIUjydwFmDz8JUYRCQLBRBRBHQJOwwxTkJ8FGFQDeWRY/CTGEl+M2qgDiCP01A8z2pKC//o3sCLK8H8DsTQniS2QMoXPCShVAHKGPn4S6rmK5EGR9RYbJscYQQhjh1aSVKoAYguV9jRsj1LyWHIGI1+R0uTxCWhRho+ublSqAOEIfIGxLDPmrpUMg6lVZjAA3S9pUYwwhhSqA/ydBazeiw+Gg2AhEvi6vy7PBJACCjUfonkqhCiCOAJdIQNiAw0E0BKK/MqPLtwXw4WA1RBF6hEcg/ktTGOFdtVubwm74r8CJUWAERXxtTldgD6D7BEDYDN4fTBfyd2uV9E9U0Gu26LNGjZ6JCPU7EzQK2tADFHXnAOpuhFQAFUAFUAFUABVABZBs+yfAAD8tSjLscAUnAAAAAElFTkSuQmCC" />
                        </Link>
                        <Link className="right carousel-control" href="#carousel-home-page-modal" data-slide="next" ng-non-bindable="">
                          <img className="arrow arrow-right" alt="..."  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABQCAYAAACpv3NFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRjhGOTI1NUZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRjhGOTI1NkZFNUMxMUUzQUNBNEI2MzQ4M0MxQTA0OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGOEY5MjUzRkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZGOEY5MjU0RkU1QzExRTNBQ0E0QjYzNDgzQzFBMDQ5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/LaByQAAA0lJREFUeNrs29tOE0EYB3A6a6C2brs9QZGKeAyW1vgAXvkAXmGLGo8Y9Z2MGo0H1KhYENQawMO1aYOKZ6PBG028sFvpzrbUbzfLBK+7uzOTmXmAJv9fZ6Yz33wNtNvt+S6BR0ACSAAJIAEkgASQABJAAgg6kFsf1K5hpXZwcri19DsoJEDr1c9Qs/wtVTtwex9PCK4uAXP6i1YbLeVRPGiqc4WKMhxvCLcH8IbgySaIS581vTCVR4mNpjoPCLtjDaEAbIQHnzS9OM08gqc/g3gSEMZsBKwuAMKumCHcOQDf/xjTDz/MsYrgy0EI3wOEI4CQtBCKFWWnZggFYCPcBYSj7CH4ehTGdz7E9GMzOZQKYXtjZADB97sAIMQBYQT1AsIcfQQqlyEHIQcIRgRmAtpBD4HabRDfeh/XT8xaCA1AqNJCoHodthGOA0IfIDwrVtG2qCEUgI0w8Q5mwqMcSocbkYWC7whMFERsBGsm9G+yZkIFDUWwUAA0EZgqieGbDsKAg7DVewTmaoJ+IzBZFMU3lhKwMY6gjIMw6B0Cs1VhfB0QTnqPwHRZHF8DhFM2wkrkxVgVZVQsFIA1jKtvE/Xxx54hcPEwAghJQMiiLaqFUIEN0hQKwEa48iZZP/PEdQSunsaMy6+T9bPlLBoEhOfuIHD3NmhcAoRz5awyFFmxKkudInD5OGpcXEzVzz/do8ByUDtcDqiLw9Eznv/Vczq33Pr+J9R8+UPt5LO4BLDOB7AUMsp2rb5h/0BNqCWwdkKEPeAv7AFVofaAtTuCWxsgVwDklujiTyA3ACS8iCdBUinKuB+e/dvgBCmOiHcbJCXzzWHPwjMLsC68eBUh8mzW73145gBI+HRYvKoweTpPhw2/wjMDQML3OeFFehki7TMUwlMHIOGtPgHRXodJCx3F8NQA/gtPsTmCCgBpo+0NYdrtMb4DrA/PQoOUrwCki5yhFjnfAKzw+qGpfCARFK9TFMJHIfxeFsN7DmCHL0D4WFC8bnFz5mtUHy0xHd4zADu8Ne21HvH+MWLOWt88H+FdB3DC5wPR7iYv/xpz9WnMuLCY5im8+0vAXA2sLte6aV1suC2ISAAJIAEkgASQABJAAkgACuOfAAMAvs0kdJEPkrYAAAAASUVORK5CYII=" />
                        </Link>
                      </div>
                      {/* carousel-home-page-modal */}
                    </div>
                    <div className="clearfix">
                    </div>
                    {/*END MODAL CONTENT*/}
                    <div className="modal-footer" style={{textAlign: 'center'}} align="center">
                      <Link href="/home/my-estore.html" target="_blank">
                        <button type="button" className="btn btn-primary">Edit Your Store
                        </button>
                      </Link>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>