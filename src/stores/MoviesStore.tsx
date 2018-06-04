import { action, observable } from 'mobx';
import Movie from '../model/Movie';

export class MoviesStore {
  @observable movies: Movie[];

  @action loadAll() {
    fetch('http://127.0.0.1:3000/movies')
      .then(response => response.json())
      .then(movies => this.movies = movies)
      .catch(err => console.error('Error', err));
  }
}
