import { Carousel } from "../src/components";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type CarouselItem = {
  source: string;
  description: string;
  link: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function Home() {
  const styled = useStyles();

  const array: CarouselItem[] = [
    {
      source: "./images/2.jpg",
      description: "sucos e doces villa piva",
      link: "",
    },
    {
      source: "./images/freshmania.png",
      description: "caminhão de frete fresh mania",
      link: "",
    },
    {
      source: "./images/leite.png",
      description: "leite letti A2",
      link: "",
    },
  ];

  return (
    <>
      <Container className={styled.container}>
        <Carousel carouselItemsDesktop={array} />
      </Container>
    </>
  );
}
