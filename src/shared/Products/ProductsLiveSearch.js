import React from 'react'
import './ProductsLiveSearch.scss'
import Goods from '../Goods/Goods'

export default function ProductsHomeScreen({products, title}) {


   const [searchProducts, setSearchProducts] = React.useState('')

   //#region  For live serach products
   function onChangeSerachInput(event) {
      setSearchProducts(event.target.value)
   }
   function getFilterProducts(){
      return products.filter((iteam) => iteam.label.toLowerCase().includes(searchProducts.toLowerCase()))
   }
   //#endregion

   return (
           <div className="products">
             <div className="products__namesection namesection conteinerlivesearch">
                <h3 className="namesection__name">{title}</h3>
                <div className="searchfield__container _icon-search">
                  <input type="text" className='searchfield__input' placeholder="Поиск..." onChange={onChangeSerachInput}/>
                </div>
             </div>
             <div className="products__container ">
                <div className="products__wrapper">
                   {
                      getFilterProducts().map((iteam) => {
                        return <Goods iteam={iteam} key={iteam.id} />
                       })
                   }
                </div>
             </div>
           </div>
   )
}
