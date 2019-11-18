import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function MenuButtons(props) {
    const classes = useStyles();
    debugger;

    return (
        <div>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                <Grid item >
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        {props.concepts.title}
                    </IconButton>
                </Grid>
                <Grid item >
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Concept B
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                <Grid item>
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Concept C
                    </IconButton>
                </Grid>
                <Grid item >
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Concept D
                    </IconButton>
                </Grid>
            </Grid>
            <Grid>
                <Grid item xs={6}>
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Concept F
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Concept G
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Concept H
                    </IconButton>
                </Grid>
                <Grid item xs={6}>
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Concept I
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}
