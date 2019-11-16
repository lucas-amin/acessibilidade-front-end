import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './MenuComponent.css';
import MenuButtons from './../helpers/ButtonComponent/MenuButtonsComponent'
import {connect} from 'react-redux'
import Lifecycle from "react-router/modules/Lifecycle";
import {Link} from "react-router-dom";

class MenuComponent extends React.Component {
    onUnderstoodClick = () => {
        this.props.browserHistory.push("/concept")
    }

    render() {
        debugger;
        return (
            <React.Fragment>
                <CssBaseline/>
                <h1 class='bigblue'> Menu principal</h1>
                <MenuButtons onClick={this.onUnderstoodClick}></MenuButtons>
            </React.Fragment>
        )
    }
}

function mapStateToProps(store) {
    return ({
        menu: store
    })
}

export default connect(mapStateToProps)(MenuComponent)
