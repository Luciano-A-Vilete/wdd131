const products = [
    { id: 'fc-1888', name: "flux capacitor", avgRating: 4.5 },
    { id: 'fc-2050', name: "power laces", avgRating: 4.7 },
    { id: 'fs-1987', name: "time circuits", avgRating: 3.5 },
    { id: 'ac-2000', name: "low voltage reactor", avgRating: 3.9 },
    { id: 'jj-1969', name: "warp equalizer", avgRating: 5.0 }
];

// Populate product name options
const productNameSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});


const currentYearInfo = new Date().getFullYear();
const lastModifiedInfo = document.lastModified;

const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

currentYear.innerHTML = currentYearInfo;
lastModified.innerHTML = `Last Modification: ${lastModifiedInfo}`;

  