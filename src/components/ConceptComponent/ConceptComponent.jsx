import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class ConceptComponent extends React.Component {
    constructor(concept) {
        super();
        this.state = concept;
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1> Concept X: {this.state.title}</h1>
                <Container maxWidth="sm">
                    <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '30vh'}}>
                        Concept text: {this.state.text}
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

