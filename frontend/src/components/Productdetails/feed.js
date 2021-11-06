import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Rating from '@material-ui/lab/Rating'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    height: '80vh',
    backgroundColor: '#EEEEEE',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '40%',
    maxWidth: '100%',
    [breakpoints.up('sm')]: {
      maxWidth: '45%',
    },
  },
  img: {
    height: '35vh',
    [breakpoints.up('sm')]: {
      height: '65vh',
    },
  },
  buttonStyles: {},
}))

export default function Product() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <div>
            <img
              className={classes.img}
              src={
                'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/10251873/2019/8/6/c1549bb0-2b4c-4c4a-9889-d3c0d0c6dbbf1565083224331-Maybelline-New-York-220-Natural-Beige-Fit-Me-Matte--Poreless-1.jpg'
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
              <Rating
                name="products rating"
                precision={0.5}
                value="3.5"
                readOnly
              />
            </p>
            <p>₹ 300.00</p>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ShoppingCartIcon />}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}
