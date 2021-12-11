import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    width: "250px",
    margin: "1rem"
  },
  media: {
    height: 200
  },
  grow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

const Product = ({ img, title, quant, amount }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom component="h3">
            {title}
          </Typography>
          <Typography gutterBottom component="p">
            {quant}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.grow}>
        <Typography gutterBottom component="p">
          ₹ {amount}
        </Typography>
        <Button size="small" color="secondary">
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quant: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default Product;
