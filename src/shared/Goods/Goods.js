import React from 'react'
import './Goods.scss'
import AppContext from '../../AppContext'


export default function Goods({iteam}) {

   let classesForLikeIconT = ["iteam__like", "_icon-like", "iteam__like-pressed"]
   let classesForLikeIconF = ["iteam__like", "_icon-like"]
   let classesForAddIconT = ["iteam__add", "_icon-check", "iteam__add-pressed"]
   let classesForAddIconF = ["iteam__add", "_icon-plus"]

   let {productsInCart, removeIteamInCart, addIteamToCart,
        productsInFavorite,removeIteamFromFavorites, addIteamToFavorites,
        currency, products,                                                      } = React.useContext(AppContext)

   let [isProductInFavorites, setIsProductInFavorites] = React.useState(false)
   let [isProductInCart, setIsProductInCart] = React.useState(false)


   React.useEffect(() => {
       productsInCart.some(product => product.parentId === iteam.id) ? setIsProductInCart(true)
                                                               : setIsProductInCart(false)
   },[productsInCart])

   React.useEffect(() => {
      if(iteam.parentId === undefined)
          productsInFavorite.some(product => product.parentId === iteam.id) ? setIsProductInFavorites(true) 
                                                               : setIsProductInFavorites(false)  
      if(iteam.parentId !== undefined)                                                         
      products.some(product => product.id === iteam.parentId) ? setIsProductInFavorites(true) 
                                                           : setIsProductInFavorites(false)
  },[productsInFavorite])


   function onTogleIconLikePress(){
      if(isProductInFavorites){
         removeIteamFromFavorites(iteam.id)
      } else {
         addIteamToFavorites({...iteam, parentId:iteam.id})
      }
   }

   function onTogleAddIteamInCart(){
      if(isProductInCart){
         removeIteamInCart(iteam.id)
      } else {
         addIteamToCart({...iteam, parentId:iteam.id})
      }
   }

   return (
      <div className="iteam__conteiner">
         <div className={ isProductInFavorites ? classesForLikeIconT.join(' ') : classesForLikeIconF.join(' ')} onClick={onTogleIconLikePress}></div>
            <img src={process.env.PUBLIC_URL+iteam.srcOfImage} alt="Goods" className='iteam__img _ibg' />
            <h5 className="iteam__label">{iteam.label}</h5>
            <div className="iteam__pricebox">
               <p className="iteam__pricelabel">Цена:</p>
               <p className="iteam__price">{iteam.price} {currency}</p>
            </div>
             <div className={ isProductInCart ? classesForAddIconT.join(' ') : classesForAddIconF.join(' ')} onClick={onTogleAddIteamInCart}></div>
      </div>
   )
}