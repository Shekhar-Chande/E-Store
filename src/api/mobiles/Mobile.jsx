import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMobiles } from '../../redux/slice/mobiles'
import './Mobile.css'

function Mobile() {
    const state = useSelector((state)=> state);
    
    if(state.mobiles.isLoading){
        return <h1>Loading......</h1>
      }
  //  console.log(state.mobiles.data)

  return (
    <>
    <div className="container">
      {
       state.mobiles.data ? state.mobiles.data.map((e)=>( 
       <div className="mobile-card" key={e["Unnamed: 0"]}>
         <img src={e.Image} alt="" />
       <span className="mobile-brand">{e.Brand}</span>
       <span className="mobile-price">{e.Price}</span>
     </div>
   ) ): null
   
   
   }
  </div>  

    </>
  )
}

export default Mobile