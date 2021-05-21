import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    width: "auto",
    margin: "1rem",
  },
  contentItem: {
    background: "#ccc",
    width: "auto",
    height: "3rem",
    padding: "1px",
    borderRadius: "4em",
    marginRight: "1.5rem",
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
  },
  contentImage: {
    margin: "0.5rem",
  },
  image: {
    width: "2rem",
    height: "2rem",
    marginLeft: "0.5rem",
    borderRadius: "50%",
  },
}));
