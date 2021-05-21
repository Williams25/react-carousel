import { Carousel, SellersList, FilterList } from "../src/components";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import data from "../data.json";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: "url(./rows.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPositionX: "0",
      backgroundPositionY: "11rem",
    },
    container: {
      zIndex: 2,
      marginTop: theme.spacing(2),
    },
    rowsImage: {
      position: "absolute",
      zIndex: 0,
    }
  })
);

export default function Home() {
  const styled = useStyles();
  const { carouselItems, sellersItems, filters } = data;
  return (
    <Container className={styled.root}>
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

      <Container className={styled.container}>
        <FilterList title="Ou por filtros" filters={filters} />
      </Container>
    </Container>
  );
}
