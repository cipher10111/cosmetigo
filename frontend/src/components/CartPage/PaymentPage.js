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

function PaymentPage() {
  const classes = useStyles()

  return (
    <Container>
      <Grid item>
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
            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />{' '}
            Credit/Debit Card
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Card Number"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Exp Date"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Name on Card"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="CVV" variant="outlined" />
              <Button color="secondary">Submit</Button>
            </form>
            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} /> UPI
            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} /> Cash
            On Delivery
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
            <Button variant="outlined" color="primary">
              Back to Checkout Details
            </Button>
            <Button variant="contained" color="secondary">
              Review
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PaymentPage
