import React from "react";
import Slider from 'infinite-react-carousel';
import {Slide} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../style.css';
import './QuestionComponent.css'
import AlternativeButtons from '../helpers/ButtonComponent/AlternativeButtonComponent'
import SliderCarousel from '../helpers/SliderCarouselComponent/SliderCarouselComponent'
import Grid from "@material-ui/core/Grid";
import {connect} from 'react-redux'
import * as action from './../../redux/actions'

const {red, blue, green} = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

class QuestionComponent extends React.Component {
    constructor() {
        super();
        this.settings = {};
    }

    rightAnswerClick = () => {
        debugger
        if(this.props.currentQuestion.currentIndex + 1 >=
           this.props.currentQuestion.questionsLength){
            this.props.browserHistory.push('');
        }else{
            this.props.dispatch(action.setNextQuestion())
        }

    }

    render() {
        return (
            <React.Fragment>
                <Grid container direction="column" spacing={5}>

                    <Grid item >
                        <h1> Questão {this.props.currentQuestion.currentIndex + 1} - {this.props.currentQuestion.category.charAt(0).toUpperCase() +
                        this.props.currentQuestion.category.slice(1)} </h1>
                    </Grid>

                    <Grid item>
                        <Typography variant='h5' component="div" align='center' color={'initial'}
                                    style={{backgroundColor: '#eeeeeee'}}>
                            {this.props.currentQuestion.question}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                            <Grid item xs={10} md={6} lg={4} >
                                <SliderCarousel
                                    images={this.props.currentQuestion.images ?
                                            this.props.currentQuestion.images : []}
                                    videos={this.props.currentQuestion.videos ?
                                            this.props.currentQuestion.videos : []}>                                        
                                </SliderCarousel>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <AlternativeButtons 
                            onClick={this.rightAnswerClick}
                            alternatives={this.props.currentQuestion.alternatives}>
                        </AlternativeButtons>
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
