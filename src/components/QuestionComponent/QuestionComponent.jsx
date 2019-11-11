import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {combineReducers, createStore} from 'redux'
import {createBrowserHistory} from "history";

import {reducerQuestion} from '../../reducers/reducerQuestion'
import {reducerLearning} from '../../reducers/reducerLearning'
import {reducerQuestions} from '../../reducers/reducerQuestions'
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

export default function AlternativeButtons(alternatives) {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh'}}
                            className={classes.button}>
                        alternative 1
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh'}}
                            className={classes.button}>
                        Alternative 2
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh'}}
                            className={classes.button}>
                        Alternative 3
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="default" style={{backgroundColor: '#dfdfdf', height: '30vh'}}
                            className={classes.button}>
                        Alternative 4
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export class QuestionComponent extends React.Component {
    constructor(store2) {
        super();

        const reducers = combineReducers({
            currentQuestion: reducerQuestion,
            currentConcept: reducerLearning,
            questions: reducerQuestions
        })

        const myStore = createStore(reducers, {
            currentQuestion: {
                title: "Question 1",
                category: "Mechanics",
                text: "What is a inclusive mechanic?"
            },
            currentConcept: {
                title: "Question 1",
                category: "Mechanics",
                text: "What is a inclusive mechanic?"
            },
            questions: [
                {
                    title: "Question 1",
                    category: "Mechanics",
                    text: "What is a inclusive mechanic?"
                }]
        })

        this.state = myStore.getState();
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1> {this.state.currentQuestion.title} - {this.state.currentQuestion.category} </h1>
                <Box textAlign="center">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '5vh'}}>
                      {this.state.currentQuestion.text}
                    </Typography>
                </Box>
            </React.Fragment>
        )
    }
}
