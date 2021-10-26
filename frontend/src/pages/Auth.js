import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Typography,
	Divider,
	Paper,
	TextField,
	Button,
	Link,
} from "@material-ui/core";
import globalStyles from "../assests/jss/globalStyles";
import authStyles from "../assests/jss/authStyles";
import { connect, useDispatch } from "react-redux";
import propTypes from "prop-types";
import Appbar from "../components/Appbar";
import { register, signin } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => authStyles(theme));

const Auth = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [isLogIn, setLogIn] = useState(true);
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});

	useEffect(() => {
		console.log(props);
	}, []);

	const handleFormSubmit = () => {
		console.log("clicked");
		if (isLogIn)
			dispatch(signin({ username: user.username, password: user.password }));
		else
			dispatch(
				register({
					username: user.username,
					email: user.email,
					password: user.password,
				})
			);
	};

	return (
		<div className={classes.root}>
			{/* <Appbar /> */}
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				className={classes.root}>
				<Grid item align="center" xs={12} sm={7} md={4}>
					<Typography variant="h4" component="h1">
						{isLogIn ? "WELCOME BACK" : "WELCOME"}
					</Typography>
					<Paper elevation={10} className={classes.container}>
						<Grid container spacing={2}>
							<Grid item align="center" xs={12}>
								<Typography variant="h5" component="h2" align="center">
									{isLogIn ? "Log In" : "Sign Up"}
								</Typography>
							</Grid>
							{!isLogIn && (
								<Grid item align="center" xs={12}>
									<TextField
										label="Enter Email"
										type="text"
										fullWidth
										required
										variant="outlined"
										value={user.email}
										onChange={(e) =>
											setUser((state) => ({ ...state, email: e.target.value }))
										}
									/>
								</Grid>
							)}
							<Grid item align="center" xs={12}>
								<TextField
									label="Enter Username"
									type="text"
									fullWidth
									required
									variant="outlined"
									value={user.username}
									onChange={(e) =>
										setUser((state) => ({ ...state, username: e.target.value }))
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									label="Password"
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
							{/* {loading && (
								<Grid item align="center" xs={12}>
									<Loading />
								</Grid>
							)}
							{error && (
								<Grid item align="center" xs={12}>
									<CustomMessage variant="error">{error}</CustomMessage>
								</Grid>
							)} */}
							<Grid item xs={12}>
								<Button
									type="submit"
									color="primary"
									variant="contained"
									size="large"
									fullWidth
									onClick={(e) => handleFormSubmit(e)}>
									{isLogIn ? "Log In" : "Sign Up"}
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Grid container justifyContent="space-between">
									<Grid item>
										<Link href="#" variant="body2">
											Forgot password?
										</Link>
									</Grid>
									<Grid item className={classes.link}>
										<Typography
											variant="body2"
											onClick={(e) => setLogIn((state) => !state)}>
											{isLogIn
												? "Don't have an account?"
												: "Already have an account?"}
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
									onClick={(e) => handleFormSubmit(e)}>
									Log in with Google
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

Auth.propTypes = {
	userInfo: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	userInfo: state.auth,
});

export default connect(mapStateToProps)(Auth);
