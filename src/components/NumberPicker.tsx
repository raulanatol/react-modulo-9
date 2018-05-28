import * as React from "react";

export interface NumberPickerProps {
  value?: number;
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
    const newValue = this.state.value + 1;
    this.setState({ value: newValue });
  }

  decrease() {
    const newValue = this.state.value - 1;
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
