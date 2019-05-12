import React from "react";
import Slider from 'infinite-react-carousel';
import {Slide} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../style.css';
import './QuestionComponent.css'
import AlternativeButtons from '../helpers/ButtonComponent/AlternativeButtonComponent'
import Grid from "@material-ui/core/Grid";
import {connect} from 'react-redux'

const {red, blue, green} = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

class QuestionComponent extends React.Component {
    constructor() {
        super();
        this.settings = {};
    }

    rightAnswerClick = () => {
        this.props.browserHistory.push('')
    }

    render() {
        return (
            <React.Fragment>
                <Grid container direction="column" spacing={5}>

                    <Grid item >
                        <h1> {this.props.currentQuestion.title} - {this.props.currentQuestion.category} </h1>
                    </Grid>

                    <Grid item>
                        <Typography variant='h5' component="div" align='center' color={'initial'}
                                    style={{backgroundColor: '#eeeeeee'}}>
                            {this.props.currentQuestion.text}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                            <Grid item xs={10} md={6} lg={4} >
                                <Slider color="primary" {...this.settings}>

                                        <img className='responsive-img' alt="explanatory"
                                             src="https://cdn4.buysellads.net/uu/1/41312/1545083324-1539370929-mailchimp-Yellow-260x200.png"/>
                                             
                                        <div class="video-container">
                                            <iframe width="560" height="315" 
                                                src="https://www.youtube.com/embed/_TyJeKKQh-s?controls=0"
                                                frameborder="0"
                                                allow="accelerometer; autoplay;
                                                    encrypted-media; gyroscope;
                                                    picture-in-picture"
                                                allowfullscreen>
                                            </iframe>
                                        </div>
                                        <img className='responsive-img' alt="explanatory"
                                             src="https://cdn4.buysellads.net/uu/1/41312/1545083324-1539370929-mailchimp-Yellow-260x200.png"/>
                                </Slider>
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
