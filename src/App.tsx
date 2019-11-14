import React from 'react';
import './App.css';
import {Container, CssBaseline, Grid, Link, makeStyles, Paper, Toolbar, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    mainFeaturedPost: {
        position: 'relative',
        // backgroundColor: theme.palette.common.white,
        // color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        // backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));



const App: React.FC = () => {
    const classes = useStyles();
  return (
      <React.Fragment>
          <CssBaseline/>
          <Container maxWidth="lg">
              <Toolbar className={classes.toolbar}>
                  <Typography
                      component="h2"
                      variant="h5"
                      color="inherit"
                      align="center"
                      noWrap
                      className={classes.toolbarTitle}
                  >
                      Dans La Rue
                  </Typography>
              </Toolbar>
              <main>
                  {/* Main featured post */}
                  <Paper className={classes.mainFeaturedPost}>
                      <Grid container>
                          <Grid item md={6}>
                              <div className={classes.mainFeaturedPostContent}>
                                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                      Shelters list
                                  </Typography>
                                  <Typography variant="h5" color="inherit" paragraph>
                                      Bunker: 3 beds available
                                  </Typography>
                              </div>
                              <div className={classes.mainFeaturedPostContent}>
                                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                      Status of the services
                                  </Typography>
                                  <Typography variant="h5" color="inherit" paragraph>
                                      La Roulotte: rollin tonight
                                  </Typography>
                                  <Link variant="subtitle1" href="#">
                                      Continue reading…
                                  </Link>
                              </div>
                          </Grid>
                      </Grid>
                  </Paper>
                  {/* End main featured post */}
              </main>
          </Container>
          {/* Footer */}
          <footer className={classes.footer}>
              <Container maxWidth="lg">
                  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                      Free and Open Source Software: https://github.com/dans-la-rue
                  </Typography>
              </Container>
          </footer>
          {/* End footer */}
      </React.Fragment>);
}

export default App;
