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

function OrderDetailPage() {
  const classes = useStyles()

  return (
    <Container>
      <Grid item align={'left'}>
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
            <p mb={2}>Shipping Address:</p>
            <form noValidate autoComplete="off">
              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  mb={2}
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Company"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Zip Code"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Address 1"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Address 2"
                  variant="outlined"
                />
              </Box>
            </form>
            <p>Billing Address:</p>
            <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} /> Same
            as Shipping Address
            <form noValidate autoComplete="off">
              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Company"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Zip Code"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                />
              </Box>
              <Box xl={12} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Address 1"
                  variant="outlined"
                />
              </Box>

              <Box xl={12} mt={2} mb={2} className={classes.boxClass}>
                <TextField
                  id="outlined-basic"
                  label="Address 2"
                  variant="outlined"
                />
              </Box>
            </form>
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

export default OrderDetailPage
