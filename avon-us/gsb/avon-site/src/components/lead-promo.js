import React from "react"


const GrayBG = () => {

    const divStyle = {
        backgroundColor: '#f9f9f9',
        height: 48 + 'px',
        borderTop: 1 + 'px',
        borderTopStyle: 'solid',
        padding: '5 0',
      };

  
    const LeadPromo = () => (
      <div className="col-xs-12 gray-bg text-center pt-3" style={divStyle}>
           <p>Get started with Avon for just $10!  Receive $546 in free product when you meet the goals.  Offer expires August 6.</p>
      </div>)
      return LeadPromo
}
export default GrayBG;