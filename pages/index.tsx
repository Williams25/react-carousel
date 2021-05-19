import { Carousel, SellersList } from "../src/components";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import data from "../data.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "relative",
    },
    container: {
      zIndex: 2,
      marginTop: theme.spacing(2),
    },
    rowsImage: {
      position: "absolute",
      zIndex: 0,
      background: "url(./rows.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionX: "0",
      backgroundPositionY: "8rem",
      width: "100%",
      height: "100%",
    }
  })
);

export default function Home() {
  const styled = useStyles();
  const { carouselItems, sellersItems } = data;
  return (
    <Container className={styled.root}>
      <div className={styled.rowsImage}></div>
      <Container className={styled.container}>
        <Carousel
          carouselItemsMobile={carouselItems}
          carouselItemsDesktop={carouselItems}
          slideDelay={3000}
        />
      </Container>

      <Container className={styled.container}>
        <SellersList title="Compre por loja" sellers={sellersItems} />
      </Container>
    </Container>
  );
}
