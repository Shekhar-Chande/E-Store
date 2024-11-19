import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Product.css'
import Watches from '../../api/watches/watches'
import Mobile from '../../api/mobiles/Mobile'
function Product() {
 

  return (
    <>
       <Navbar /> 
       <Watches/> 
      <Mobile/>
    </>
  )
}


export default Product
