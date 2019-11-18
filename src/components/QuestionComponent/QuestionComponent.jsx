import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../style.css';
import AlternativeButtons from '../helpers/ButtonComponent/AlternativeButtonComponent'

import {connect} from 'react-redux'
import * as action from './../../redux/actions'

class QuestionComponent extends React.Component {
    constructor() {
        super();
    }

    rightAnswerClick = () => {
        this.props.browserHistory.push('')
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1> {this.props.currentQuestion.title} - {this.props.currentQuestion.category} </h1>
                <Box textAlign="center">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>
                    <h1> {this.props.currentQuestion.text} </h1>
                    </Typography>
                </Box>
                <AlternativeButtons onClick={this.rightAnswerClick} alternatives={this.props.currentQuestion.alternatives}></AlternativeButtons>
            </React.Fragment>
        )
    }
}

function mapStateToProps(store) {
    return ({
        currentQuestion: store.currentQuestion
    })
}

export default connect(mapStateToProps)(QuestionComponent)
