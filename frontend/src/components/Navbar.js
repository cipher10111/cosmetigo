import React from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Link from '@material-ui/core/Link'

import store from '../redux/store'
import { logout } from '../redux/actions/userActions'

const useStyles = makeStyles((theme) => ({
  navcontainer: {
    backgroundColor: '#FF5C58',
  },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      flexGrow: 0.9,
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      padding: '0 5rem',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.65),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'flex',
  },
}))

export default function PrimarySearchAppBar() {
  const classes = useStyles()

  const handleLogout = () => {
    store.dispatch(logout())
    document.location.href = '/auth'
  }

  return (
    <div className={classes.navcontainer}>
      <AppBar
        position="static"
        className={(classes.growclasses, classes.navcontainer)}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Cosmetigo
          </Typography>
          <div className={classes.grow} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 5 new notifications" color="inherit">
              <Badge badgeContent={5} color="secondary">
                <Link href="/cart" underline="none">
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              onClick={handleLogout}
              edge="end"
              aria-label="account of current user"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
