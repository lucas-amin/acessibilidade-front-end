import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../style.css';
import AlternativeButtons from '../helpers/ButtonComponent/AlternativeButtonComponent'
import Grid from "@material-ui/core/Grid";

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
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <CssBaseline/>
                        <h1> {this.props.currentQuestion.title} - {this.props.currentQuestion.category} </h1>
                    </Grid>

                    <Grid item>
                        <Box textAlign="center">
                            <Typography variant='h5' component="div" align='center'
                                        style={{backgroundColor: '#cfe8fc'}}>
                                {this.props.currentQuestion.text}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item>
                        <AlternativeButtons onClick={this.rightAnswerClick}
                                            alternatives={this.props.currentQuestion.alternatives}></AlternativeButtons>
                    </Grid>

                </Grid>
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
