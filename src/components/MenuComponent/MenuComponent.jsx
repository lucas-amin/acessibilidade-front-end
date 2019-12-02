import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './MenuComponent.css';
import MenuButtons from './../helpers/ButtonComponent/MenuButtonsComponent'
import {connect} from 'react-redux'
import Lifecycle from "react-router/modules/Lifecycle";
import {Link} from "react-router-dom";
import * as action from './../../redux/actions'

class MenuComponent extends React.Component {
    onUnderstoodClick = (category) => {
        this.props.browserHistory.push("/concept")
        
        this.props.dispatch(action.setCurrentConceptType(category))
        //this.props.dispatch(action.setCurrentQuestionType(category))
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1 class='bigblue'> Menu principal</h1>
                <MenuButtons onClick={this.onUnderstoodClick} concepts={this.props.concepts}></MenuButtons>
            </React.Fragment>
        )
    }
}

function mapStateToProps(store) {
    return ({
        concepts: store.currentConcept
    })
}

export default connect(mapStateToProps)(MenuComponent)
