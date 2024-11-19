import React, { useState, useEffect } from 'react'
import './Allproducts.css'


function Allproducts() {
    // const[brand, setBrand] = useState([])
    //  const getdata=()=>{
    //     const url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'x-rapidapi-key': 'a66d9af3c0mshfb36468bdaa4792p1fe038jsnd6d4f2142e5e',
    //                 'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    //             }
    //         };
         
    //         fetch(url, options)
    //         .then((res)=>{
    //             return res.json()
    //         })
    //         .then((data)=>{
    //             // console.log(typeof data)
    //              setBrand(data)
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })
    // }

    // useEffect(()=>{
    //     getdata()        
    // }, [])

  return (
    <>
    {/* <div className="container">
        {brand ? brand.map((e)=> 
            <div className='footwear-card' key={brand.Unnamed}> 
                <img src={e.Image} alt="" />
                <span className='footwear-brand'>{e.Brand}</span>
                <span className='footwear-price'>{e.Price}</span>
            </div>

        ) : null}
    </div> */}
    </>
  )
}

export default Allproducts




