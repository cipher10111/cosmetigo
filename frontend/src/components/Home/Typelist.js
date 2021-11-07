import React from 'react'
import Iteam from './IteamType'
import iteam_data from '../../assests/Home/iteam_type_data'
import { Grid, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 'auto',
  },
}))

function Types(iteam) {
  return (
    <Link href="/search" underline="none">
      <Iteam img={iteam.img} title={iteam.title} subtitle={iteam.subtitle} />
    </Link>
  )
}

export default function App() {
  const classes = useStyles()
  return (
    <div>
      <Grid className={classes.root}>{iteam_data.map(Types)}</Grid>
    </div>
  )
}
