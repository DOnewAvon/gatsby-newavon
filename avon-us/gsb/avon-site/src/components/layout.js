import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import '../images/logos/your-avon-20.png'
import '../avon-main.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import GrayBG from "./lead-promo"



export default ({ children }) => <div className="app-wrapper">
<Header />
<Router>
  <Route path='/' component={ GrayBG } />
</Router>
{children}
<Footer />
</div>