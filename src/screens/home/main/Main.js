import React from 'react'
import './Main.scss'
import HomePageSwiper from '../../../shared/Swipers/HomePageSwiper'
import Products from '../../../shared/Products/Products'
import AppContext from '../../../AppContext'
import {Routes, Route } from "react-router-dom";
import HomePage from './homePage/HomePage'
import Favorites from './favorites/Favorites'
import Profile from './profile/Profile'


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

   let {productsInFavorite} = React.useContext(AppContext)

   return (
      <main className="page">
          <div className="page__slider slider">
            <HomePageSwiper homePageSliders={homePageSlidersInfo}/>
          </div>

         <Routes>
             <Route path="/sneaker" element={<HomePage/>}/>
             <Route path="/favorites" element={<Favorites/>}/>
             <Route path="/profile" element={<Profile/>}/>
         </Routes>
         
      </main>
   )
}
