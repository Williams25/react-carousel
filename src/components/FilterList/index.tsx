import { Typography, Grid } from "@material-ui/core";
import { FilterPill } from "../index";
import { useStyles } from "./styles";

type FilterItem = {
  imgSource: string;
  name: string;
  hrefLink: string;
};

type Filters = {
  filters: Array<FilterItem>;
  title: string;
};

export const FilterList = ({ filters, title }: Filters) => {
  const styled = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography variant="h2" component="h2">
        {title}
      </Typography>

      <Grid container justify="center" className={styled.content}>
        {filters.map((item, index) => {
          return <FilterPill key={index} filter={item} />;
        })}
      </Grid>
    </Grid>
  );
};
