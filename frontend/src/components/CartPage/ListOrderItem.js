import React from 'react'
import OrderItemCard from './OrderItemCard'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  gridClass: {
    background: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}))

function ListOrderItem() {
  const classes = useStyles()
  return (
    <Container>
      <Grid item align={'center'}>
        <Grid container spacing={2}>
          <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
            <OrderItemCard />
            <OrderItemCard />
            <OrderItemCard />
          </Grid>
          <Box
            component={Grid}
            item
            xl={9}
            lg={9}
            md={12}
            sm={12}
            xs={12}
            className={classes.gridClass}
          >
            <p>Total: 459 </p>
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
