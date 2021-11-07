import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
  },
}))

export default function OrderSummary() {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.heading}>Order Summary:</Typography>
      <Divider />
      <p>Price: {'      '}459 </p>
      <p>Total Quantity: {'   '}10</p>
      <p>Texes: {'     '}10</p>
      <Divider />
      <p>Total Price: {'     '}2000</p>
    </>
  )
}
