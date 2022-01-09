import React from 'react'
import './GoodsSide.scss'
import AppContext from '../../AppContext'

export default function GoodsSide({iteam}) {
   let valut = "руб."

   let {removeIteamInCartFromCartScreen} = React.useContext(AppContext)
   
   return (
      <div className='goodside__container'>
            <img src={process.env.PUBLIC_URL+iteam.srcOfImage} alt="Goods image" className="goodside__img _ibg" />
         <div className="goodside__info">
               <h5 className="goodside__label">{iteam.label}</h5>
               <p className="goodside__price">{iteam.price} {valut}</p>
         </div>
         <div className="goodside__remove _icon-plus" onClick={() => removeIteamInCartFromCartScreen(iteam.id)}></div>
      </div>
   )
}
