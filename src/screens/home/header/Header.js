import React from 'react'
import { Link } from 'react-router-dom'
import SideMenu from '../../../shared/SideMenu/SideMenu'
import './Header.scss'
import AppContext from '../../../AppContext'

export default function Header() {

   let[isSideMenuVisible, setIsSideMenuVisible] = React.useState(false)

   let {sumOfOrder, currency} = React.useContext(AppContext)


   function onTogleSideMenuVisible(){
      setIsSideMenuVisible(!isSideMenuVisible)
   }


   return (
      <header className='header'>
         <div className="header_container _container ">
            <div className="header__body">

               <Link to="/sneaker">
                  <div className="header__label lable-header">
                     <img src={process.env.PUBLIC_URL+"/img/logo.png"} alt="Logo" className="lable-header__logo _ibg" />
                     <div className="lable-header__text">
                        <h1 className="lable-header__name">SNEAKERS</h1>
                        <p className="lable-header__subname">Магазин лучших кроссовок</p>
                     </div>
                  </div>
               </Link>

               <ul className="header__nav nav-header">
                  <li className="nav-header__item">
                        <div className="nav-header__cart nav-header__item _icon-cart" onClick={onTogleSideMenuVisible}>
                          <span>{sumOfOrder} {currency}</span>
                        </div> 
                  </li>
                  <li className="nav-header__item">
                        <Link to="/favorites">
                           <div className="nav-header__like nav-header__item _icon-like"></div>
                        </Link>
                  </li>
                  <li className="nav-header__item">
                        <div className="nav-header__profile nav-header__item _icon-profile"></div>
                  </li>
               </ul>

                <SideMenu visibility={isSideMenuVisible} onCloseSideMenu={onTogleSideMenuVisible}/>

            </div>
         </div>
      </header>
   )
}
