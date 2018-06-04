import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { MoviesStore } from '../stores/MoviesStore';

export interface MoviesProps {
  moviesStore?: MoviesStore;
}

@inject('moviesStore')
@observer
export default class Movies extends React.Component<MoviesProps, {}> {
  componentDidMount() {
    this.props.moviesStore.loadAll();
  }

  render() {
    const { movies } = this.props.moviesStore;
    return <div>
      <p>Movies</p>
      <ul>
        {movies && movies.map(movie => <li key={movie._id}><span>{movie.name}</span></li>)}
      </ul>
    </div>;
  }
}
