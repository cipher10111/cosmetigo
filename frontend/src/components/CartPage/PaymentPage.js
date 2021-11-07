import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import MyOrderSideNavToggle from './MyOrderSideNavToggle'
import OrderSummary from './OrderSummary'

const useStyles = makeStyles((theme) => ({
  gridClass: {
    background: 'white',
  },
  boxClass: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
}))

function PaymentPage() {
  const classes = useStyles()

  return (
    <Container>
      <Grid item>
        <Grid container spacing={2}>
          <Box
            component={Grid}
            item
            align="right"
            item
            sm={12}
            md={12}
            lg={3}
            xs={12}
            display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}
          >
            <MyOrderSideNavToggle />
          </Box>
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
              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Card Number"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Exp Date"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Name on Card"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField id="outlined-basic" label="CVV" variant="outlined" />
              </Box>
              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <Button variant="outlined" color="secondary">
                  Submit
                </Button>
              </Box>
            </form>
            <p>
              <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} /> UPI
            </p>
            <p>
              <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />{' '}
              Cash On Delivery
            </p>
          </Grid>
          <Grid item xl={4} lg={4} md={12} sm={12} xs={12} align={'left'}>
            <OrderSummary />
          </Grid>
          <Grid
            item
            className={classes.boxClass}
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={12}
          ></Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PaymentPage
