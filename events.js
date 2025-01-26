 // JavaScript for toggling dropdown visibility
 const filterButton = document.getElementById('filterButton');
 const filterDropdown = document.getElementById('filterDropdown');

 filterButton.addEventListener('click', () => {
     // Toggle the display of the dropdown
     if (filterDropdown.style.display === 'none' || filterDropdown.style.display === '') {
         filterDropdown.style.display = 'block';
     } else {
         filterDropdown.style.display = 'none';
     }
 });

 // JavaScript for filtering cards
 const cards = document.querySelectorAll('.card');
 filterDropdown.addEventListener('change', function () {
     const selectedTag = this.value;

     cards.forEach(card => {
         const cardTag = card.querySelector('.card-tag').textContent.trim().toUpperCase();
         if (selectedTag === 'all' || cardTag === selectedTag) {
             card.style.display = 'block'; // Show card
         } else {
             card.style.display = 'none'; // Hide card
         }
     });
 });


 // Get modal elements
const modal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");
const registerButtons = document.querySelectorAll(".card-button");

// Event listener for "REGISTER" buttons
registerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const eventName = button.dataset.event; // Get event name from data attribute
        modalTitle.textContent = eventName;
        modalDescription.textContent = `You are about to register for ${eventName}. Click 'Confirm Registration' to proceed.`;
        modal.style.display = "block"; // Show modal
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const addEventButton = document.getElementById("addEventButton");
    const popup = document.getElementById("eventFormPopup");
    const closePopupButton = document.getElementById("closePopupButton");
    const addEventForm = document.getElementById("addEventForm");
    const cardContainer = document.querySelector(".all");

    // Show popup
    addEventButton.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    // Close popup
    closePopupButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Add event card dynamically
    addEventForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const tag = document.getElementById("eventTag").value;
        const title = document.getElementById("eventTitle").value;
        const description = document.getElementById("eventDescription").value;
        const imageUrl = document.getElementById("eventImage").value;

        const cardHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="${imageUrl}" alt="${tag}">
                </div>
                <div class="card-content">
                    <p class="card-tag">${tag}</p>
                    <h2 class="card-title">${title}</h2>
                    <p class="card-description">${description}</p>
                </div>
                <div class="card-footer">
                    <button class="card-button">REGISTER</button>
                    <button class="delete-card-btn">DELETE</button>
                </div>
            </div>
        `;

        cardContainer.insertAdjacentHTML("beforeend", cardHTML);

        // Close popup and reset form
        popup.style.display = "none";
        addEventForm.reset();

        // Attach event listener to delete button (for the newly added card)
        attachDeleteEventListeners();
    });

    // Attach delete functionality to delete buttons
    function attachDeleteEventListeners() {
        const deleteButtons = document.querySelectorAll(".delete-card-btn");
        deleteButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const card = button.closest(".card");
                card.remove(); // Remove the card
            });
        });
    }

    // Initialize delete functionality for existing cards
    attachDeleteEventListeners();
});



document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const description = card.querySelector(".card-description").textContent.toLowerCase();
            const tag = card.querySelector(".card-tag").textContent.toLowerCase();

            if (title.includes(query) || description.includes(query) || tag.includes(query)) {
                card.style.display = "block"; // Show the card
            } else {
                card.style.display = "none"; // Hide the card
            }
        });
    });
});


document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        item.classList.toggle("active");
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

const ranks = document.querySelectorAll('.rank');

ranks.forEach(rank => {
    rank.addEventListener('mouseenter', () => {
        rank.style.backgroundColor = '#d3d3d3';
    });

    rank.addEventListener('mouseleave', () => {
        rank.style.backgroundColor = '';
    });
});

const boxes = document.querySelectorAll('.event');

boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.1)';
    box.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'scale(1)';
    box.style.boxShadow = 'none';
  });
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    // Toggle between 0 and 250px width on click
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';  // Close the sidebar
    } else {
        sidebar.style.width = '250px';  // Open the sidebar
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const userIcon = document.querySelector(".user-icon");

    // Function to check if the user is logged in using localStorage
    function isLoggedIn() {
        return localStorage.getItem("userLoggedIn") === "true";
    }

    // Handle user icon click
    userIcon.addEventListener("click", function () {
        if (isLoggedIn()) {
            // Show logout confirmation popup
            showLogoutPopup();
        } else {
            // Redirect to login page if not logged in
            window.location.href = "login.html";
        }
    });

    // Function to show logout popup
    function showLogoutPopup() {
        const popup = document.createElement("div");
        popup.innerHTML = `
            <div class="popup-overlay"></div>
            <div class="popup-box">
                <p>Are you sure you want to log out?</p>
                <button id="confirmLogout">Yes, Log Out</button>
                <button id="cancelLogout">Cancel</button>
            </div>
        `;
        document.body.appendChild(popup);

        // Add event listeners for popup buttons
        document.getElementById("confirmLogout").addEventListener("click", function () {
            localStorage.removeItem("userLoggedIn");  // Remove login status
            localStorage.removeItem("username");      // Remove stored user info
            alert("You have been logged out.");
            window.location.href = "index.html";      // Redirect to homepage
        });

        document.getElementById("cancelLogout").addEventListener("click", function () {
            document.body.removeChild(popup);  // Close the popup
        });
    }
});

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