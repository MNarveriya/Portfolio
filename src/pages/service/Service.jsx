
import service from "../service/Service.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Card from "./Card";
import { Listdata } from "./servicelist";

const Service = () => {
  return (
    <>
      <div className={service.container}>
        <div className={service.smallcontainer}>
          <div className={service.heading}>
            <h2>Service</h2>
          </div>
          <div className={service.carduser}>
            <Swiper
              modules={[Pagination, Navigation]}
              navigation={true}
              loopFillGroupWithBlank={true}
              slidesPerView={4}
              spaceBetween={10}
              slidesPerGroup={1}
              className={service.swiper}
              breakpoints={{
                866: {
                  slidesPerView: 2,
                },
                601: {
                  slidesPerView: 1
                },
                501: {
                  slidesPerView: 1
                },
                0: {
                  slidesPerView: 1
                }

              }}
            >
              {Listdata.map((e, index) => {
                return (
                  <SwiperSlide className={service.cardslide}>
                    <div className={service.card} key={index}>
                      <div className={service.imgGroup}>
                        <img src={e.img} alt="image" />
                      </div>
                      <h4 className={service.title}>{e.title}</h4>
                      <p className={service.carddetails}>{e.carddetails}</p>
                      <div className={service.btngroup}>{e.button}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
