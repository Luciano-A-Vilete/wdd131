// References to elements
const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

// Function to add a chapter
function addChapter() {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Set the text for the list item and delete button
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        // Optionally add classes to elements (optional)
        li.classList.add('list-item');
        deleteButton.classList.add('delete');

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the unordered list
        list.appendChild(li);

        // Add click event to the delete button to remove the list item
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });

        // Clear the input field
        input.value = '';
    } else {
        // If input is blank, do nothing and return focus to input field
        alert("Please enter a chapter name.");
    }

    // Set focus back to input field regardless of whether a list item was created or not
    input.focus();
}

// Add click event listener to 'Add Chapter' button
button.addEventListener('click', addChapter);
