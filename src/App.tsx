import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import NewMovie from './pages/NewMovie';

export default class App extends React.Component {
  render() {
    return <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/newMovie" component={NewMovie}/>
      </div>
    </Router>;
  }
}
