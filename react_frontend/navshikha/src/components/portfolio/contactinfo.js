import React, { Component, PropTypes } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
const useStyles = theme => ({

    skillsLabel: {
        textAlign: 'center',
        color: '#a50369',
        fontWeight: 600
    },
    containerTabs: {
        margin: 20
    },
    contactSection: {
        color: '#8E8E89',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 400,
        marginBottom: 21
    },

});

class ContactInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.containerTabs}>
                <Grid container direction="row"
                    justify="center"
                    alignItems="center" spacing={3} >
                    <Grid item xs={12} className={classes.skillsLabel}>
                        <Link href="https://www.linkedin.com/in/leenamanoharpatil/" >

                            <div><LinkedInIcon fontSize="large" /></div>
                            <div className={classes.contactSection}>Connect on LinkedIn!</div>

                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.skillsLabel}>
                        <Link href="https://github.com/leenapatil14" >

                            <div><GitHubIcon fontSize="large" /></div>
                            <div className={classes.contactSection}>Checkout my projects on Github</div>
                        </Link>
                    </Grid>
                    <Grid item xs={12} className={classes.skillsLabel}>
                        <Link href="mailto:leenapatil147@gmail.com?Subject=Blog%20Query" >

                            <div><MailIcon fontSize="large" /></div>
                            <div className={classes.contactSection}>Have  queries? Feel free to mail!</div>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(ContactInfo);