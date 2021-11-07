import React from 'react'
import {
  Container,
  Grid,
  Box,
  Divider,
  TextField,
  Button,
} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  boxClass: {
    marginTop: '40px',
  },
}))

export default function MyAccount() {
  const classes = useStyles()
  return (
    <Container>
      <Grid item align="center">
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={2}>
              <Box
                component={Grid}
                item
                lg={12}
                md={12}
                xs={12}
                sm={12}
                align="center"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="null"
                  className={classes.boxClass}
                />
                <p>Customer Name</p>
                <Divider />
              </Box>

              <Box
                component={Grid}
                mb={5}
                item
                lg={12}
                md={12}
                xs={12}
                sm={12}
                align="left"
              >
                <h3 className={classes.boxClass}>Personal Details:</h3>
                <Divider />
                <Grid container className={classes.boxClass} spacing={2}>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="First Name"
                      defaultValue="Monjul"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Last Name"
                      defaultValue="Boruah"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Mobile 1"
                      defaultValue="8822347692"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Mobile 2"
                      defaultValue="8822347692"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="password"
                      defaultValue="123455"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Created at"
                      defaultValue="monjul@gmail.com"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={4}
                    lg={4}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Updated at"
                      defaultValue="monjul@gmail.com"
                    />
                  </Grid>
                </Grid>

                <h3 className={classes.boxClass}>Address:</h3>
                <Divider />
                <Grid className={classes.boxClass} container spacing={2}>
                  <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Billing Address"
                      defaultValue="Guwahati"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Shipping Address"
                      defaultValue="Boruah"
                    />
                  </Grid>
                </Grid>

                <h3 className={classes.boxClass}>Saved Cards:</h3>
                <Divider />
                <Grid className={classes.boxClass} container spacing={2}>
                  <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Card Number"
                      defaultValue="1234567"
                    />
                  </Grid>
                  <Grid
                    item
                    xl={6}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    align={'center'}
                  >
                    <TextField
                      required
                      id="standard-required"
                      label="Expiry Date"
                      defaultValue="09/26"
                    />
                  </Grid>
                </Grid>

                <Grid className={classes.boxClass} container spacing={2}>
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    align="center"
                  >
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>

                    <Button variant="contained" color="secondary">
                      Update
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
