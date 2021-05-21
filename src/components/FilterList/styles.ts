import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "80%",
    },
  },
}));
