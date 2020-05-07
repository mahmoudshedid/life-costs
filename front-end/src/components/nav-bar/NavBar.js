import React from 'react'
import { makeStyles, styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Dashboard from '../dashboard/dashboard';
import Costs from '../costs/costs';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(4),
        },
    },
    appTitle: {
        fontSize: 30,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    }
}));

const MenuButton = styled(Button)({
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 40,
    padding: '0 20px',
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar className={classes.root}>
                        <Typography color="inherit" className={classes.appTitle}>
                            <Link to="/dashboard" className={classes.link}>Life Costs</Link>
                        </Typography>
                        <Typography color="inherit">
                            <Link to="/dashboard" className={classes.link}><MenuButton>Dashboard</MenuButton></Link>
                            <Link to={"/costs"} className={classes.link}><MenuButton>Costs</MenuButton></Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className="container">
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/costs" component={Costs} >
                    </Route>
                    <Redirect from="/**" to="/dashboard" />
                </Switch>
            </div>
        </Router>
    )
}
export default NavBar;