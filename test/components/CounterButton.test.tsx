import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from "../../src/components/CounterButton";

describe('CounterButton', () => {
  describe('render', () => {
    test('Debería renderizar un botón con counter 0', () => {
      const wrapper = shallow(<CounterButton/>);
      expect(wrapper.find('button').text()).toBe('0');
    });

    test('Debería renderizar un 1 cuando se haya hecho un click en el botón', () => {
      const wrapper = shallow(<CounterButton/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toBe('1');
    });
  });
});
