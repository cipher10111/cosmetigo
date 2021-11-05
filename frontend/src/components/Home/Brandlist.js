import React from 'react'
import Brand from './Brand'
import Brand_data from '../../assests/Home/Brand_name'
import { Box, makeStyles } from '@material-ui/core'

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
  return <Brand img={iteam.img} href={iteam.href} />
}

export default function App() {
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.root}>{Brand_data.map(products)}</Box>
    </div>
  )
}
