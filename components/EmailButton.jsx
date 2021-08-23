import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import { saveSubscription } from "./services/subscription.service";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: 100,
		},
		"& label.Mui-focused": {
			color: "green",
		},
	},
}));

export default function EmailButton() {
	const MyButton = styled(Button)({
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 28,
		padding: "0 30px",
	});

	const classes = useStyles();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const responseMess = useRef();
	console.log(responseMess.current);

	const subscription = (e) => {
		e.preventDefault();
		saveSubscription({ name, email })
			.then((response) => {
				responseMess.current.style.color = "green";
				responseMess.current.innerText = "Subscribed Successfully";
				responseMess.current.style.backgroundColor = "rgba(0, 0, 0, 0.377)";
				responseMess.current.style.width = "165px";
			})
			.catch((err) => {
				responseMess.current.style.color = "red";
				responseMess.current.innerText = "Invalid Email Address";
				responseMess.current.backgroundColor = "rgba(0, 0, 0, 0.377)";
				responseMess.current.style.width = "165px";
			});
	};

	return (
		<div className='EmailButton__container'>
			<div
				className={classes.margin}
				style={{
					color: "white",
					display: "flex",
					alignItems: "center",
					// width: "600px",
					marginLeft: "10px",
				}}>
				<Grid container spacing={1} alignItems='flex-end'>
					<Grid item>
						<AccountCircle />
					</Grid>
					<Grid item>
						<TextField
							id='input-with-icon-grid'
							label='Enter Name'
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={1} alignItems='flex-end'>
					<Grid item>
						<EmailIcon />
					</Grid>
					<Grid item>
						<TextField
							id='input-with-icon-grid'
							label='Enter Email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Grid>
				</Grid>
				<MyButton onClick={subscription}>Subscribe</MyButton>
				<p id='responseValidation' ref={responseMess}></p>
			</div>
		</div>
	);
}
