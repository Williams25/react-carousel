import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  contentItem: {
    width: "auto",
    height: "auto",
    borderRadius: "4em",
    margin: "1.3rem",
    marginTop: "1.5rem",
    textAlign: "center",
  },
  image: {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    zIndex: 2,
  },
}));
