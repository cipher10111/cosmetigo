import React from 'react'
import Review from './Review'
import review_data from '../../assests/Productsdetails/review_data'
import { Box, makeStyles, Button } from '@material-ui/core'
import Writereview from './Writereview'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '1rem',
    margin: 'auto',
  },
}))

function Reviews(iteam) {
  return (
    <Review
      Avatar={iteam.Avatar}
      name={iteam.name}
      starts={iteam.starts}
      reviews={iteam.reviews}
    />
  )
}

export default function App() {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.root}>{review_data.map(Reviews)}</Box>
      <Button>See all reviews</Button>
      <Writereview />
    </div>
  )
}
