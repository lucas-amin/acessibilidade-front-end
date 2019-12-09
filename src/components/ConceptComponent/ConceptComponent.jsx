import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import * as action from './../../redux/actions'

import SliderCarousel from '../helpers/SliderCarouselComponent/SliderCarouselComponent'
import './ConceptComponent.css';
import UnderstoodButton from './../helpers/ButtonComponent/ButtonComponent'

import {connect} from 'react-redux'
import Box from '@material-ui/core/Box';

class ConceptComponent extends React.Component {
    constructor(){
        super();
        this.conceptCounter = 0
    }

    componentDidMount() {
        //this.props.dispatch(action.setCurrentQuestion())
    }

    onUnderstoodClick = () => {
        if (this.conceptCounter == this.props.concept.full_explanation.length - 1) {
            var lowerCaseTitle = this.props.concept.title.toLowerCase()
            this.props.dispatch(action.setCurrentQuestionType(lowerCaseTitle))
            this.props.browserHistory.push('/question')

        } else {
            this.props.dispatch(action.setCurrentConceptExample())
        }
        this.conceptCounter ++
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Grid container direction="column" spacing={3}>

                    <Grid item>
                        <h1 class='bigblue'> {this.props.concept.title}</h1>
                    </Grid>

                    {(this.props.concept.images || this.props.concept.videos) ?
                        <Grid item>
                            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                                <Grid item xs={10} md={6} lg={4} >
                                    <SliderCarousel
                                        images={this.props.concept.images ?
                                                this.props.concept.images : []}
                                        videos={this.props.concept.videos ?
                                                this.props.concept.videos : []}>                                        
                                    </SliderCarousel>
                                </Grid>
                            </Grid>
                        </Grid> : ""
                    }

                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                    <Grid xs={9} item>
                        <Box width={1} bgcolor="background.paper" p={4}>
                            <Typography component="div"
                            style={{backgroundColor: '#eeeeeee',
                                    whiteSpace: 'pre-line',
                                    width: '100%',
                                    fontSize: '2em'}}>
                                {this.props.concept.full_explanation[this.conceptCounter]}
                            </Typography>
                        </Box>

                        <UnderstoodButton onClick={this.onUnderstoodClick}></UnderstoodButton>
                    </Grid>
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

