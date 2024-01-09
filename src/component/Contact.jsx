import React from 'react'

function Contact() {
  return (
    <>
    <div style={{backgroundImage:`url("https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg=")`,height:"90vh",backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",position:"relative"}}>
    <marquee directon="Left" height="100px" ><h1 style={{color:"white",fontSize:"70px",marginTop:"10px"}}>CONTACT US</h1></marquee>
    
    <div className='d-flex flex-column justify-content-center' style={{height:"50px",gap:"20px",position:"absolute",marginLeft:"600px",marginTop:"200px",textAlign:"center"}}>
      <button className='btn btn-danger'>EMAIL</button>
      <button className='btn btn-danger'>HELP CENTER</button>
      <button className='btn btn-danger'>CHAT US</button>
    </div>
  
    </div>
    
   
    
    </>
    
  )
}

export default Contact