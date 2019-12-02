import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function AlternativeButtons(props) {
    const classes = useStyles();
    debugger;

    return (
        <div>
            <Grid container spacing={0} alignItems="center" justify="center" style={{minHeight: '50vh'}}>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                    <Grid item>
                        <Button onClick={props.onClick} variant="contained" color="default"
                                style={{backgroundColor: '#dfdfdf',
                                        height: '25vh',
                                        width: '25vh',
                                        fontSize: '1.5em',
                                        fontWeight: 'bold'}}
                                className={classes.button}>
                            {props.alternatives.A}
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={props.onClick} variant="contained" color="default"
                                style={{backgroundColor: '#dfdfdf', height: '25vh', width: '25vh',
                                fontSize: '1.5em',
                                        fontWeight: 'bold'}}
                                className={classes.button}>
                            {props.alternatives.B}
                        </Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
                    <Grid item>
                        <Button onClick={props.onClick} variant="contained" color="default"
                                style={{backgroundColor: '#dfdfdf', height: '25vh', width: '25vh',
                                fontSize: '1.5em',
                                        fontWeight: 'bold'}}
                                className={classes.button}>
                            {props.alternatives.C}
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={props.onClick} variant="contained" color="default"
                                style={{backgroundColor: '#dfdfdf', height: '25vh', width: '25vh',
                                fontSize: '1.5em',
                                        fontWeight: 'bold'}}
                                className={classes.button}>
                            {props.alternatives.D}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
