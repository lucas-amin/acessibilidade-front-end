import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
    },
    input: {
        display: 'none',
    },
}));

export default function MenuButtons(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={6}>
                <Grid item >
                    <IconButton onClick={() => props.onClick("narrativa")} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        {props.concepts.title}
                    </IconButton>
                </Grid>
                <Grid item >
                    <IconButton onClick={() => props.onClick("tecnologia")} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Tecnologia
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                <Grid item>
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Mecanicas
                    </IconButton>
                </Grid>
                <Grid item >
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Objetivos
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                <Grid item >
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                                style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                                className={classes.button}>
                        Tecnologiamal
                    </IconButton>
                </Grid>
                <Grid item >
                    <IconButton onClick={props.onClick} variant="contained" color="default"
                                style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                                className={classes.button}>
                        Elementos visuais (E.V.A.Hs)
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}
