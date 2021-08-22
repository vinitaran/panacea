import React from "react";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 100,
    },
    '& label.Mui-focused': {
        color: 'green',
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
    padding: "0 10px",
  });

  const classes = useStyles();

  return (
    <div className="EmailButton__container">
      <div className={classes.margin} style={{color: 'white'}}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Enter Name"  />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <EmailIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Enter Email"  />
          </Grid>
        </Grid>
        <MyButton>Send</MyButton>
      </div>
    </div>
  );
}
