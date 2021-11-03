import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import MyOrderDetails from './MyOrderDetails'
import MyOrderSideNav from './MyOrderSideNav'
import MyOrderSideNavToggle from './MyOrderSideNavToggle'

function MyOrderPage(props) {
  return (
    <div>
      <div style={{ margin: '80px 0' }} />
      <Container>
        <Grid container spacing={3}>
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
          <Box
            component={Grid}
            item
            align="left"
            item
            sm={3}
            md={3}
            lg={3}
            xs={3}
            display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}
          >
            <MyOrderSideNav />
          </Box>

          <Grid item xl={9} lg={9} md={9} sm={12} xs={12} align={'center'}>
            <Grid container spacing={2}>
              <MyOrderDetails />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default MyOrderPage
