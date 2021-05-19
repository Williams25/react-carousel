import { Box, makeStyles, Theme, Typography, Grid } from "@material-ui/core";

type SellersItem = {
  url: string;
  name: string;
  link: string;
};

type SellersListProps = {
  title?: string;
  sellers?: Array<SellersItem>;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "1rem",
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "65%",
    height: "auto",
  },
  imageItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    flexWrap: "nowrap",
    margin: "1.5rem 1rem 0 1rem",
  },
  image: {
    width: "6rem",
    height: "6rem",
  },
}));

export const SellersList = ({ title, sellers }: SellersListProps) => {
  const styled = useStyles();
  return (
    <>
      <Box className={styled.container}>
        <Typography variant="h5" component="span">
          {title}
        </Typography>

        <div className={styled.content}>
          {sellers.map((item) => {
            return (
              <Grid
                container
                item
                xs
                className={styled.imageItem}
                key={item.name}
              >
                <img className={styled.image} src={item.url} alt={item.name} />
                <Typography variant="subtitle2" component="span">
                  {item.name}
                </Typography>
              </Grid>
            );
          })}
        </div>
      </Box>
    </>
  );
};
