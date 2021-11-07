import React from 'react'
import Iteam from './Products'
import iteam_data from '../../assests/Home/new_iteam_data'
import { Box, Grid, makeStyles } from '@material-ui/core'

import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '1rem',
    margin: 'auto',
  },
}))

function products(iteam) {
  return (
    <Link href="/product" underline="none">
      <Iteam
        img={iteam.img}
        title={iteam.title}
        quant={iteam.quant}
        amount={iteam.amount}
      />
    </Link>
  )
}

export default function App() {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.root}>{iteam_data.map(products)}</Box>
    </div>
  )
}
