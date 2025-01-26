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