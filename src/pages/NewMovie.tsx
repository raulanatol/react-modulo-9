import * as React from 'react';

export interface NewMovieState {
  name: string;
  description: string;
  genre: string;
}

export default class NewMovie extends React.Component<{}, NewMovieState> {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      genre: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Creando nueva película: ${JSON.stringify(this.state)}`);
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
        </label>
        <label>
          Genre:
          <select name="genre" value={this.state.genre} onChange={this.handleChange}>
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="adventure">Adventure</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>;
  }
}
