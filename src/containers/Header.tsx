import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { CounterStore } from '../stores/CounterStore';
import { ModalStore } from '../stores/ModalStore';
import { UserStore } from '../stores/UserStore';

export interface HeaderProps {
  counterStore?: CounterStore;
  modalStore?: ModalStore;
  userStore?: UserStore;
}

@inject('counterStore', 'modalStore', 'userStore')
@observer
export default class Header extends React.Component<HeaderProps, {}> {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  increment() {
    this.props.counterStore.increment(2);
  }

  decrement() {
    this.props.counterStore.decrement(2);
  }

  toggleModal() {
    this.props.modalStore.toggleModal();
  }

  render() {
    return <ul>
      <li>Number of movies: {this.props.counterStore.counter}</li>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/movies">Movies</Link></li>
      <li><Link to="/newMovie">New Movie</Link></li>
      {this.props.userStore.user && this.props.userStore.user.admin && <li><Link to="/admin">Admin</Link></li>}
      <li>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.toggleModal}>MODAL</button>
      </li>
    </ul>;
  }
}
