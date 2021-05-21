import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

type SellersItem = {
  imgSource: string;
  name: string;
  hrefLink: string;
};

type Seller = {
  sellerItem: SellersItem;
};

export const SellerButton = ({ sellerItem }: Seller) => {
  const styled = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={styled.contentItem}
    >
      <a href={sellerItem.hrefLink}>
        <img
          className={styled.image}
          src={sellerItem.imgSource}
          alt={sellerItem.name}
        />
        <Typography variant="subtitle2" component="h2">
          {sellerItem.name}
        </Typography>
      </a>
    </Grid>
  );
};
