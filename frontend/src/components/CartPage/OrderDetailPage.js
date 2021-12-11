import React, { useState } from 'react'
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
    padding: '20px',
  },

  formClass: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '20ch',
    },
  },

  marginTopClass: {
    marginTop: '80px',
    marginBottom: '80px',
  },
  boxClass: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
}))

function OrderDetailPage() {
  const classes = useStyles()
  const [isShippingbillingsame, setisShippingbillingsame] = useState(false)

  return (
    <Container className={classes.marginTopClass}>
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
              <Grid container spacing={2} align="center">
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    md={3}
                    mb={2}
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    md={3}
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label="Company"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label="Zip Code"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label="Address 1"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box mt={2} component={Grid} item lg={6} md={6} xs={12} sm={12}>
                  <TextField
                    id="outlined-basic"
                    label="Address 2"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Grid>
            </form>
            <p mt={2}>Billing Address:</p>
            <Checkbox
              onClick={() => setisShippingbillingsame(true)}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />{' '}
            Same as Shipping Address
            {isShippingbillingsame || (
              <Grid container spacing={2} align="center">
                <form noValidate autoComplete="off">
                  <Grid container spacing={2} align="center">
                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Company"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Zip Code"
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Country"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Address 1"
                        variant="outlined"
                        size="small"
                      />
                    </Box>

                    <Box
                      mt={2}
                      component={Grid}
                      item
                      lg={6}
                      md={6}
                      xs={12}
                      sm={12}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Address 2"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </Grid>
                </form>
              </Grid>
            )}
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
          >
            {' '}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default OrderDetailPage
