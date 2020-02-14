import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./routes/Signup";
import Private from "./routes/private";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Private} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
