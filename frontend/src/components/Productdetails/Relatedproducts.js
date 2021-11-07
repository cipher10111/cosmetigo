import React from 'react'
import Iteam from './Product'
import iteam_data from '../../assests/Productsdetails/relatedIteamData'
import { Box, Typography, makeStyles } from '@material-ui/core'

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
    <Iteam
      img={iteam.img}
      title={iteam.title}
      quant={iteam.quant}
      amount={iteam.amount}
    />
  )
}

export default function Relatedproducts() {
  const classes = useStyles()
  return (
    <div>
      <Typography variant="h5" component="p">
        Related products
      </Typography>
      <Box className={classes.root}>{iteam_data.map(products)}</Box>
    </div>
  )
}
