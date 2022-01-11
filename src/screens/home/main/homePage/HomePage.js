import React from 'react'
import './HomePage.scss'
import ProductsLiveSearch from '../../../../shared/Products/ProductsLiveSearch'
import AppContext from '../../../../AppContext'

export default function HomePage() {

   let {products, isProductsLoaded} = React.useContext(AppContext)

   return (
      <div className='page__home home'>
         <ProductsLiveSearch products={products} title={"Все продукти"} isProductsLoaded={isProductsLoaded}/>
      </div>
   )
}
