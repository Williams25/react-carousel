import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, useMediaQuery } from "@material-ui/core";

type CarouselProps = {
  carouselItems: Array<CarouselItem>;
  carouselItemsMobile?: Array<CarouselItem>;
};

type CarouselItem = {
  sourceImage: string;
  description: string;
  link: string;
};

export const CarouselTextImage = ({ carouselItems }: CarouselProps) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box flexGrow={1}>
      <Carousel
        axis="horizontal"
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        useKeyboardArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
      >
        {carouselItems.map((item) => {
          return (
            <div key={item.sourceImage}>
              <img
                src={item.sourceImage}
                alt={item.description}
                width="100%"
                height={!matches ? "250px" : "350px"}
              />
            </div>
          );
        })}
      </Carousel>
    </Box>
  );
};
