import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import CloseIcon from '@material-ui/icons/Close'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '1rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  cover: {
    width: '300px',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
  },
}))

export default function OrderCard() {
  const classes = useStyles()

  return (
    <Box>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="https://imgd.aeplcdn.com/664x374/n/cw/ec/40027/safari-exterior-right-front-three-quarter-2.jpeg?q=85"
          title="Safari car"
        />

        <div className={classes.details}>
          <CardContent>
            <Typography component="h5" variant="h5">
              Safari
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Total 400
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Quantity: 1
            </Typography>
          </CardContent>
        </div>
        <div className={classes.controls}>
          <IconButton aria-label="add">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="close">
            <CloseIcon />
          </IconButton>
          <IconButton aria-label="remove">
            <RemoveIcon />
          </IconButton>
        </div>
      </Card>
    </Box>
  )
}
