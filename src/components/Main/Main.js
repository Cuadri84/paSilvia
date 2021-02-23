import React, { Component } from "react";
import {Route, Switch } from 'react-router-dom';

import Home from "../../pages/Home/Home";
import Form from "../../pages/Form/Form";
import Listnews from "../../pages/Listnews";

export class Main extends Component {
  render() {
    return <main>
              <Switch>
                    <Route exact path="/" component={Home}></Route>

                    <Route exact path="/form" component={Form}></Route>
                    
                    <Route path="/list" component={Listnews}></Route>
                    
            </Switch>
    </main>;
  }
}

export default Main;
