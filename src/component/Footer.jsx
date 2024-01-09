import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{height:"230px", width:"100%", backgroundColor:'black'}}>
      <div style={{color:"white",gap:"50px"}} >
        <br></br>
        <div className='d-flex justify-content-evenly' style={{fontSize:"large"}}>
        <h4>Get to know us</h4>
        <Link to="/about" style={{textDecoration:"none"}}><p >About us</p></Link>
        <Link to="/contact"style={{textDecoration:"none"}}><p>Contact us</p></Link>
        </div>
        <div className='d-flex justify-content-center align-content-center' >
          <div style={{marginLeft:"10px"}}>
            <h4>Connect with us</h4>
            <p>Twitter</p>
            <p>FaceBook</p>
            <p>Instagram</p>
          </div>
          <div style={{paddingLeft:"80px"}}>
            <h4>Buy Know</h4>
            <p>PayCard</p>
            <p>Pay UPI</p>
          </div>
        </div>
        
      </div>
      
    </div>
    </>
  )
}

export default Footer