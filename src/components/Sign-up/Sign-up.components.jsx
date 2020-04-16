import React from 'react';
import Input from "@material-ui/core/Input";
import "./Sign-up.styles.scss"
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signup(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const SignUp = () => {
    let history = useHistory()
    return (
        <Grid justify="center">
            <for className="form" typeof="submit">
                <Input className="option" type="email" placeholder="email" required/>
                <Input className="option" type="text" placeholder="username" required/>
                <Input className="option" type="password" placeholder="password" required/>
                {
                    fakeAuth.isAuthenticated ? (
                        <p>
                            Logged In!{" "}
                        </p>
                    ) : (
                        <Button
                            onClick={() => {
                                fakeAuth.signup(() => history.push("/"));
                            }}
                            variant="contained"
                            type='submit'
                            color="primary"
                            className="custom-button"
                        >
                            Sign up
                        </Button>
                    )
                }
            </for>
        </Grid>
    );
}

export default SignUp;