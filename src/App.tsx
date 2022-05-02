import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesApp from './RouteApp'

const App = () => {

  return (
    <div className="App">
      <RoutesApp/>
    </div>
  );
}


export default React.memo(App);