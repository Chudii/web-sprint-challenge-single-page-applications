import React from "react";
import { BrowserRouter, Route, Link  } from 'react-router-dom'
import Pizza from './components/Pizza';

const App = () => {

  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order Pizza</Link>
        <Route path="/pizza" component={Pizza} />
      </BrowserRouter>

    </div>
  );
};
export default App;
