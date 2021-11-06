import React from 'react'
import Brand from './Brand'
import Brand_data from '../../assests/Home/Brand_name'
import { Box, makeStyles, Link } from '@material-ui/core'

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
    <Link href="/search" underline="none">
      <Brand img={iteam.img} href={iteam.href} />
    </Link>
  )
}

export default function App() {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.root}>{Brand_data.map(products)}</Box>
    </div>
  )
}
