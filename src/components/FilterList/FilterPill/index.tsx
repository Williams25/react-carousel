import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

type Filter = {
  imgSource: string;
  name: string;
  hrefLink: string;
};

type FilterItem = {
  filter: Filter;
};

export const FilterPill = ({ filter }: FilterItem) => {
  const styled = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={styled.content}
    >
      <a href={filter.hrefLink} className={styled.contentItem}>
        <img
          src={filter.imgSource}
          alt={filter.name}
          className={styled.image}
        />
        <Typography
          variant="subtitle2"
          component="span"
          className={styled.contentImage}
        >
          {filter.name}
        </Typography>
      </a>
    </Grid>
  );
};
