import { Box, makeStyles, Theme, Typography, Grid } from "@material-ui/core";
import { SellerButton } from "./SellerButton";
import { useStyles } from "./styles";

type SellersItem = {
  imgSource: string;
  name: string;
  hrefLink: string;
};

type SellersListProps = {
  title?: string;
  sellers?: Array<SellersItem>;
};

export const SellersList = ({ title, sellers }: SellersListProps) => {
  const styled = useStyles();
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h2" component="span" style={{ zIndex: 2 }}>
          {title}
        </Typography>

        <Grid
          container
          justify="center"
          alignItems="center"
          className={styled.content}
        >
          {sellers.map((item, index) => {
            return <SellerButton sellerItem={item} key={index} />;
          })}
        </Grid>
      </Grid>
    </>
  );
};
