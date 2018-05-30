import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/movies">Movies</Link></li>
      <li><Link to="/newMovie">New Movie</Link></li>
    </ul>;
  }
}
