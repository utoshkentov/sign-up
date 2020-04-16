import React from 'react';
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import './Header.scss';

export const Header = () => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar className='header'>
                    <Typography className="option_one">
                        <NavLink className='link' to='/'>Logo</NavLink>
                    </Typography>
                    <div className="option_two">
                        <NavLink className="link" to="/SignUp">
                            Sign Up
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}