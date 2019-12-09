import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: '#dfdfdf',
        width: '100%',
        height: '100%',
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    input: {
        display: 'none',
    },
}));

export default function AlternativeButtons(props) {
    const classes = useStyles();

    return (
        <Grid container direction="row" alignItems="center" justify="space-around" spacing={6}>
            {props.alternatives.map((element, index) => {
                return(
                    <Grid key={index} item xs={12} md={6} xl={3}>
                        <Button 
                            onClick={ () => props.onClick(index)}
                            variant="contained" color="default"
                            
                            style={ props.correct_answer == index && props.show_answer ? {backgroundColor: 'green'} : {}}
                                className={classes.button}>
                            {element}
                        </Button>
                    </Grid>)
            })}
        </Grid>
    );
}
