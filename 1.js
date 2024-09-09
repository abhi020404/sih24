// No functionality provided in the image, but this JS file can handle button clicks or future interactivity.
document.querySelector('.get-started-btn').addEventListener('click', function() {
    alert('Get Started clicked!');
});


//login js

// Basic functionality to handle the authentication button click event
document.querySelector('.auth-button').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Authentication button clicked!');
});


// search js 
// Basic functionality to clear recent searches
document.querySelector('.clear-all-btn').addEventListener('click', function() {
    document.querySelector('.search-list').innerHTML = '<p>No recent searches</p>';
});

// search result js

// Add any JavaScript functionality here if needed
console.log("Responsive web page loaded");


//profile section

// Add any JavaScript functionality here if needed
console.log("Responsive web page loaded");


