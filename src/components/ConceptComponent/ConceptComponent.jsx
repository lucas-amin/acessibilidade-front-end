import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './ConceptComponent.css';
import UnderstoodButton from './../helpers/ButtonComponent/ButtonComponent'

import {connect} from 'react-redux'
import * as action from './../../redux/actions'

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
                <h1 class='bigblue'> {this.props.concept.title + " " + this.props.concept.id}</h1>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <img class='responsive-img' alt="explanatory" src={this.props.concept.media}/>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
                <Typography component="div" 
                    style={{backgroundColor: '#cfe8fc',
                            whiteSpace: 'pre-line',
                            fontSize: '2em'}}>
                    {this.props.concept.intro} <br></br> <br></br>
                    {this.props.concept.full_explanation}
                </Typography>
                <UnderstoodButton onClick={this.onUnderstoodClick}></UnderstoodButton>
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

