import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import Image1 from "../../public/HomeImgs/pexels-pixabay-139398.jpg";
import Image2 from "../../public/HomeImgs/pexels-pixabay-263402.jpg";
import Image3 from "../../public/HomeImgs/pexels-pixabay-356040.jpg";
import Image4 from "../../public/HomeImgs/pexels-pixabay-40568.jpg";

const HomeImages = () => {
  return (
    <Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
    </Box>
  );
};

export default HomeImages;
