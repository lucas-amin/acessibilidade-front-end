import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux'
import store from '../../redux/store';

import * as action from './../../redux/actions'

class ConceptComponent extends React.Component {
    constructor() {
        super();
    }

    componentWillMount(){
        debugger
        this.props.dispatch(action.setCurrentQuestion())    
    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1> Concept X: {this.props.title}</h1>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '30vh'}}>
                        Concept text: {this.props.text}
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

function mapStateToProps (store) {
    return({
        title: store.currentConcept.title,
        text: store.currentConcept.text
    })
}

export default connect(mapStateToProps)(ConceptComponent)

