import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as action from './../../redux/actions'

import './ConceptComponent.css';
import UnderstoodButton from './../helpers/ButtonComponent/ButtonComponent'

import {connect} from 'react-redux'
import Box from '@material-ui/core/Box';

class ConceptComponent extends React.Component {
    componentDidMount() {
        //this.props.dispatch(action.setCurrentQuestion())
    }

    onUnderstoodClick = () => {
        if (this.props.concept.id === 2) {
            var lowerCaseTitle = this.props.concept.title.toLowerCase()
            debugger
            this.props.dispatch(action.setCurrentQuestionType(lowerCaseTitle))
            this.props.browserHistory.push('/question')
        }else{
            this.props.dispatch(action.setCurrentConceptExample())
        }
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                    <Grid item>
                        <h1 class='bigblue'> {this.props.concept.title + " " + this.props.concept.id}</h1>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={0}>
                            <Grid item xs={3}>
                            </Grid>
                            <Grid item xs={6}>
                                <img class='responsive-img' alt="explanatory" src={this.props.concept.media}/>
                            </Grid>
                            <Grid item xs={3}>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Box mx="auto" bgcolor="background.paper" p={4}>
                            <Typography component="div" style={{backgroundColor: '#cfe8fc', whiteSpace: 'pre-line'}}>
                                {this.props.concept.intro} <br></br> <br></br>
                                {this.props.concept.full_explanation}
                            </Typography>
                        </Box>

                        <UnderstoodButton onClick={this.onUnderstoodClick}></UnderstoodButton>
                    </Grid>

                </Grid>
            </React.Fragment>
        )
    }
}

function mapStateToProps(store) {
    return ({
        concept: store.currentConcept
    })
}

export default connect(mapStateToProps)(ConceptComponent)

