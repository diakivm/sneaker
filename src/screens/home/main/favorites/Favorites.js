import React from 'react'
import './Favorites.scss'
import AppContext from '../../../../AppContext'
import Products from '../../../../shared/Products/Products'

export default function Favorites() {

   let {productsInFavorite} = React.useContext(AppContext)

   return (
      <div className='page_favorites favorites'>
         <Products products={productsInFavorite} title={"Избранное"}/>
      </div>
   )
}
