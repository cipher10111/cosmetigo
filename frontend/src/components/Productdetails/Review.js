import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    width: '80%',
    margin: '1rem',
    [breakpoints.up('md')]: {
      width: '60%',
    },
  },
  user: {
    display: 'flex',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  large: {
    margin: '.2rem 0 .2rem 1rem',
  },
}))

export default function Iteam(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <Avatar alt="Remy Sharp" src={'https://picsum.photos/200/300'} />
        <div>
          <Typography variant="h6" component="h4" className={classes.large}>
            Jannie Schumm
          </Typography>
          <div className={(classes.details, classes.horizontal)}>
            <Rating
              name="products rating"
              precision={0.5}
              value="3.5"
              readOnly
            />
            <p className={classes.large}>7 month ago</p>
          </div>
        </div>
      </div>
      <div className={(classes.review, classes.horizontal)}>
        <Typography component="p">
          praising pain was born and I will give you a complete account of the
        </Typography>
      </div>
    </div>
  )
}
