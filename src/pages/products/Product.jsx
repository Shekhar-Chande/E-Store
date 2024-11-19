import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Product.css";
import Watches from "../../api/watches/watches";
import Mobile from "../../api/mobiles/Mobile";
import { fetchWatches } from '../../redux/slice/watches';
import { fetchMobiles } from '../../redux/slice/mobiles'
import { useSelector } from "react-redux";


function Product() {
  const watchstate = useSelector((state) => state);
  const mobilestate = useSelector((state)=> state);
  const watchflag = watchstate.watches.flag
  const mobileflag = mobilestate.mobiles.flag

  return (
    <>
      <Navbar />
     {watchflag && !mobileflag && <Watches />} 
     { <Mobile />}
    </>
  );
}

export default Product;
