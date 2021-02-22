import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Gist from 'react-gist';
const useStyles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,

    },
    cardRoot: {
        margin: 15,
        textAlign: 'center'
    },
    gridList: {
        width: '100%'
    },
    images: {
        width: '100%'
    },
    titleDiv: {
        margin: 5
    },
    margin15: {
        margin: 15
    },
    steps: {
        textAlign: 'left'
    }
});
class Code extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props;
        const story = this.props.story.story;
        return (
            <div>

                <Grid item  >
                    <Card className={classes.cardRoot} >
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" color="primary">
                                    {story.title}
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="div" >
                                    <div><b className="gradientText">Given </b></div>{story.given}
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="div">
                                    <div><b className="gradientText">To Find </b></div>{story.tofind}
                                </Typography>
                                <Divider></Divider>
                                <Typography gutterBottom variant="body2" component="div" >
                                    {story.approaches.map((approach, index_) => (
                                        <div className={classes.margin15} key={index_}>

                                            <div className={classes.titleDiv}><b className="gradientText">Intuition {index_ + 1}</b></div>
                                            <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                                {approach.intuition}
                                            </Typography>

                                            {approach.steps.map((step, index) => (
                                                <Typography gutterBottom variant="subtitle2" component="p" className={classes.steps} key={index}>
                                                    <b>Step {index + 1}: </b>{step}
                                                </Typography>

                                            ))}
                                            <Typography variant="body2" component="div" color="primary">
                                                Analysis
                                            </Typography>
                                            {approach.willwork.map((will_, index__) => (
                                                <Typography gutterBottom variant="subtitle2" component="p" color="textSecondary" key={index__}>
                                                    {will_}
                                                </Typography>


                                            ))}
                                            {approach.code ?
                                                <div>
                                                    <Typography variant="body2" component="div" color="primary">
                                                        Code
                                        </Typography>
                                                    <Grid container>
                                                        <Grid item xs={12} sm={12} lg={12} className="gistClass">
                                                            <Gist id={approach.code.id} file={approach.code.filename} />
                                                        </Grid>

                                                    </Grid>
                                                </div> : <div></div>}
                                            <Divider></Divider>
                                        </div>
                                    ))}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </div >
        );
    }
}

export default withStyles(useStyles)(Code);