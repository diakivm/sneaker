import React from 'react'
import './Goods.scss'
import AppContext from '../../AppContext'


export default function GoodsOrder({iteam}) {

   let {currency} = React.useContext(AppContext)

   return (
      <div className="iteam__conteiner">
            <img src={process.env.PUBLIC_URL+iteam.srcOfImage} alt="Goods" className='iteam__img _ibg' />
            <h5 className="iteam__label">{iteam.label}</h5>
            <div className="iteam__pricebox">
               <p className="iteam__pricelabel">Цена:</p>
               <p className="iteam__price">{iteam.price} {currency}</p>
            </div>
      </div>
   )
}