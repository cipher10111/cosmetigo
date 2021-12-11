const productDetailsStyles = (theme) => ({
  root: {
    padding: "1rem .5rem 0 .5rem ",
    fontFamily: "Helvetica",
    [theme.breakpoints.up("md")]: {
      padding: "1rem 8rem 0 8rem "
    }
  },
  feed: {
    height: "80vh",
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "40%",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "45%"
    }
  },
  img: {
    height: "35vh",
    [theme.breakpoints.up("sm")]: {
      height: "65vh"
    }
  },
  product: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "1rem",
    margin: "auto"
  }
});
export default productDetailsStyles;
