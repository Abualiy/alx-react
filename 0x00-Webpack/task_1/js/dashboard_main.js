import $ from 'jquery';
import _ from 'lodash';

// Function to update the click count
let clickCount = 0;
const updateCounter = _.debounce(() => {
  clickCount += 1;
  $('#count').text(`${clickCount} clicks on the button`);
}, 300); // Debounce time in milliseconds

// Event listener on the button
$('#btn-click').on('click', () => {
  updateCounter();
});

