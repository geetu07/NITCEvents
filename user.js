const searchBarContainer = document.querySelector("#searchBarContainer");

    // Function to handle the redirect to the events page
    function goToEventsPage() {
        window.location.href = "./events.html";
    }

    // Add click event listener to the search bar container
    searchBarContainer.addEventListener("click", goToEventsPage);


        const menuButton = document.getElementById("menuButton");
        const slidingMenu = document.getElementById("slidingMenu");
        const closeMenuButton = document.getElementById("closeMenuButton");
    
        // Open the sliding menu
        menuButton.addEventListener("click", function () {
            slidingMenu.style.right = "0"; // Slide the menu into view
        });
    
        // Close the sliding menu
        closeMenuButton.addEventListener("click", function () {
            slidingMenu.style.right = "-300px"; // Slide the menu out of view
        });
    
        // Close the sliding menu when clicking outside of it
        document.addEventListener("click", function (event) {
            if (
                !slidingMenu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                slidingMenu.style.right = "-300px"; // Slide the menu out of view
            }
        });
 

function toggleEdit() {
    const inputs = document.querySelectorAll('.value-input, .name-input, .email-input, .note-content');
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');

    inputs.forEach(input => {
        input.readOnly = false;
        input.disabled = false;
        input.style.cursor = 'text';
    });

    editBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
}

function saveData() {
    const inputs = document.querySelectorAll('.value-input, .name-input, .email-input, .note-content');
    const editBtn = document.getElementById('editBtn');
    const saveBtn = document.getElementById('saveBtn');

    inputs.forEach(input => {
        input.readOnly = true;
        input.disabled = true;
        input.style.cursor = 'not-allowed';
    });

    saveBtn.classList.add('hidden');
    editBtn.classList.remove('hidden');
}

