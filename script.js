// script.js

// Get modal elements
const modal = document.getElementById("tourModal");
const bookTourButton = document.getElementById("bookTourButton");
const closeModal = document.getElementById("closeModal");
const tourForm = document.getElementById("tourForm");
const message = document.getElementById("message");

// Show modal on button click
bookTourButton.onclick = function() {
    modal.style.display = "block";
};

// Close modal when the 'x' is clicked
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Form submission logic
tourForm.onsubmit = function(e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;

    if (name && email && phone && location) {
        message.textContent = "Thank you for booking a tour, " + name + "!";
        message.style.color = "green";
        modal.style.display = "none"; // Close the modal
    } else {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
    }
};

// Hover effects for dropdown menus
const locations = document.getElementById("locations");
const cityOptions = document.getElementById("city-options");
locations.onmouseover = function() {
    cityOptions.style.display = "block"; // Show city options on hover
};
locations.onmouseout = function() {
    cityOptions.style.display = "none"; // Hide city options when not hovering
};

const services = document.getElementById("services");
const serviceOptions = document.getElementById("service-options");
services.onmouseover = function() {
    serviceOptions.style.display = "block"; // Show service options on hover
};
services.onmouseout = function() {
    serviceOptions.style.display = "none"; // Hide service options when not hovering
};
