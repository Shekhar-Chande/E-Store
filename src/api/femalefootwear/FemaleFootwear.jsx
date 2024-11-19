import React from "react";
import  { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./FemaleFootwear.css";
import { Link } from "react-router-dom";

function FemaleFootwear() {
  const [brand, setBrand] = useState([]);
  const getdata = () => {
    const url = 'https://ecommerce-api3.p.rapidapi.com/femalefootwear';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ecaf472777mshbcf237dc837eb29p14954ejsndc4bf80057ec',
            'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
        }
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
         console.log(typeof data)
        setBrand(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Navbar/>
      <div className="container">
        {brand
          ? brand.map((e) => (
              <div className="footwear-card" key={e["Unnamed: 0"]}>
                <Link to={`/femalefootwareDetails/${e["Unnamed: 0"]}`}>
                  <img src={e.Image} alt="" />
                </Link>
                <span className="footwear-brand">{e.Brand}</span>
                <span className="footwear-price">{e.Price}</span>
              </div>
            ))
          : null}
      </div>
    </>
  );
}

export default FemaleFootwear;
