import React, { useState, useEffect } from 'react'
import './Footwear.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

function Footwear() {
  
    const[brand, setBrand] = useState([])
    const getdata=()=>{
       const url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
           const options = {
               method: 'GET',
               headers: {
                   'x-rapidapi-key': 'a66d9af3c0mshfb36468bdaa4792p1fe038jsnd6d4f2142e5e',
                   'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
               }
           };
        
           fetch(url, options)
           .then((res)=>{
               return res.json()
           })
           .then((data)=>{
               // console.log(typeof data)
                setBrand(data)
           })
           .catch((err)=>{
               console.log(err)
           })
        }

        
    useEffect(()=>{
        getdata()        
    }, [])
  return (
    <>
    <Navbar/>
    <div className="container">
        {brand ? brand.map((e)=> 
            <div className='footwear-card' key={e["Unnamed: 0"]}> 
             <Link to={`/ProductDetails/${e["Unnamed: 0"]}`}><img src={e.Image} alt="" /></Link>
                <span className='footwear-brand'>{e.Brand}</span>
                <span className='footwear-price'>{e.Price}</span>
            </div>

        ) : null}
    </div>
    </>
  )
}

export default Footwear