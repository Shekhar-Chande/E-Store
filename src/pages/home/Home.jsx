import React from 'react'
import './Home.css'
import front_photo from '../../assets/front_image1.png'
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()

  const productListing = () =>{
    navigate('/products')
  }
  return (
        <>
          <div className="container">
              <img className='front_photo' src={front_photo} alt="" />
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='title'>
                    <p>One-Stop <br /> <span>S</span>hopping  <span>D</span>estination </p>
                    <button onClick={()=> productListing()} className='glow-on-hover'>Explore Now </button>
                </div>
              </div>
        </>
  )
}

export default Home
