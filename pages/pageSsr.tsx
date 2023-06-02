import { Flex, Heading, Text } from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const getServerSideProps = () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
  };
};

const SSR = ({
  date,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Flex direction={"column"}>
      <Heading>SSR</Heading>
      <Text>{`Last generated at : ${date}`}</Text>

      <Flex>
        <Swiper style={{ width: "650px" }} spaceBetween={50} slidesPerView={3}>
          <SwiperSlide style={{ backgroundColor: "red", width: "100%" }}>
            Slide 1
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "blue", width: "100%" }}>
            Slide 2
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "green", width: "100%" }}>
            Slide 3
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "cyan", width: "100%" }}>
            Slide 4
          </SwiperSlide>
          ...
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default SSR;
