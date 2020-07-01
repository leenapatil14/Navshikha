import React, { Component, PropTypes } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    cardRoot:{
        margin:15,
    },
    gridList: {
        width: '100%'
      },
      images:{
          width:'100%'
      }
      
    
  });
class Story extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        const {classes} = this.props;
        const story=this.props.story.story;
        //console.log(story);
        return (
            <div>

            <Grid item  >
            <Card className={classes.cardRoot} >
            <CardActionArea>
            
            <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
            {story.name}
            </Typography>
            <Typography  color="textSecondary" component="div" >
            {story.paragraphs.intro}
            {story.paragraphs.details.map(data=>
            <div key={data.desc}>
                <br/>
                {data.image?
                <Grid container justify="center"
                alignItems="center">
                    <Grid item xs={12} md={6}>
                    {data.desc}
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <img className={classes.images} src={data.image}/>
                    </Grid>
                </Grid>
                :
                <Grid container justify="center"
                alignItems="center">
                    <Grid item xs={12} md={12}>
                    {data.desc}
                    </Grid>
                    
                </Grid>
                }
                
                </div>)}
            </Typography>
            <GridList  className={classes.gridList} cols={3}>
        {story.images.map((tile) => (
          <GridListTile key={tile} >
            <img src={tile}  />
          </GridListTile>
        ))}
      </GridList>
            </CardContent>
            </CardActionArea>

            </Card>
            </Grid>
            </div>
        );
    }
}

Story.propTypes = {

};

export default withStyles(useStyles)(Story);