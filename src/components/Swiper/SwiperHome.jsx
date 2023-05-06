import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "./SwiperHome.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

function SwiperHome() {
  return (
    <div className="containerSwiper">
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={"1"}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        coverflowEffect={{
          rotate: 30,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="container1">
            <div className="img_container1">
              <img src="./assets/img/logo/calendario.png" alt="" />
            </div>
            <div className="info_container1">
              <h3>titulo numero 1</h3>
              <p>colocar parrafo aqui</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container2">
            <div className="img_container2">
              <img src="./assets/img/logo/mascota.png" alt="" />
            </div>
            <div className="info_container2">
              <h3>Estado de la adopción</h3>
              <p>Revisa el proceso de tus adopciones en curso</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container3">
            <div className="img_container3">
              <img src="./assets/img/logo/mano_casa.png" alt="" />
            </div>
            <div className="info_container3">
              <h3>no se que va</h3>
              <p>aqui tampoco</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default SwiperHome;
