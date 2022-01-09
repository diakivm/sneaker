import React from 'react'
import './Button.scss' 

export default function Button(props) {

   if(props.linkBtn){
       return (
         <div className='button__container'>
            <a href="#" className="button__body">
               <div className="button__txt _icon-arrow">{props.textInBtn}</div>
            </a>         
         </div>
       )
   } else {
      return (
         <div className='button__container'> 
            <button type="submit" className="button__body">
            <div className="button__txt _icon-arrow">{props.textInBtn}</div>
            </button>       
         </div>
       )
   }
}
