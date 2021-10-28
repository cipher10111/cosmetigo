import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core'
import globalStyles from '../assests/jss/globalStyles'
// import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(globalStyles)

const Appbar = (props) => {
  const classes = useStyles()
  // const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar>
        <h1>Appbar</h1>
      </AppBar>
    </div>
  )
}

export default Appbar
