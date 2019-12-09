import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { IconButton } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: '97%',
    },
    input: {
        display: 'none',
    },
}));

export default function MenuButtons(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={() => props.onClick("narrativa")} color="primary" variant="contained"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        {props.concepts.title}
                    </IconButton>
                </Grid>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={() => props.onClick("tecnologia")} color="primary" variant="contained"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Tecnologia
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={props.onClick} color="primary" variant="contained"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Mecanicas
                    </IconButton>
                </Grid>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={props.onClick} color="primary" variant="contained"
                            style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Objetivos
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={props.onClick} color="primary" variant="contained"
                                style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                                className={classes.button}>
                        Regras
                    </IconButton>
                </Grid>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={props.onClick} color="primary" variant="contained"
                                style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                                className={classes.button}>
                        Elementos visuais (E.V.A.Hs)
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}
