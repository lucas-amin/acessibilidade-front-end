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
        backgroundColor: '#dfdfdf',
        height: '38vh',
        width: '38vh',
        color: 'black'
    },
    input: {
        display: 'none',
    },
}));

export default function MenuButtons(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={0}>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={4}>
                    <IconButton onClick={() => props.onClick("narrativa")}  variant="contained"
                            className={classes.button}>
                        {props.concepts.title}
                    </IconButton>
                </Grid>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={4}>
                    <IconButton onClick={() => props.onClick("tecnologia")}  variant="contained"
                            className={classes.button}>
                        Tecnologia
                    </IconButton>
                </Grid>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={4}>
                    <IconButton onClick={() => props.onClick("mecanicas")}  variant="contained"
                            className={classes.button}>
                        Mecânicas
                    </IconButton>
                </Grid>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={() => props.onClick("objetivos")}  variant="contained"
                            className={classes.button}>
                        Objetivos
                    </IconButton>
                </Grid>

                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={() => props.onClick("regras")}  variant="contained"
                                style={{backgroundColor: '#dfdfdf', height: '38vh', width: '38vh'}}
                                className={classes.button}>
                        Regras
                    </IconButton>
                </Grid>
                <Grid item variant='contained' component="div" align='center' color={'initial'} xs={12} md={6} xl={3}>
                    <IconButton onClick={() => props.onClick("evas")}  variant="contained"
                                style={{backgroundColor: '#dfdfdf', height: '38vh', width: '38vh'}}
                                className={classes.button}>
                        Elementos visuais (E.V.A.Hs)
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}
