import { useDispatch, useSelector } from 'react-redux'
import { fetchWatches } from '../../redux/slice/watches'
import './watches.css'
import React from 'react'

function watches() {
    const state = useSelector((state) => state);

    if (state.watches.isLoading) {
      return <h1>Loading......</h1>
    }
  
    
  return (
    <>
     <div className="container">
      {
       state.watches.data ? state.watches.data.map((e)=>( 
       <div className="watch-card" key={e["Unnamed: 0"]}>
         <img src={e.Image} alt="" />
       <span className="watch-brand">{e.Brand}</span>
       <span className="watch-price">{e.Price}</span>
     </div>
   ) ): null
   
   
   }
  </div>  
    </>
  )
}

export default watches