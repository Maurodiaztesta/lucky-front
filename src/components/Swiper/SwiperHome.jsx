import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "./SwiperHome.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

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
            <Link  className="Donar" to="/donation">
          <div className="container1">
            <div className="img_container">
              <img src="./assets/img/logo/manos_corazon.png" alt="" />
            </div>
            <div className="info_container">
              <h3>Donar</h3>
              <p>Donaciones para a los animales</p>
            </div>
          </div>
              </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link  className="Status" to="/status">
          <div className="container1">
            <div className="img_container">
              <img src="./assets/img/logo/mascota.png" alt="" />
            </div>
            <div className="info_container">
              <h3>Estado de la adopción</h3>
              <p>Revisa el proceso de tus adopciones en curso</p>
            </div>
          </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link className="Apadrinar" to="/Apadrinar">
          <div className="container1">
            <div className="img_container">
              <img src="./assets/img/logo/mano_casa.png" alt="" />
            </div>
            <div className="info_container">
              <h3>Apadrinar</h3>
              <p>Apadrina un animal</p>
            </div>
          </div>
          </Link>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}

export default SwiperHome;
