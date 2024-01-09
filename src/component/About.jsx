import React from 'react'
import Banner from './commonComp/Banner'

function About()
{
  return (
    <>
      <Banner content="Welcome to  About page" />
      <div style={{textAlign:"center",paddingTop:"50px",fontSize:"50px",fontFamily:"monospace",color:"gray"}}>
      <b>Together We Dare To Maximise</b>
      </div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel " style={{marginTop:"50px",marginBottom:"100px"}}>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://i.pinimg.com/736x/84/ba/64/84ba64190cafb91bad0314858dadd44f.jpg" class="d-block  w-50 m-auto" alt="..."  style={{borderRadius:"10px"}}/>
            <div class="carousel-caption d-none d-md-block">
              <h5>We care</h5>
             
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg" class="d-block w-50 m-auto" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Experiment.Learn.Grow</h5>
            
              </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://apicms.thestar.com.my/uploads/images/2021/02/23/1053702.jpg" class="d-block  w-50 m-auto" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Work with the best</h5>
             
              </div>
          </div>
         
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>

  )
}

export default About