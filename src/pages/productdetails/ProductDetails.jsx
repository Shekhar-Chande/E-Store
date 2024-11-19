import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./ProductDetails.css";

function ProductDetails() {
  let { id } = useParams();
  const [details, setDetails] = useState([]);

  const getdata = () => {
    const url = `https://ecommerce-api3.p.rapidapi.com/malefootwear`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a66d9af3c0mshfb36468bdaa4792p1fe038jsnd6d4f2142e5e",
        "x-rapidapi-host": "ecommerce-api3.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
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
      <Navbar />
      {details.map((e) => {
        {
          if (e["Unnamed: 0"] == id) {
            return (
              <div className="container-productdetails">
                <div className="left-productdetails">
                  <img src={e.Image} alt="" />
                  <button className="cart">Add to Cart</button>
                </div>
                <div className="right-productdetails">
                  <table className="product-description">
                    <tr className="table-data">
                      <td className="one">Brand:</td>
                      <td className="two">{e.Brand}</td>
                    </tr>

                    <tr className="table-data">
                      <td className="one">Price:</td>
                      <td className="two">{e.Price}</td>
                    </tr>

                    <tr className="table-data">
                      <td className="one">Category:</td>
                      <td className="two">{e.Tag}</td>
                    </tr>

                    <tr className="table-data">
                      <td className="one">Description:</td>
                      <td className="two">{e.Description}</td>
                    </tr>
                  </table>
                </div>
              </div>
            );
          } else {
            console.log("Err");
          }
        }
      })}
    </>
  );
}

export default ProductDetails;
