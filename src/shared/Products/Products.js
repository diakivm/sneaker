import React from 'react'
import './ProductsLiveSearch.scss'
import Goods from '../Goods/Goods'
import GoodsOrder from '../Goods/GoodsOrder'

export default function Products({products, title, noAction=true}) {


   return (
           <div className="products">
             <div className="products__namesection namesection">
                <h3 className="namesection__name">{title}</h3>
             </div>
             <div className="products__container ">
                <div className="products__wrapper">
                   {
                     noAction ?
                      products.map((iteam) => {
                        return <Goods iteam={iteam} key={iteam.id} />
                       })
                          :
                       products.map((iteam) => {
                        return <GoodsOrder iteam={iteam} key={iteam.id} />
                       })
                   }
                </div>
             </div>
           </div>
   )
}
