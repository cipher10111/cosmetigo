import React from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  makeStyles,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { ShoppingCart, Inbox, LocalOffer } from "@material-ui/icons";
import { useGmailTabsStyles, useGmailTabItemStyles } from "@mui-treasury/styles/tabs";

import { productDetailsStyles } from "../assests/jss";
import Description from "../components/ProductDetails/Description";
import AllReviews from "../components/ProductDetails/Review";
import Product from "../components/Home/Products";

const useStyles = makeStyles((theme) => productDetailsStyles(theme));

const indicatorColors = ["#d93025", "#188038"];
const products = [];

const ProductDetails = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = useGmailTabsStyles({ indicatorColors });
  const tabItem1Styles = useGmailTabItemStyles({ color: indicatorColors[0] });
  const tabItem2Styles = useGmailTabItemStyles({ color: indicatorColors[1] });

  return (
    <div className={classes.page}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <div className={classes.feed}>
            <div>
              <img
                className={classes.img}
                src={
                  "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10251873/2019/8/6/c1549bb0-2b4c-4c4a-9889-d3c0d0c6dbbf1565083224331-Maybelline-New-York-220-Natural-Beige-Fit-Me-Matte--Poreless-1.jpg"
                }
                alt="product"
              />
            </div>
            <div className={classes.description}>
              <Typography variant="h5" component="p">
                Nykaa Foundation Cream
              </Typography>
              <p>Brand : Nykaa </p>
              <p>
                <Rating name="products rating" precision={0.5} value="3.5" readOnly />
              </p>
              <p>₹ 300.00</p>
              <Button variant="contained" color="secondary" startIcon={<ShoppingCart />}>
                ADD TO CART
              </Button>
            </div>
          </div>
        </Container>
      </React.Fragment>
      <div>
        <Tabs
          classes={tabsStyles}
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
          TabIndicatorProps={{
            children: <div className={`MuiIndicator-${tabIndex}`} />
          }}
        >
          <Tab classes={tabItem1Styles} disableTouchRipple label={"Description"} icon={<Inbox />} />
          <Tab
            classes={tabItem2Styles}
            disableTouchRipple
            label={"Reviews"}
            icon={<LocalOffer />}
          />
        </Tabs>
        {tabIndex === 0 && <Description />}
        {tabIndex === 1 && <AllReviews />}
      </div>
      <div>
        <Typography variant="h5" component="p">
          Related products
        </Typography>
        <Box className={classes.product}>
          {products.map((product, i) => (
            <Product
              key={i}
              img={product.img}
              title={product.title}
              quant={product.quant}
              amount={product.amount}
            />
          ))}
        </Box>
      </div>
    </div>
  );
};

export default ProductDetails;
