import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../style.css';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


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

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Alternative 1
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Alternative 2
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Alternative 3
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh', width: '30vh'}}
                            className={classes.button}>
                        Alternative 4
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export class QuestionComponent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1> {this.props.question.title} - {this.props.question.category} </h1>
                <Box textAlign="center">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '5vh'}}>
                      {this.props.question.text}
                    </Typography>
                </Box>
            </React.Fragment>
        )
    }
}
