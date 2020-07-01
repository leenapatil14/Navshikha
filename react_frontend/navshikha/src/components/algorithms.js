import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
const useStyles = theme => ({
    root:{
        backgroundColor: theme.palette.background.paper,
        color:theme.palette.text.secondary,
        padding:15

    },
})
class Algorithms extends Component {
    constructor(props) {
        super(props);

    }

  
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                Coming Soon...
            </div>
        );
    }
}



export default withStyles(useStyles)(Algorithms);