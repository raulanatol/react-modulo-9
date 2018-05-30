import * as React from 'react';
import { CSSProperties } from 'react';

export interface NumberPickerProps {
  value?: number;
  min?: number;
  max?: number;
}

export interface NumberPickerState {
  value?: number;
}

const numberPickerStyle: CSSProperties = {
  width: '150px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  border: '1px solid #EDEEF4',
  boxShadow: '0 2px 1px 0 rgba(0, 0, 0, 0.03)',
  color: '#385871',
  borderRadius: '5px'
};

const numberPickerLabel: CSSProperties = {
  width: '100px',
  height: '32px',
  textAlign: 'center',
  padding: 0,
  outline: 'none',
  fontFamily: 'OpenSans-Bold, sans-serif',
  color: '#385871',
  borderRadius: '5px',
  lineHeight: '30px'
};

const numberPickerButtons: CSSProperties = {
  backgroundColor: '#4CAF50',
  border: 'none',
  color: 'white',
  width: '30px',
  height: '30px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  borderRadius: '50%',
  fontSize: '25px',
  paddingBottom: '5px',
  lineHeight: '25px',
  cursor: 'pointer'
};


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
    return <div style={numberPickerStyle}>
      <button style={numberPickerButtons} onClick={this.increase}>+</button>
      <p style={numberPickerLabel}>{this.state.value}</p>
      <button style={numberPickerButtons} onClick={this.decrease}>-</button>
    </div>;
  }
}
