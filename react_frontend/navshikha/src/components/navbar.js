import React, { Component, PropTypes } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/ToolBar';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import FlightTwoToneIcon from '@material-ui/icons/FlightTwoTone';
import BookTwoToneIcon from '@material-ui/icons/BookTwoTone';
import CodeTwoToneIcon from '@material-ui/icons/CodeTwoTone';

const drawerWidth = 280;
const useStyles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: 'linear-gradient(90deg, rgba(3,1,29,1) 0%, rgba(28,1,64,1) 39%, rgba(1,39,46,1) 70%, rgba(61,34,1,1) 100%)'
    
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 50,
      padding:5,
      color:'rgb(156,0,98)'
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      background: 'linear-gradient(90deg, rgba(3,1,29,1) 0%, rgba(28,1,64,1) 39%, rgba(1,39,46,1) 70%, rgba(61,34,1,1) 100%)',
      
    
    },
    drawerOpen: {
      width: drawerWidth,
      background: '#0b0528',
      
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: '#070424',
      
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    listItemText:{
        fontSize:'1em',
    color: '#c56500'
    },
    paddingZero:{
        padding:0,
    },
    toolbarText:{
        color:'#9c0062',
    }
  });
  
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    
    state={
        open:false,
        setOpen:false
    };

    render() {
       


const {classes} = this.props;
       
        const handleDrawerOpen = () => {
            this.setState({open:true});
        };
    
        const handleDrawerClose = () => {
            this.setState({open:false});
        };
        return (

            <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar>
                <IconButton
                  
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: this.state.open,
                  })}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap className="gradientText">
                नवSHIKHA
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open,
                }),
              }}
            >
              <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon /> 
                </IconButton>
              </div>
              <Divider />
              <List>
                
                  {/* <ListItem button key="Home" component={Link} to="/">
                    <ListItemIcon className={classes.toolbarText}><HomeIcon /> </ListItemIcon>
                    <ListItemText classes={{primary:classes.listItemText}} primary="Home" />
                  </ListItem> */}
                  <ListItem button key="Portfolio" component={Link} to="/Navshikha/">
                    <ListItemIcon className={classes.toolbarText}><AccountCircleTwoToneIcon /> </ListItemIcon>
                    <ListItemText classes={{primary:classes.listItemText}} primary="Portfolio" />
                  </ListItem>
                  <ListItem button key="Leetcode" component={Link} to="/Navshikha/algorithms">
                    <ListItemIcon className={classes.toolbarText}><CodeTwoToneIcon /> </ListItemIcon>
                    <ListItemText classes={{primary:classes.listItemText}} primary="Leetcode Solutions" />
                  </ListItem>
                  <ListItem button key="Daily" component={Link} to="/Navshikha/logs">
                    <ListItemIcon className={classes.toolbarText}><BookTwoToneIcon /> </ListItemIcon>
                    <ListItemText classes={{primary:classes.listItemText}} primary="Logs" />
                  </ListItem>
                  <ListItem button key="Travel" component={Link} to="/Navshikha/travel">
                    <ListItemIcon className={classes.toolbarText}><FlightTwoToneIcon /> </ListItemIcon>
                    <ListItemText classes={{primary:classes.listItemText}} primary=" Stories" />
                  </ListItem>
                  
                  
                
              </List>

            </Drawer>
            </div>
            
        );
    }
}



export default withStyles(useStyles)(NavBar);