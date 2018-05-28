import * as React from 'react';
import { shallow } from 'enzyme';
import NumberPicker from '../../src/components/NumberPicker';

describe('NumberPicker', () => {
  describe('render', () => {
    test('Debería renderizar el numberPicker con valor 0', () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('p').text()).toBe('0');
    });

    test('Al pulsar en el + debería incrementar el valor a 1', () => {
      const wrapper = shallow(<NumberPicker/>);
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find('p').text()).toBe('1');
    });

    test('Al pulsar en el - debería decrementar el valor a -1', () => {
      const wrapper = shallow(<NumberPicker/>);
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find('p').text()).toBe('1');
    });

    test('Debería renderizar el numberPicker con valor 4', () => {
      const wrapper = shallow(<NumberPicker value={4}/>);
      expect(wrapper.find('p').text()).toBe('4');
    });
  });
});
