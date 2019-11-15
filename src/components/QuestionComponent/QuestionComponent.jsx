import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../style.css';
import AlternativeButtons from '../helpers/ButtonComponent/AlternativeButtonComponent'

import {connect} from 'react-redux'
import * as action from './../../redux/actions'
import UnderstoodButton from "../helpers/ButtonComponent/ButtonComponent";

export class QuestionComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch(action.setCurrentQuestion())
    }

    rightAnswerClick = () => {
        this.props.dispatch(action.setCurrentQuestion())
        this.props.browserHistory.push('/concept')
    }

    render() {
        debugger;

        return (
            <React.Fragment>
                <CssBaseline/>
                <h1> {this.props.question.title + " " + this.props.question.id} </h1>
                <Box textAlign="center">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '5vh'}}>
                      {this.props.question.text}
                    </Typography>
                </Box>
                <AlternativeButtons onClick={this.onUnderstoodClick}></AlternativeButtons>
            </React.Fragment>
        )
    }
}

function mapStateToProps(store) {
    return ({
        question: store.currentQuestion
    })
}

export default connect(mapStateToProps)(QuestionComponent)