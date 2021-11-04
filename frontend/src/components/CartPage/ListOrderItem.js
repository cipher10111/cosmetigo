import React from 'react'
import { Container, Grid, Button, Box } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import MyOrderSideNavToggle from './MyOrderSideNavToggle'
import OrderItemCard from './OrderItemCard'
import OrderSummary from './OrderSummary'

const useStyles = makeStyles((theme) => ({
  gridClass: {
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

  boxClass: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
  },
}))

function ListOrderItem() {
  const classes = useStyles()
  return (
    <Container>
      <Grid item align={'center'}>
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
          <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
            <OrderItemCard />
            <OrderItemCard />
            <OrderItemCard />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={12}
            sm={12}
            xs={12}
            mt={10}
            mb={10}
            align={'left'}
          >
            <OrderSummary />
          </Grid>
          <Box
            component={Grid}
            className={classes.boxClass}
            item
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={12}
          >
            <Button variant="outlined" color="primary">
              Back
            </Button>
            <Button variant="contained" color="secondary">
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ListOrderItem
