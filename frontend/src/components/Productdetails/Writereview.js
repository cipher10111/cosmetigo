import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Rating from '@material-ui/lab/Rating'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '90%',
    margin: '0 1rem',
    [breakpoints.up('sm')]: {
      width: '60%',
    },
  },
  message: {
    width: '100%',
    [breakpoints.up('sm')]: {
      width: '40rem',
    },
    height: '8rem',
  },
  submit: {
    width: '5rem',
    margin: '1rem 0',
  },
}))

export default function Writereview(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <div>
      <form className={classes.root}>
        <div>
          <Typography variant="h6" component="p">
            Write a Review
          </Typography>
          <Rating
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          />
        </div>
        <textarea
          className={classes.message}
          name="subject"
          placeholder="Write Your Review....."
        ></textarea>
        <Button
          className={classes.submit}
          size="small"
          variant="contained"
          color="secondary"
          type="Submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
