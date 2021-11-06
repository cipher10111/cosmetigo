import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Feed from '../components/Productdetails/feed'
import Tabs from '../components/Productdetails/tab'

import Relatedproducts from '../components/Productdetails/Relatedproducts'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  page: {
    padding: '1rem .5rem 0 .5rem ',
    fontFamily: 'Helvetica',
    [breakpoints.up('md')]: {
      padding: '1rem 8rem 0 8rem ',
    },
  },
}))

const Productdetails = () => {
  const classes = useStyles()
  return (
    <div className={classes.page}>
      <Feed />
      <Tabs />
      <Relatedproducts />
    </div>
  )
}

export default Productdetails
