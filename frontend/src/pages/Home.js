/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import {
  Box,
  Grid,
  Button,
  Card,
  Container,
  Typography,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/Home/ProductCard'
import Product from '../components/Home/Products'
import items from './items'
import brandTypes from './brandTypes'
import itemTypes from './itemTypes'
import homeStyles from '../assests/jss/homeStyles'
import { fetchNewProduct } from '../redux/actions/productActions'

const useStyles = makeStyles((theme) => homeStyles(theme))

const Home = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { newProducts, error, isLoading } = useSelector(
    (state) => state.products
  )

  console.log(newProducts)

  useEffect(() => {
    dispatch(fetchNewProduct(8))
  }, [])

  if (error) return <p>error...</p>
  if (isLoading) return <p>Loading...</p>

  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Card>
          <Container className={classes.cardContainer}>
            <Grid className={classes.cardContent}>
              <h1 className={classes.margin}>20% off for your First shoping</h1>
              <p className={classes.margin}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <div className={classes.margin}>
                <Button variant="contained" color="secondary" size="large">
                  Shop Now
                </Button>
              </div>
            </Grid>
            <Grid className={classes.margin}>
              <img src="https://picsum.photos/200" alt="" />
            </Grid>
          </Container>
        </Card>
      </Box>
      <div>
        <Grid className={classes.itemTypesContainer}>
          {itemTypes.map((item, index) => (
            <Link key={index} href="/search" underline="none">
              <ProductCard
                subtitle={item.subtitle}
                img={item.img}
                title={item.title}
              />
            </Link>
          ))}
        </Grid>
      </div>
      <div>
        <div className={classes.newProductHeader}>
          <Typography variant="h5">New Products</Typography>
          <Button>view all</Button>
        </div>
        <div>
          <Box className={classes.newProductContainer}>
            {newProducts.map((item, index) => (
              <Link key={index} href="/product" underline="none">
                <Product
                  img={item.link}
                  title={item.display_name}
                  price={item.price}
                />
              </Link>
            ))}
          </Box>
        </div>
      </div>
      <div>
        <Typography variant="h5">Shop by Brands</Typography>
        <div>
          <Box className={classes.brandContainer}>
            {brandTypes.map((item, key) => (
              <Link key={key} href="/search" underline="none">
                <Box className={classes.brandCard}>
                  <img className={classes.media} src={item.img} alt="brand" />
                </Box>
              </Link>
            ))}
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Home
