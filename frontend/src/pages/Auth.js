import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import globalStyles from "../assests/jss/globalStyles";
import Appbar from "../components/Appbar";

const useStyles = makeStyles((theme) => globalStyles(theme));

const Auth = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* <Appbar /> */}
			<Grid container justify="center" alignItems="center">
				<Grid item>
					<h1>Auth page here</h1>
				</Grid>
			</Grid>
		</div>
	);
};

export default Auth;
