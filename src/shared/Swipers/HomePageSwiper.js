// import Swiper core and required modules
import { Pagination, A11y, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './HomePageSwiper.scss'

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default ({homePageSliders}) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {
         homePageSliders.map((iteam, index) =>{
            return( 
            <SwiperSlide key={index}>
               <div className="swiper__iteam _ibg">
                  <img src={process.env.PUBLIC_URL + iteam.imgSrc} alt="SliderImage" className='swiper__img'/>
               </div>
            </SwiperSlide>)
         })
      }
    </Swiper>
  );
};