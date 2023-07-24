import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper";

const Gallery = () => {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Nmy8mqF/nick-xc-Rt6-KM5s04-unsplash.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/yd9PDFP/mohit-suthar-0u-ZMa-Y-Ho4-unsplash.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/xDtk47L/gimmel-magaway-h-CIPLW9-Cl-Og-unsplash-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/N9ZqJvB/mink-mingle-Riz1q-Apl-MQk-unsplash.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/94/87/red-toy-car-with-blue-wheels-vector-18269487.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/71oyUfY8jCL.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/121666842/photo/blue-toy-car-trabant-isolated-on-white.jpg?s=612x612&w=0&k=20&c=r5fKnzG5smd4gSpJ0M4z5qrJdeD5Qof55XYVnJp1oBo="
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;
