import React from 'react';
import SignUp from "../../components/Sign-up/Sign-up.components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import "./SignUpAndSignIn.scss"

const SignAndSignUp = (props) => {
    return(
        <Container size="sm">
            <Grid className="SignUp">
                <SignUp />
            </Grid>

        </Container>
    )
};

export default SignAndSignUp;