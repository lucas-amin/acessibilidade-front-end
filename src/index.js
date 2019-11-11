import React, {Component} from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {createBrowserHistory} from "history";

import {combineReducers, createStore} from 'redux'

import {QuestionComponent} from './components/QuestionComponent/QuestionComponent'
import AlternativeButtons from './components/QuestionComponent/QuestionComponent'
import {ConceptComponent} from './components/ConceptComponent/ConceptComponent'
import AppBarComponent from './components/AppBar/AppBar'
import UnderstoodButton from './components/helpers/ButtonComponent/ButtonComponent'


import {reducerQuestion} from './reducers/reducerQuestion'
import {reducerLearning} from './reducers/reducerLearning'
import {reducerQuestions} from './reducers/reducerQuestions'
import './style.css';

import Button from '@material-ui/core/Button';

class App extends Component {
    constructor() {
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
                    text: "What is a inclusive mechanic?",
                    alternatives: ["option A", "option B", "option C", "option D"]
                }]
        })

        myStore.subscribe((data) => {
            console.log(myStore.getState().currentQuestion.title)
        })
        myStore.dispatch({type: "2", payload: 1})
        myStore.dispatch({type: "3", payload: 1})
        myStore.dispatch({type: "33", payload: 1})

        this.customHistory = createBrowserHistory();
        this.state = myStore.getState();
    }

    render() {
        return (
            <div>
                <AppBarComponent></AppBarComponent>
                <Router history={this.customHistory}>

                    <Switch>
                        <Route path={"/question"}>
                            <QuestionComponent question={this.state.currentQuestion}/>
                            <Link to="">
                                <AlternativeButtons alternative={this.state.questions} >
                                    Concept Component
                                </AlternativeButtons>
                            </Link>
                        </Route>
                        <Route path={""}>
                            <ConceptComponent concept={this.state.currentConcept}/>
                            <Link to="/question">
                                <UnderstoodButton></UnderstoodButton>
                            </Link>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));
