import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {HomePage} from "./page/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom'
import SignAndSignUp from "./page/sign-and-sign-up/sign-and-sign-up";
import ParticlesBg from "particles-bg";


const App = () => {

  return (
    <div className="App">
      <Header/>
        <ParticlesBg type="cobweb" bg={true} style={{width: '100%', height: '100%'}}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/SignUp" component={SignAndSignUp} />
      </Switch>
    </div>
  );
}


export default App;
