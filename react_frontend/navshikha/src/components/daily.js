import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    connector: {
        backgroundColor: '#125a6b'
    },
    date: {
        color: 'rgb(21, 149, 187)',
        background: 'none',
        padding: 0,
    },
    seperator: {
        flex: 'none',
    },
    content: {
        color: '#bdbdbd'
    },
    root: {
        backgroundColor: '#0000006b'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: 'none'
    }
});

class DailyLogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dailylogs: null
        }
    }

    componentDidMount() {
        axios.get('https://us-central1-navshikha-48fb0.cloudfunctions.net/api/getDailyLogs').then(response => {
            this.setState({
                dailylogs: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { classes } = this.props;
        const logs = this.state.dailylogs ? (<Timeline>
            {this.state.dailylogs.map(dailylog =>
                <TimelineItem key={dailylog.date}>
                    <TimelineSeparator className={classes.seperator} >
                        <TimelineDot className={classes.date}>{dailylog.date}</TimelineDot>
                        <TimelineConnector className={classes.connector} />
                    </TimelineSeparator >
                    <TimelineContent className={classes.content}>
                        <List>
                            {dailylog.desc.map(data =>
                                <ListItem key={data}>{data}</ListItem>
                            )}
                        </List>
                    </TimelineContent>
                </TimelineItem>
            )}

        </Timeline>) : <Paper className={classes.paper}><CircularProgress color="secondary" /></Paper>;
        return (
            <div className={classes.root}>
                {logs}
            </div>
        );
    }
}

export default withStyles(useStyles)(DailyLogs);