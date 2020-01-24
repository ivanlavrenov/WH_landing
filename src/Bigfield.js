import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 472,
      right: 10,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

    return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Введите ваше имя" variant="outlined" />
    </form>
  );
}

ReactDOM.render(<BasicTextFields />, document.querySelector('#BasicTextFields'));