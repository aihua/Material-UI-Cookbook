import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from '@material-ui/core/Fade';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const ScrolledAppBar = withStyles(styles)(
  class extends Component {
    state = {
      scrolling: false,
      scrollTop: 0
    };

    onScroll = e => {
      this.setState(state => ({
        scrollTop: e.target.documentElement.scrollTop,
        scrolling:
          e.target.documentElement.scrollTop > state.scrollTop
      }));
    };

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }

    render() {
      const { classes } = this.props;

      return (
        <Fade in={!this.state.scrolling}>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                My Title
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Fade>
      );
    }
  }
);

const AppBarWithButtons = ({ classes, title, buttonText }) => (
  <div className={classes.root} onScroll={() => console.log('bro')}>
    <ScrolledAppBar />
    <ul>
      {new Array(500).fill(null).map((v, i) => <li key={i}>{i}</li>)}
    </ul>
  </div>
);

export default withStyles(styles)(AppBarWithButtons);
