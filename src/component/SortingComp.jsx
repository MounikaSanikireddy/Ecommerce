import React from 'react'
import { useFilter } from '../Context/FilterContext'


function SortingComp() {
     let {filterData,updateSort}  = useFilter()
   //   const [toggleView, setToggleView] = useState(true);
  return (
     <div className="row d-flex justify-content-between m-5">
        
        <div className="col-md-6">
          <h3 style={{gap:"10px"}}><b>{filterData.length}</b>Products Available</h3>
        </div>
        <div className="col-md-3">
           <select name="" id="" onChange={(e)=>{
            updateSort(e)
           }}>
            <option value="lowest">Lowest</option>
            <option disabled></option>
            <option value="highest">Highest</option>
            <option disabled></option>
            <option value="A_Z">A_Z</option>
            <option disabled></option>
            <option value="Z_A">Z_A</option>
           </select>
        </div>
     </div>
  )
}

export default SortingComp