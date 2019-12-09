import React from "react";
import Typography from '@material-ui/core/Typography';
import '../../style.css';
import './QuestionComponent.css'
import AlternativeButtons from '../helpers/ButtonComponent/AlternativeButtonComponent'
import SliderCarousel from '../helpers/SliderCarouselComponent/SliderCarouselComponent'
import Grid from "@material-ui/core/Grid";
import {connect} from 'react-redux'
import * as action from './../../redux/actions'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
const Button = require('@material-ui/core/Button').default;

class QuestionComponent extends React.Component {
    constructor() {
        super();
    }

    state = {
        open: false
    };

    openDialog() {
        this.setState({ open: true });

    }

    closeDialog = () =>  {
        this.setState({ open: false })

        if(this.state.answer_result == "Resposta Incorreta"){
            this.props.dispatch(action.setNextQuestion(false))
        } else {
            if(this.props.currentQuestion.currentIndex + 1 >= this.props.currentQuestion.questionsLength){
                this.props.browserHistory.push('');
            } else {
                this.props.dispatch(action.setNextQuestion(true))
            }
        }
    }

    rightAnswerClick = () => {
        this.setState({answer_result: "Resposta Correta"})
        this.setState( {justification: this.props.currentQuestion.justify_answer})

        this.openDialog()
    }

    wrongAnswerClick = () => {
        this.setState({answer_result: "Resposta Incorreta"})
        this.setState( {justification: this.props.currentQuestion.justify_answer})

        this.openDialog()
    }

    onClick = (index) => {
        if(this.props.currentQuestion.correct_answer == index) {
            this.rightAnswerClick()
        } else {
            this.wrongAnswerClick()
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
                    {(this.props.currentQuestion.images || this.props.currentQuestion.videos) ?
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
                        : ""
                    }

                    <Grid item>
                        <AlternativeButtons
                            onClick={this.onClick}
                            alternatives={this.props.currentQuestion.alternatives}
                            show_answer={this.state.open ? true : false}
                            correct_answer={this.props.currentQuestion.correct_answer}>
                        </AlternativeButtons>
                    </Grid>

                    <div className="App">
                        <Dialog open={this.state.open} >
                            {this.state.answer_result == 'Resposta Incorreta'?
                                <DialogTitle style={{color: 'red'}}>
                                    {this.state.answer_result}
                                </DialogTitle>
                                :
                                <DialogTitle style={{color: 'green'}}>
                                    {this.state.answer_result}
                                </DialogTitle>                              
                            }
                            <DialogContent>{this.state.justification}</DialogContent>
                            <DialogActions>
                                <Button onClick={this.closeDialog} >Ok</Button>
                            </DialogActions>
                        </Dialog>
                    </div>

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
