import React, {Component} from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {createBrowserHistory} from "history";
import { Provider } from 'react-redux'

import {QuestionComponent} from './components/QuestionComponent/QuestionComponent'
import AlternativeButtons from './components/QuestionComponent/QuestionComponent'
import ConceptComponent from './components/ConceptComponent/ConceptComponent'
import AppBarComponent from './components/AppBar/AppBar'
import UnderstoodButton from './components/helpers/ButtonComponent/ButtonComponent'

import store from './redux/store'
import './style.css';

import * as action from './redux/actions'
import Button from '@material-ui/core/Button';

class App extends Component {
    constructor() {
        super();
        store.subscribe((data) => {
            console.log(store.getState().currentQuestion.title)
        })

        //store.dispatch({type: "2", payload: 1})
        store.dispatch({type: "3", payload: 1})
        store.dispatch({type: "33", payload: 1})

        this.customHistory = createBrowserHistory();
        this.state = store.getState();
    }

    render() {
        return (
            <Provider store={store} >
                <AppBarComponent></AppBarComponent>
                <Router history={this.customHistory}>

                    <Switch>
                        <Route path={"/question"} component={QuestionComponent}>
                            <QuestionComponent question={this.state.currentQuestion}/>
                            <Link to="">
                                <AlternativeButtons currentQuestion={this.state.currentQuestion} alternative={this.state.questions} >
                                    Concept Component
                                </AlternativeButtons>
                            </Link>
                        </Route>
                        <Route path={""}>
                            <ConceptComponent concept={this.state.currentConcept}/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('root'));
