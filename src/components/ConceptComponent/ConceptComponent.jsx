import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './ConceptComponent.css';
import './ConceptComponent.css';

import { connect } from 'react-redux'
import store from '../../redux/store';
import * as action from './../../redux/actions'

class ConceptComponent extends React.Component {
    constructor() {
        super();
    }
 
    componentDidMount(){
        this.props.dispatch(action.setCurrentQuestion())    
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1 class='bigblue' className={styles.bigblue}> {this.props.concept.title}</h1>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                    <img class='responsive-img' alt="description-image" src="https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg" />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
                <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>
                        {this.props.concept.intro} <br></br> <br></br>
                        {this.props.concept.full_explanation}
                    </Typography>
            </React.Fragment>
        )
    }
}

function mapStateToProps (store) {
    return({
        concept: store.currentConcept
    })
}

export default connect(mapStateToProps)(ConceptComponent)

