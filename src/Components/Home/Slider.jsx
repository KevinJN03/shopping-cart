import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
 import "swiper/css";
import "swiper/css/navigation";

import { useContext } from "react";
import { CartContext } from "../../App";
import SliderProduct from "./SliderProduct";
import { styled } from "styled-components";
const Slider = () => {
  const { allProduct } = useContext(CartContext);

  return (
    <Swiper
      style={{ width: "65%", display: "flex", justifyContent: "center", alignItems: "center"}}
      // install Swiper modules

      modules={[Navigation]}
      spaceBetween={-10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
     
         {allProduct.map((item) => {
        return(
        <SwiperSlide>
          <SliderProduct image1={item.image1} name={item.name} price={item.price} id={item.id}/>
        </SwiperSlide>)

      })}   

      
      
    </Swiper>
  );
};

export default Slider;
