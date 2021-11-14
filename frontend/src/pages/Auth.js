import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Divider,
  Paper,
  TextField,
  Button,
  Link,
} from '@material-ui/core'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Swal from 'sweetalert2'
import authStyles from '../assests/jss/authStyles'
import { register, signin } from '../redux/actions/userActions'

const useStyles = makeStyles((theme) => authStyles(theme))

const Auth = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [isLogIn, setLogIn] = useState(true)
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    first_name: '',
    last_name: '',
  })
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    first_name: '',
    last_name: '',
  })

  const isAuth = useSelector((state) => state.auth.isAuth)

  useEffect(() => {
    if (isAuth) history.push('/')
  }, [isAuth])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (isLogIn) {
      dispatch(signin({ email: user.email, password: user.password }))
    } else {
      dispatch(
        register({
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          password: user.password,
        })
      )
    }
  }

  const errors = useSelector((state) => state.auth.error)
  useEffect(() => {
    setError((state) => ({
      ...state,
      username: errors?.username?.length && errors.username[0],
      email: errors?.email?.length && errors.email[0],
      password: errors?.password?.length && errors.password[0],
      password2: errors?.password?.length && errors.password[0],
      first_name: errors?.first_name?.length && errors.first_name[0],
      last_name: errors?.last_name?.length && errors.last_name[0],
    }))
  }, [errors])

  const errorDetail = useSelector((state) => state.auth.error?.error)
  const message = useSelector((state) => state.auth?.message)

  useEffect(() => {
    if (errorDetail) {
      Swal.fire({
        icon: 'error',
        title: errorDetail,
        showConfirmButton: false,
        timer: 1500,
      })
    } else if (message) {
      Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500,
      })
      document.location.href = '/auth'
    }
  }, [errorDetail, message])

  return (
    <div className={classes.root}>
      {/* <Appbar /> */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item align="center" xs={12} sm={7} md={4}>
          <Typography variant="h4" component="h1">
            {isLogIn ? 'WELCOME BACK' : 'WELCOME'}
          </Typography>
          <Paper elevation={10} className={classes.container}>
            <Grid container spacing={2}>
              <Grid item align="center" xs={12}>
                <Typography variant="h5" component="h2" align="center">
                  {isLogIn ? 'Log In' : 'Sign Up'}
                </Typography>
              </Grid>
              {!isLogIn && (
                <>
                  <Grid item align="center" xs={6}>
                    <TextField
                      label="Enter first name"
                      error={!!error.first_name}
                      helperText={error.first_name}
                      type="text"
                      fullWidth
                      required
                      variant="outlined"
                      value={user.first_name}
                      onChange={(e) =>
                        setUser((state) => ({
                          ...state,
                          first_name: e.target.value,
                        }))
                      }
                    />
                  </Grid>
                  <Grid item align="center" xs={6}>
                    <TextField
                      label="Enter last name"
                      error={!!error.last_name}
                      helperText={error.last_name}
                      type="text"
                      fullWidth
                      required
                      variant="outlined"
                      value={user.last_name}
                      onChange={(e) =>
                        setUser((state) => ({
                          ...state,
                          last_name: e.target.value,
                        }))
                      }
                    />
                  </Grid>
                  <Grid item align="center" xs={12}>
                    <TextField
                      label="Enter Username"
                      error={!!error.username}
                      helperText={error.username}
                      type="text"
                      fullWidth
                      required
                      variant="outlined"
                      value={user.username}
                      onChange={(e) =>
                        setUser((state) => ({
                          ...state,
                          username: e.target.value,
                        }))
                      }
                    />
                  </Grid>
                </>
              )}
              <Grid item align="center" xs={12}>
                <TextField
                  label="Enter Email"
                  error={!!error.email}
                  helperText={error.email}
                  type="text"
                  fullWidth
                  required
                  variant="outlined"
                  value={user.email}
                  onChange={(e) =>
                    setUser((state) => ({
                      ...state,
                      email: e.target.value,
                    }))
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  error={!!error.password}
                  helperText={error.password}
                  type="password"
                  fullWidth
                  required
                  variant="outlined"
                  value={user.password}
                  onChange={(e) =>
                    setUser((state) => ({ ...state, password: e.target.value }))
                  }
                />
              </Grid>
              {!isLogIn && (
                <Grid item xs={12}>
                  <TextField
                    label="Confirm Password"
                    error={!!error.password}
                    helperText={error.password}
                    type="password"
                    fullWidth
                    required
                    variant="outlined"
                    value={user.password2}
                    onChange={(e) =>
                      setUser((state) => ({
                        ...state,
                        password2: e.target.value,
                      }))
                    }
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={(e) => handleFormSubmit(e)}
                >
                  {isLogIn ? 'Log In' : 'Sign Up'}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Link href="forgot-password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item className={classes.link}>
                    <Typography
                      variant="body2"
                      onClick={() => setLogIn((state) => !state)}
                    >
                      {isLogIn
                        ? "Don't have an account?"
                        : 'Already have an account?'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider width="50%" orientation="horizontal" />
                <p>or connect with</p>
                <Divider width="50%" orientation="horizontal" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  size="small"
                  fullWidth
                  onClick={(e) => handleFormSubmit(e)}
                >
                  Log in with Google
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

Auth.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(Auth)
