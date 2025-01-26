document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
    const signUpLink = document.querySelector(".signup");
    const signInLink = document.querySelector(".active");
    const signInBtn = document.querySelector(".sign-in-btn");

    // Dummy user data for sign-in validation
    let users = [
        { "email": "sreekutty@gmail.com", "password": "sreekutty123" },
        { "email": "sreelakshmikutty@gmail.com", "password": "imaginarybf123" },
        { "email": "sreelish123@gmail.com", "password": "swimming123"}
    ];

    // Handle Sign In
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = emailInput.value;
        const password = passwordInput.value;
        let found = false;

        for (let i = 0; i < users.length; i++) {
            if (email === users[i].email && password === users[i].password) {
                found = true;
                window.location.href = "./user.html"; // Redirect to user dashboard
                break;
            }
        }

        if (!found) {
            errorMessage.textContent = "Invalid email or password.";
        }
    });

    // Handle Sign Up (Switch UI and Add New Users)
    signUpLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.innerHTML = `
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Email" required>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" required>
            
            <p id="error-message" style="color: red; font-size: 14px;"></p>
            
            <button type="button" id="signUpBtn" class="sign-up-btn">Sign Up</button>
        `;

        signUpLink.classList.add("active");
        signInLink.classList.remove("active");

        document.getElementById("signUpBtn").addEventListener("click", function () {
            const newEmail = document.getElementById("email").value;
            const newPassword = document.getElementById("password").value;

            if (newEmail && newPassword) {
                users.push({ email: newEmail, password: newPassword });
                alert("Sign-up successful! You can now sign in.");
                
                // Switch back to sign-in view
                signInLink.click();
            } else {
                errorMessage.textContent = "Please enter a valid email and password.";
            }
        });
    });

    // Handle switching back to Sign In form
    signInLink.addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.innerHTML = `
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Email" required>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" required>
            
            <p id="error-message" style="color: red; font-size: 14px;"></p>
            
            <button type="submit" class="sign-in-btn">Sign In</button>
        `;

        signInLink.classList.add("active");
        signUpLink.classList.remove("active");

        // Reattach the submit event for login
        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            let found = false;

            for (let i = 0; i < users.length; i++) {
                if (email === users[i].email && password === users[i].password) {
                    found = true;
                    window.location.href = "./user.html";
                    break;
                }
            }

            if (!found) {
                errorMessage.textContent = "Invalid email or password.";
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