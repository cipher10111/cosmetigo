import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import searchStyles from "../assests/jss/searchResultStyles";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../components/Search/ProductCard";
import ProductData from "../assests/product.js";
import SideNav from "../components/Search/SideNav";
import SideNavToggle from "../components/Search/SideNavToggle";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => searchStyles(theme));

function products(ProductData) {
  return (
    <ProductCard
      img={ProductData.img}
      title={ProductData.title}
      quant={ProductData.quant}
      amount={ProductData.amount}
    />
  );
}

function SearchResult(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sort: ""
  });

  const handleChange = (event) => {
    setState({
      sort: event.target.value
    });
  };

  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          align={"center"}
          className={classes.gridClass}
        >
          <Grid item>
            <p>
              <strong>Searching for product 'product name'</strong>
            </p>
            <p style={{ color: "grey" }}>48 results found</p>
          </Grid>

          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="sort-by">Sort by</InputLabel>
              <Select
                native
                value={state.sort}
                onChange={handleChange}
                inputProps={{
                  name: "sort",
                  id: "sort-by"
                }}
              >
                <option aria-label="None" value="" />
                <option value={"relevence"}>Relevence</option>
                <option value={"date"}>Date</option>
                <option value={"lowToHigh"}>Price Low to High</option>
                <option value={"highToLow"}>Price High to Low</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
      <div style={{ margin: "80px 0" }} />
      <Container>
        <Grid container spacing={3}>
          <Box
            component={Grid}
            item
            align="center"
            item
            sm={12}
            md={12}
            lg={3}
            xs={12}
            display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
          >
            <SideNavToggle />
          </Box>
          <Box
            component={Grid}
            item
            align="left"
            item
            sm={3}
            md={3}
            lg={3}
            xs={3}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            <SideNav />
          </Box>

          <Grid item xl={9} lg={9} md={9} sm={12} xs={12} align={"center"}>
            <Grid container spacing={2}>
              {ProductData.map((product) => {
                return (
                  <Grid item xl={4} lg={4} md={6} sm={6} xs={12} align={"center"}>
                    <Link href="/product" underline="none">
                      <ProductCard
                        img={product.image_link}
                        title={product.display_name}
                        amount={product.price}
                        rating={product.rating}
                      />
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SearchResult;
