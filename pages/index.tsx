import { Carousel } from "../src/components";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type CarouselItem = {
  sourceImage: string;
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
      sourceImage: "./images/2.jpg",
      description: "sucos e doces villa piva",
      link: "",
    },
    {
      sourceImage: "./images/freshmania.png",
      description: "caminhão de frete fresh mania",
      link: "",
    },
    {
      sourceImage: "./images/leite.png",
      description: "leite letti A2",
      link: "",
    },
  ];

  return (
    <>
      <Container className={styled.container}>
        <Carousel carouselItems={array} />
      </Container>
    </>
  );
}
