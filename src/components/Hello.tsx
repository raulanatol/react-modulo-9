import * as React from 'react';

export interface HelloProps {
  name: string;
}

export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
