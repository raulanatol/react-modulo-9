import * as React from 'react';

export default class Modal extends React.Component {
  render() {
    return <div>
      <h1>Hola modal</h1>
      <form>

        <label>LOGIN:</label><input/>
        <label>PASSWORD:</label><input/>
      </form>
    </div>;
  }
}
