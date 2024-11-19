import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Product from "./pages/products/Product"
import Footwear from "./api/footwear/Footwear"
import ProductDetails from "./pages/productdetails/ProductDetails"
import FootwearCategories from "./components/categories/footwearcategory/FootwearCategories"
import FemaleFootwear from "./api/femalefootwear/FemaleFootwear"
import FemalefootwearDetails from "./pages/femalefootwearDetails/FemalefootwearDetails"
import KidsFootwear from "./api/kidsfootwear/KidsFootwear"
import KidsfootwearDetails from "./pages/kidsfootwearDetails/KidsfootwearDetails"
import ClothingCategory from "./components/categories/clothingcategory/ClothingCategory"


function App() {
  return (
 <>
 <Routes>
    <Route path="/" element={ <Home />}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/footwear" element={<Footwear/>}/>
    <Route path="/femalefootwear" element={<FemaleFootwear/>}/>
    <Route path="/femalefootwareDetails/:id" element={<FemalefootwearDetails/>}/>
    <Route path="/kidsfootwear" element={<KidsFootwear/>}/>
    <Route path="/kidsfootwearDetails/:id" element={<KidsfootwearDetails/>}/>
    <Route path="/productDetails/:id" element={<ProductDetails/>}/>
    <Route path="/clothingcategory" element={<ClothingCategory/>}/>
    <Route path="/footwearcategories" element={<FootwearCategories/>}/>
 </Routes>
   
 </>
  )
}

export default App
