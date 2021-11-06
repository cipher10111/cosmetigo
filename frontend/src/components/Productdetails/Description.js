import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  description: {
    width: '25rem',
    padding: '1rem',
  },
}))

export default function Description() {
  const classes = useStyles()
  return (
    <div className={classes.description}>
      <Typography variant="h5" component="p">
        Specifications:
      </Typography>
      <Typography variant="p" component="p">
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings of the great explorer of the
        truth
      </Typography>
      <Typography variant="p" component="p">
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings of the great explorer of the
        truth
      </Typography>
    </div>
  )
}
