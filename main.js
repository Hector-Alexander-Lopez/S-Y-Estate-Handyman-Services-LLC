//  // Get a reference to the navigation bar element
//     const navbar = document.querySelector('.nav-bar');

//     // Get the initial position of the navigation bar
//     const navbarPosition = navbar.offsetTop;

//     // Function to update the position of the navigation bar
//     function updateNavbar() {
//         if (window.pageYOffset >= navbarPosition) {
//             // Add a fixed class to the navigation bar when it reaches the top
//             navbar.classList.add('fixed-navbar');
//         } else {
//             // Remove the fixed class when scrolling back up
//             navbar.classList.remove('fixed-navbar');
//         }
//     }

//     // Listen for the 'scroll' event and update the navbar position
//     window.addEventListener('scroll', updateNavbar);

//     // Function to hide the cover after a delay
//     function hideCover() {
//         var cover = document.getElementById('cover');
//         cover.style.opacity = '0'; // Fade out the cover
//         setTimeout(function () {
//             cover.style.display = 'none'; // Hide the cover
//         }, 5000); // Adjust the delay (1000ms = 1 second)
//     }

//     // Call the hideCover function after the page has loaded
//     window.addEventListener('DOMContentLoaded', function () {
//         hideCover();
//     });






// Function to hide the cover and slide it up
function hideCover() {
    var cover = document.getElementById('cover');
    cover.classList.add('slide-up'); // Add the slide-up class
}

// Call the hideCover function after the page has loaded
window.addEventListener('DOMContentLoaded', function () {
    setTimeout(hideCover, 3000); // Adjust the delay (3000ms = 3 seconds)
});

// Get a reference to the navigation bar element
const navbar = document.querySelector('.nav-bar');

// Get the initial position of the navigation bar
const navbarPosition = navbar.offsetTop;

// Function to update the position of the navigation bar
function updateNavbar() {
    if (window.pageYOffset >= navbarPosition) {
        // Add a fixed class to the navigation bar when it reaches the top
        navbar.classList.add('fixed-navbar');
    } else {
        // Remove the fixed class when scrolling back up
        navbar.classList.remove('fixed-navbar');
    }
}

// Listen for the 'scroll' event and update the navbar position
window.addEventListener('scroll', updateNavbar);

