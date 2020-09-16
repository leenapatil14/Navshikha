import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Code from './code';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        //padding:15

    },
    cardRoot: {
        margin: 15,
        textAlign: 'center',

    },
    backArrow: {
        margin: 0,
        padding: '2%',
        background: 'linear-gradient(90deg, rgba(3,1,29,1) 0%, rgba(28,1,64,1) 39%, rgba(1,39,46,1) 70%, rgba(61,34,1,1) 100%)',
        cursor: 'pointer',
        width: '100%'
    },
    codeDiv: {
        width: '100%'
    },
    note: {
        padding: 15,
        textAlign: 'center'
    },
    date:{
        color:'#D5268F',
        textAlign:'right'
    }
})
class Algorithms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            current: null,
            showStory: false,
            stories: null
        }
        this.handleChange = this.handleChange.bind(this)

    }
    componentDidMount() {
        axios.get('https://us-central1-navshikha-48fb0.cloudfunctions.net/api/getCodes').then(response => {
            console.log(response.data);

            this.setState({
                stories: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
    handleChange(story) {
        //console.log(story)
        this.setState({
            current: story,
            showStory: true
        })
    };


    render() {
        const { classes } = this.props;
        const goBack = (event) => {
            this.setState({
                showStory: false
            })
        };


        let displayProjects = this.state.stories ? (
            this.state.stories.map(story => (
                <Grid item xs={12} sm={6} lg={4} md={4} key={story.title} >
                    <Card className={classes.cardRoot}
                        onClick={() => this.handleChange({ story })}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="subtitle2" component="div" color="textSecondary">
                                    {story.title}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Typography gutterBottom variant="subtitle2" color="textSecondary">
                                {new Date(story.date._seconds*1000).toLocaleDateString()}
                            </Typography>
                            
                        </CardActions> */}

                    </Card>
                </Grid>
            ))
        ) : <CircularProgress />;

        return (
            <div className={classes.root}>
                {!this.state.showStory && <Typography gutterBottom className={classes.note} variant="caption" color="textSecondary" component="div">
                    Python3 solutions to a few leetcode problems which I found interesting and worth sharing. <br />Each problem is solved with multiple approaches, a few with my own logic and also the most optimal approach as given in leetcode solutions. <br />Also, I have provided a few github code snippets for certain solution solved completely by me.
                </Typography>}
                <Grid container alignContent="center" alignItems="center" justify="center">
                    {!this.state.showStory && displayProjects}
                    {this.state.showStory && <div className={classes.codeDiv}>
                        <div className={classes.backArrow} onClick={goBack}>
                            <ArrowBackIosIcon color="secondary" />
                        </div>
                        <Code story={this.state.current}></Code></div>}
                </Grid>
            </div>
        );
    }
}



export default withStyles(useStyles)(Algorithms);