import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HeroSlider = ({ skillsData }) => {
  return (
    <div>
      <Swiper
        className="h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px]"
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {skillsData.map((skill) => (
          <SwiperSlide>
            <img
              src={skill.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
