import React from 'react'
import './ProductsLiveSearch.scss'
import Goods from '../Goods/Goods'
import GoodLoader from '../GoodLoader/GoodLoader'

export default function ProductsHomeScreen({products, title, isProductsLoaded}) {

   const [searchProducts, setSearchProducts] = React.useState('')


   //#region  For live serach products
   function onChangeSerachInput(event) {
      setSearchProducts(event.target.value)
   }
   function setProductsInContainer(){
      return products.filter((iteam) => iteam.label.toLowerCase().includes(searchProducts.toLowerCase()))
                     .map((iteam) => {
                        return <Goods iteam={iteam} key={iteam.id} />})
   }
   function setFakePRoductsInContainer(){
      const LoaderGoodsArr = [...Array(8)]
      
      return LoaderGoodsArr.map( (iteam, index) => {
         return <GoodLoader key={index}/>
      })
   }
   //#endregion

   return (
           <div className="products">
               {
                  
               }
             <div className="products__namesection namesection conteinerlivesearch">
                <h3 className="namesection__name">{title}</h3>
                <div className="searchfield__container _icon-search">
                  <input type="text" className='searchfield__input' placeholder="Поиск..." onChange={onChangeSerachInput}/>
                </div>
             </div>
             <div className="products__container ">
                <div className="products__wrapper">
                   {
                      isProductsLoaded ? setProductsInContainer() : setFakePRoductsInContainer()
                   }
                </div>
             </div>
           </div>
   )
}
