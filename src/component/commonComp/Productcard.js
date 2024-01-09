import React from 'react'
import { NavLink } from 'react-router-dom'

function Productcard({ item })
{
  let { title, price, thumbnail, id } = item
  return (
    <>
      <div className='col-md-3 m-2'>
        <div className='d-flex flex-row'>

          <NavLink to={`/singlepage/${id}`}> <img src={thumbnail} alt="abc" className='img-fluid' style={{ height: "215px", width: "250px", position: "relative" }} /> </NavLink>
          <p style={{ position: "absolute", color: "white", border: "2px solid white", backgroundColor: "black", borderRadius: "5px", paddingRight: "2px" }}>{title}</p>
        </div>
        <p style={{ fontWeight: "bold", padding: "10px" }}>{title}</p>

        <p style={{ fontWeight: "revert-layer" }}>Price:{price}$</p>
      </div>
    </>
  )
}

export default Productcard