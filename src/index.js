import React, {Component} from 'react';
import {render} from 'react-dom';
import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux'

import QuestionComponent from './components/QuestionComponent/QuestionComponent'
import ConceptComponent from './components/ConceptComponent/ConceptComponent'
import MenuComponent from './components/MenuComponent/MenuComponent'

import AppBarComponent from './components/AppBar/AppBar'
import store from './redux/store'
import './style.css';

let browserHistory = createBrowserHistory();
export default browserHistory;

class App extends Component {
    constructor() {
        super();
        store.subscribe((data) => {
            console.log(store.getState().currentQuestion.title)
        })

        store.dispatch({type: "1", payload: 1})

        this.state = store.getState();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Provider store={store}>
                    <AppBarComponent></AppBarComponent>
                    <Switch>
                        <Route path={"/question"}>
                            <QuestionComponent currentQuestion={this.state.currentQuestion}
                                browserHistory={browserHistory}> </QuestionComponent>
                        </Route>
                        <Route path={"/concept"}>
                            <ConceptComponent browserHistory={browserHistory}/>
                        </Route>
                        <Route path={""}>
                            <MenuComponent browserHistory={browserHistory}/>
                        </Route>
                    </Switch>
                </Provider>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('root'));
