import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; // Import the Footer component

describe('Footer component', () => {
    it('renders without crashing', () => {
      // Shallow render the Footer component
      const wrapper = shallow(<Footer />);
      
      // Assertions
      expect(wrapper.exists()).toBe(true);
    });
  
    it('renders the text "Copyright"', () => {
      // Shallow render the Footer component
      const wrapper = shallow(<Footer />);
      
      // Find the text content within the component
      const textContent = wrapper.text();
      
      // Assertions
      expect(textContent).toContain('Copyright');
    });
  });
  