import React from 'react'
import Button from '../Button/Button'
import GoodsSide from '../Goods/GoodsSide'
import AppContext from '../../AppContext'
import './SideMenu.scss'

export default function SideMenu(props) {

   let {productsInCart} = React.useContext(AppContext)

   return (
      <div className={props.visibility? "sidemenu__overlay sidemenu__overlay-visible" : "sidemenu__overlay"}>
         <div className="sidemenu__container">
            <div className="sidemenu__headcontainer">
               <h4 className="sidemenu__name" >Корзина</h4>
               <div className="goodside__remove _icon-plus" onClick={props.onCloseSideMenu}></div>
            </div>
            <div className="sidemenu__iteams-conteainer">
               {
                  productsInCart.map((iteam) =>{
                     return <GoodsSide iteam={iteam} key={iteam.id}/>
                  })
               }
            </div>
            <div className="sidemenu__finalprice-container">
               <div className="sidemenu__finalprice">
                  <div className="sidemenu__txt">Итого: </div>
                  <div className="sidemenu__dashedelement"></div>
                  <span className="sidemenu__sum">21 498 руб.</span>
               </div>
               <div className="sidemenu__tax">
                  <div className="sidemenu__txt">Налог 5%: </div>
                  <div className="sidemenu__dashedelement"></div>
                  <span className="sidemenu__sumtax">1074 руб.</span>
               </div>
            </div>
            <Button linkBtn={false} textInBtn={"Оформить заказ"}/>
         </div> 
     </div>
   )
}
