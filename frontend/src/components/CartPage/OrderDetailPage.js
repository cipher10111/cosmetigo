import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  gridClass: {
    background: 'white',
  },
}))

function OrderDetailPage() {
  const classes = useStyles()

  return (
    <Container>
      <Grid item align={'left'}>
        <Grid container spacing={2}>
          <Grid
            item
            className={classes.gridClass}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={12}
          >
            <p>Shipping Address:</p>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Company"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Zip Code"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Address 1"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Address 2"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
            <p>Total: 459 </p>
            <Button variant="contained" color="secondary">
              Checkout
            </Button>
          </Grid>
          <Grid
            item
            className={classes.gridClass}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={12}
          >
            <p>Billing Address:</p>
            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} /> Same
            as Shipping Address
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Company"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Zip Code"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Address 1"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Address 2"
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid
            item
            className={classes.gridClass}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={12}
          >
            <Button variant="outlined" color="primary">
              Back to Cart
            </Button>
            <Button variant="contained" color="secondary">
              Proceed to Checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default OrderDetailPage
