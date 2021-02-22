import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from '@material-ui/core';
//images
import leena from '../images/leena.jpg'
import leena_mobile from '../images/leena_mobile.jpg'
//sub-components
import Skills from './portfolio/skills';
import ContactInfo from './portfolio/contactinfo';
import About from './portfolio/about';
import Projects from './portfolio/projects';
//Material components
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import MediaQuery from 'react-responsive';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsBar: {
    color: '#f50057',
    backgroundColor: '#fff',
    boxShadow: 'none',
  },
  container: {
    margin: 0,
    padding: 0
  },
  tabRoot: {
    minWidth: 10,
    fontSize: '0.7rem',
    fontWeight: 500
  },
  imgLeena: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: 15
  },
  gridText: {
    textAlign: "center",
    margin: 10
  }
});


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      project: null
    }

  }
  componentDidMount() {
    //Rest call to fetch projects
    axios.get('https://us-central1-navshikha-48fb0.cloudfunctions.net/api/getProjects').then(response => {
      this.setState({
        project: response.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { classes } = this.props;

    //handle the change of tabs
    const handleChange = (event, newValue) => {
      this.setState({
        value: newValue
      })
    };

    //display projects list or progress bar
    let displayProjects = this.state.project ? (<div><Projects projects={this.state.project}></Projects></div>) : <Paper className={classes.paper}><CircularProgress /></Paper>;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.tabsBar}>
          {/* Tabs */}
          <Tabs
            value={this.state.value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="About" classes={{ root: classes.tabRoot }} />
            <Tab label="Skills" classes={{ root: classes.tabRoot }} />
            <Tab label="Projects" classes={{ root: classes.tabRoot }} />
            <Tab label="Contact Information" classes={{ root: classes.tabRoot }} />
            <Tab label="About Me" classes={{ root: classes.tabRoot }} />
          </Tabs>
        </AppBar>

        <Container className={classes.container}>
          {this.state.value === 0 &&
            <div>
              {/* display on mobile */}
              <MediaQuery maxDeviceWidth={424} >
                <Grid container alignItems="center" alignContent="center" justify="center">
                  <Grid item>
                    <Avatar alt="leena Patil" src={leena_mobile} className={classes.large} />
                  </Grid>
                  <Grid item xs={12} className={classes.gridText}>
                    <Typography color="textSecondary" variant="subtitle2">Hey there!</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridText}>
                    <Typography color="primary" variant="body2">My name is Leena Manohar Patil</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridText}>
                    <Typography color="secondary" variant="body2">Computer Science Graduate Student</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridText}>
                    <Typography color="textSecondary" variant="body2">Skilled Software Engineer</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.gridText}>
                    <Typography color="textSecondary" variant="body2">Artificial Intelligence Enthusiast</Typography>
                  </Grid>
                </Grid>
              </MediaQuery>

              {/* display on higher resolution devices */}
              <MediaQuery minDeviceWidth={424} >
                <img className={classes.imgLeena} alt="complex" src={leena} />
              </MediaQuery>
            </div>
          }

          {/* switch between sub-components */}
          {this.state.value === 1 && <Skills />}
          {this.state.value === 2 && displayProjects}
          {this.state.value === 3 && <ContactInfo />}
          {this.state.value === 4 && <About />}
        </Container>

      </div>
    );
  }
}

export default withStyles(useStyles)(Portfolio);