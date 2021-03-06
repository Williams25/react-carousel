import { useState } from "react";
import {
  Box,
  useMediaQuery,
  makeStyles,
  Theme,
  IconButton,
} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselProps = {
  carouselItemsDesktop: Array<CarouselItem>;
  carouselItemsMobile: Array<CarouselItem>;
  slideDelay?: number;
};

type CarouselItem = {
  imgSource: string;
  description: string;
  hrefLink: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(20),
    },
    [theme.breakpoints.up("md")]: {
      height: theme.spacing(30),
    },
    [theme.breakpoints.up("lg")]: {
      height: theme.spacing(40),
    },
    [theme.breakpoints.up("xl")]: {
      height: theme.spacing(40),
    },
    objectFit: "cover",
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    position: "relative",
  },
  carousel: {
    width: "80%",
  },
  next: {
    position: "absolute",
    marginRight: "2rem",
    zIndex: 5,
  },
  previous: {
    position: "absolute",
    marginLeft: "2rem",
    zIndex: 5,
  },
}));

export const CarouselTextImage = ({
  carouselItemsDesktop,
  carouselItemsMobile,
  slideDelay,
}: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const matches = useMediaQuery("(min-width:600px)");
  const mediaQueryButton = useMediaQuery("(max-width: 1128px)");
  const styled = useStyles();

  const next = () => setCurrentSlide(currentSlide + 1);
  const previous = () => setCurrentSlide(currentSlide - 1);
  const updateCurrentSlide = (index: number) => {
    currentSlide !== index && setCurrentSlide(index);
  };

  return (
    <Box flexGrow={1} className={styled.root}>
      <Box className={styled.content}>
        {matches && (
          <>
            <IconButton
              className={styled.previous}
              onClick={previous}
              style={{ left: mediaQueryButton ? "-2rem" : "1rem" }}
            >
              <img
                src="./icons/anterior.svg"
                alt="anterior"
                width="32"
                height="32"
              />
            </IconButton>
            <IconButton
              className={styled.next}
              onClick={next}
              style={{ right: mediaQueryButton ? "-2rem" : "1rem" }}
            >
              <img
                src="./icons/proximo.svg"
                alt="proximo"
                width="32"
                height="32"
              />
            </IconButton>
          </>
        )}
        <Carousel
          className={styled.carousel}
          axis="horizontal"
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={!matches}
          useKeyboardArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          selectedItem={currentSlide}
          onChange={updateCurrentSlide}
          interval={slideDelay | 3000}
        >
          {matches
            ? carouselItemsDesktop.map((item) => {
                return (
                  <div key={item.imgSource} className={styled.content}>
                    <img
                      src={item.imgSource}
                      alt={item.description}
                      className={styled.root}
                    />
                  </div>
                );
              })
            : carouselItemsMobile.map((item) => {
                return (
                  <div key={item.imgSource} className={styled.content}>
                    <img
                      src={item.imgSource}
                      alt={item.description}
                      className={styled.root}
                    />
                  </div>
                );
              })}
        </Carousel>
      </Box>
    </Box>
  );
};
