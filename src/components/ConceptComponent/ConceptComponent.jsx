import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {combineReducers, createStore} from "redux";
import {reducerQuestion} from "../../reducers/reducerQuestion";
import {reducerLearning} from "../../reducers/reducerLearning";
import {reducerQuestions} from "../../reducers/reducerQuestions";

export class ConceptComponent extends React.Component {
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
                <h1>Hello, I'm the ConceptComponent</h1>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '30vh'}}>
                        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in
                        der Industrie bereits der Standard Demo-Text seit 1500
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

