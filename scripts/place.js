document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get the last modified date of the document
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


const temperature = 10; // in degrees Celsius
const windSpeed = 4.8; // in kilometers per hour

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Check if the conditions are met to call the calculateWindChill function
if (temperature <= 10 && windSpeed > 4.8) {
    // Calculate the wind chill
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the wind chill factor in the Weather section of the page
    document.addEventListener('DOMContentLoaded', () => {
        const windChillElement = document.getElementById('windChill');
        windChillElement.textContent = `Wind Chill: ${windChill}°C`;
    });
}