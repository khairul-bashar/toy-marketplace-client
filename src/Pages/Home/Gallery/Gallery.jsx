import React from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Gallery = () => {
  return (
    <div className='py-10'>
      <h3 className='text-3xl font-semibold text-warning text-center'>Toy Cars Gallery</h3>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/Nrzv8D5/gustavo-S-W9v-DL5wh-U-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Fh5hfRR/sreekumar-p-RRNks-Rm-U5-ZM-unsplash.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1283681886/photo/little-boy-riding-toy-car-in-the-garden.jpg?s=612x612&w=0&k=20&c=3B-qiRGCB1cUbUuAYZuSiVYf74hGrE3IOL2G3PWYCw4=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn3.vectorstock.com/i/1000x1000/94/87/red-toy-car-with-blue-wheels-vector-18269487.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/61PJT4wn-xS._AC_UF1000,1000_QL80_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/121666842/photo/blue-toy-car-trabant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=r5fKnzG5smd4gSpJ0M4z5qrJdeD5Qof55XYVnJp1oBo=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/N9ZqJvB/mink-mingle-Riz1q-Apl-MQk-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;