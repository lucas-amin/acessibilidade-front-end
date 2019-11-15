import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: '97%',
    },
}));

export default function UnderstoodButton(props) {
    const classes = useStyles();
    return (
        <Button onClick={props.onClick} color="primary" variant="contained" className={classes.button}>
            Okay, alles klar
        </Button>
    )
}