document.addEventListener('DOMContentLoaded', () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Get the last modified date of the document
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModifiedDate}`;
});
