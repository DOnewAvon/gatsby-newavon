import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import '../images/logos/your-avon-20.png'
import '../../avon-main.scss'

export default ({ children }) => <div>
<meta name="viewport" content="width=device-width, initial-scale=1">
</meta><Header />
 

{children}
<Footer />
</div>