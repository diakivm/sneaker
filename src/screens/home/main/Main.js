import React from 'react'
import './Main.scss'
import HomePageSwiper from '../../../shared/Swipers/HomePageSwiper'
import ProductsLiveSearch from '../../../shared/Products/ProductsLiveSearch'
import Products from '../../../shared/Products/Products'
import AppContext from '../../../AppContext'
import {Routes, Route } from "react-router-dom";


let homePageSlidersInfo = [
   {
      imgSrc: "/img/Slider/1.jpg"
   },
   {
      imgSrc: "/img/Slider/2.jpg"
   },
   {
      imgSrc: "/img/Slider/3.jpg"
   },
]

export default function Main() {

   let {products, productsInFavorite, isProductsLoaded} = React.useContext(AppContext)

   return (
      <main className="page">
          <div className="page__slider slider">
            <HomePageSwiper homePageSliders={homePageSlidersInfo}/>
          </div>

          <Routes>
             <Route path="/sneaker" element={<ProductsLiveSearch products={products} title={"Все продукти"} isProductsLoaded={isProductsLoaded}/>}/>
             <Route path="/favorites" element={<Products products={productsInFavorite} title={"Избранное"}/>}/>
         </Routes>
         
      </main>
   )
}
