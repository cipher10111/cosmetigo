import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Link from "@material-ui/core/Link";

import store from "../redux/store";

const useStyles = makeStyles((theme) => ({
  navcontainer: {
    backgroundColor: "#F6F6F6"
  },
  grow: {
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      flexGrow: 0.9
    }
  },
  title: {
    display: "none",
    color: "#000000",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      padding: "0 5rem"
    },
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.85)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000000"
  },
  inputInput: {
    color: "#000000",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
      "&:focus": {
        width: "25rem"
      }
    }
  },
  inputRoot: {
    color: "inherit"
  },
  sectionDesktop: {
    display: "flex"
  },
  icon: {
    color: "#000000"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const handleLogout = () => {
    document.location.href = "/auth";
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.navcontainer}>
      <AppBar position="static" className={(classes.growclasses, classes.navcontainer)}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
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
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 5 new notifications">
              <Badge badgeContent={5} color="secondary">
                <Link href="/cart" underline="none">
                  <ShoppingCartIcon className={classes.icon} />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle className={classes.icon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
