import * as React from 'react';

export interface NumberPickerProps {
  value?: number;
  min?: number;
  max?: number;
}

export interface NumberPickerState {
  value?: number;
}

export default class NumberPicker extends React.Component<NumberPickerProps, NumberPickerState> {

  constructor(props: NumberPickerProps) {
    super(props);
    this.state = {
      value: props.value || 0
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let newValue = this.state.value + 1;
    if (this.props.max) {
      newValue = Math.min(newValue, this.props.max);
    }
    this.setState({ value: newValue });
  }

  decrease() {
    let newValue = this.state.value - 1;
    if (this.props.min) {
      newValue = Math.max(this.props.min, newValue);
    }
    this.setState({ value: newValue });
  }


  render() {
    return <div>
      <button onClick={this.increase}>+</button>
      <p>{this.state.value}</p>
      <button onClick={this.decrease}>-</button>
    </div>;
  }
}
