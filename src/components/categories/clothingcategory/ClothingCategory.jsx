import React from 'react'
import './ClothingCategory.css'
import he from '../../../assets/icons/he.png'
import she from '../../../assets/icons/she.png'
import kids from '../../../assets/icons/kids.png'
import { Link } from 'react-router-dom'

function ClothingCategory() {
  return (
   <>
          <div className="category-container">
                <div className="category male">
                <Link to='#'> <img src={he} alt="" /></Link>
                    <span>Male</span>
                </div>
                <div className="category female">
                  <Link to='#'><img src={she} alt="" /></Link>
                    <span>Female</span>
                </div>
                <div className="category children">
                    <div className="child">
                    <Link to='#'><img src={kids} alt="" />  </Link>
                    </div>
                    <span>Kids</span>
                </div>

            </div>
   
   
   </>
  )
}


export default ClothingCategory
