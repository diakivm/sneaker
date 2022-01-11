import React from 'react'
import Button from '../Button/Button'
import GoodsSide from '../Goods/GoodsSide'
import AppContext from '../../AppContext'
import './SideMenu.scss'

export default function SideMenu(props) {

   let {productsInCart, sumOfOrder, setSumOfOrder, currency, doOrder} = React.useContext(AppContext)

   React.useEffect(() => {
      setSumOfOrder(productsInCart.reduce((sum, iteam) => {
         return sum + +(iteam.price).trim().split(' ').join('')
      }, 0))
   }, [productsInCart])


   return (
      <div className={props.visibility? "sidemenu__overlay sidemenu__overlay-visible" : "sidemenu__overlay"}>
         <div className="sidemenu__container">
            <div className="sidemenu__headcontainer">
               <h4 className="sidemenu__name" >Корзина</h4>
               <div className="goodside__remove _icon-plus" onClick={props.onCloseSideMenu}></div>
            </div>
{
productsInCart.length > 0 ? <>
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
                                    <span className="sidemenu__sum">{sumOfOrder} {currency}</span>
                                 </div>
                                 <div className="sidemenu__tax">
                                    <div className="sidemenu__txt">Налог 5%: </div>
                                    <div className="sidemenu__dashedelement"></div>
                                    <span className="sidemenu__sumtax">{sumOfOrder + (sumOfOrder * 0.05)} {currency}</span>
                                 </div>
                              </div>
                              <Button linkBtn={false} textInBtn={"Оформить заказ"} action={doOrder} />
                            </> :
                            <div className='sidemenu__iteams-conteainer sidemenu__center'>
                                <img src={process.env.PUBLIC_URL+"/img/empty_cart.jpg"} style={{width:"120px"}} alt="empty_cart _ibg"/>
                                <p className="sidemenu__emptycart-boldtext">Корзина пустая</p>
                                <p className="sidemenu__emptycart-text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                                <Button linkBtn={true} textInBtn={"Вернуться назад"} action={props.onCloseSideMenu} />
                            </div>
}
         </div> 
     </div>
   )
}
