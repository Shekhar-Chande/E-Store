import whitelogo from "../../assets/white_logo.png";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchWatches } from '../../redux/slice/watches'
import { fetchMobiles } from "../../redux/slice/mobiles";



function Navbar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="navbar">
        <div className="left-nav">
       <Link to="/"> <img src={whitelogo} alt="" /></Link>
        </div>
        <div className="center-nav">
          <IoSearchOutline size={30}/>
          <input className="search" size={80} type="text" placeholder="Search Here......" />
        </div>
        <div className="right-nav">
        <RiAccountCircleFill size={30}/>
        <CiShoppingCart size={30}/>
        </div>
      </div>
      <div className="categories">
          <ul className="categories-list">
            <li>Books</li>
          <Link style={{textDecoration:'none'}} to={"/clothingcategory"}><li>Clothing</li></Link>
            <li className="electronic">Electornics & Accessories
                <ul className="sub">
                  <li onClick={(e)=> dispatch(fetchMobiles())}>Mobiles</li>
                  <li>Laptops</li>
                  <li onClick={(e)=> dispatch(fetchWatches())}>Watches</li>
                </ul>
            </li>
        
            <Link style={{textDecoration:'none'}} to={"/footwearcategories"}>
            <li>Footwear</li></Link>
                
          </ul>
      </div>
    </>
  );
}

export default Navbar;
