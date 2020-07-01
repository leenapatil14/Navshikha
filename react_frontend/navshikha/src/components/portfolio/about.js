import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import image1 from '../../images/thane.jpg';
import image2 from '../../images/nyc.jpg';
import image3 from '../../images/sketch.jpg';
import image4 from '../../images/paint.jpg';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListSubheader from '@material-ui/core/ListSubheader';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = theme => ({
    
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
      media: {
        width:'100%',
        height: 300,
        padding:20
      },
  
});
class About extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {classes} = this.props;
        return (
            <Timeline align="left">
                <TimelineItem>
                  
                  <TimelineSeparator>
                    <TimelineDot  variant="outlined" color="secondary">
                    
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image1}
                        title="Thane"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="textSecondary" >
                        Born and brought up in Thane a city near Mumbai, India, I completed my education with a bachelor's degree and later worked at Tata Consultancy Services as a Software Engineer. <br></br>I have work expertise in Hybrid Mobile Application development using  HTML, CSS, AngularJS, and Ionic framework. I have intermediate-level knowledge of developing web apps in C# with MVC framework.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  
                  <TimelineSeparator>
                    <TimelineDot  variant="outlined" color="secondary">
                    
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image2}
                        title="NYC"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="textSecondary" >
                        Having spent all my life in the same city, coming to pursue my master's education miles away, here in Buffalo, New York, is a major transition in my life. <br/>I have developed strong programming foundations in Python and a profound interest in Artificial intelligence. <br/>Recently I started learning ReactJS and learned integrating it with the Flask framework for developing Full-Stack Web Applications including Data Analytics and visualization. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                    </Card>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  
                  <TimelineSeparator>
                    <TimelineDot  variant="outlined" color="secondary">
                    
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image3}
                        title="sketch"
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="textSecondary" >
                        Apart from computer science, I have a keen interest in art and music. I love sketching, painting in my free time.<br/> My hobbies also include bird watching and photography.
I love traveling and always look forward to gaining some memorable experiences. 

                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                    </Card>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  
                  <TimelineSeparator>
                    <TimelineDot  variant="outlined" color="secondary">
                    
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                  <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image4}
                        title="painting"
                        />
                        <CardContent>
               
      
      <List >
      <ListSubheader color="primary">
      Values I live by
        </ListSubheader>
        <ListItem >
          <ListItemText secondary="Never stop learning. " />
        </ListItem>
        <ListItem >
          <ListItemText secondary="I adore creativity and constantly try to have a creative mindset while solving any problems I face in my life. It helps me look at them with a novel perspective, which in turn, helps me to find better solutions." />
        </ListItem>
        <ListItem >
          <ListItemText secondary="Be self-reliant." />
        </ListItem>
        <ListItem >
          <ListItemText secondary="
Self-respect and honesty are always more crucial than money. " />
        </ListItem>
      </List>
                       
                        <Divider />
                        

                        <List >
                        <ListSubheader color="primary">
                        What I want from my life
        </ListSubheader>
        <ListItem >
          <ListItemText secondary="Live simple and do what I find contentment in. " />
        </ListItem>
        <ListItem >
          <ListItemText secondary="Work hard to see my family proud of my achievements " />
        </ListItem>
        <ListItem >
          <ListItemText secondary="Travel the world with my favorite people " />
        </ListItem>
        
      </List>
                        
                        </CardContent>
                    </CardActionArea>
                    
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
        );
    }
}

About.propTypes = {

};

export default withStyles(useStyles)(About);