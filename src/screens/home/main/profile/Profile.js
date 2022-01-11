import React from 'react'
import AppContext from '../../../../AppContext'
import Products from '../../../../shared/Products/Products'
export default function Profile() {

   let {productsInOrders} = React.useContext(AppContext)

   return (
      <div className='page_profile profile'>
          {
             productsInOrders.map(iteam => {
                return <Products products={iteam.products} title={`Заказ №${iteam.id}`} noAction={false} key={iteam.id}/>
             })
          }
      </div>
   )
}
