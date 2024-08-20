import $ from 'jquery';
import _ from 'lodash';

// Add the elements
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Update the counter function
function updateCounter() {
    let count = $('#count').data('count') || 0;
    count++;
    $('#count').data('count', count);
    $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the button click event
$('button').on('click', _.debounce(updateCounter, 500));
