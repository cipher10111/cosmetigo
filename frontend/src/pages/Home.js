import React from 'react'
import {
  Box,
  Grid,
  Button,
  Card,
  Container,
  Typography,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Newiteam from '../components/Home/Newiteam'
import Typelist from '../components/Home/Typelist'

import Head from '../components/Home/Head'
import Brandlist from '../components/Home/Brandlist'

const useStyles = makeStyles((theme) => ({
  page: {
    padding: '1rem 1rem 0 1rem ',
    fontFamily: 'Helvetica',
    [theme.breakpoints.up('md')]: {
      padding: '1rem 8rem 0 8rem ',
    },
  },
  newiteam: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}))

const Home = (props) => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.page}>
        <Head />
        <div>
          <Typelist />
        </div>
        <div>
          <div className={classes.newiteam}>
            <Typography variant="h5">New Products</Typography>
            <Button>view all</Button>
          </div>
          <Newiteam />
        </div>
        <div>
          <Typography variant="h5">Shop by Brands</Typography>
          <Brandlist />
        </div>
      </div>
    </div>
  )
}

export default Home
