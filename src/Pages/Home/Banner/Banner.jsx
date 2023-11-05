
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import logo from '../../../assets/logo.png'
import './banner.css'

const Banner = () => {
    return (
       <div className='w-[70%] relative mx-auto my-5'>
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
        <SwiperSlide><img src={logo}/></SwiperSlide>
        <SwiperSlide><img src={logo}/></SwiperSlide>
        <SwiperSlide><img src={logo}/></SwiperSlide>
        <SwiperSlide><img src={logo}/></SwiperSlide>
        
      </Swiper>
            
      <div className=' top-0 w-full h-full z-10 flex  items-center '>
        Hello
      
      </div>
       </div>
    );
};

export default Banner;