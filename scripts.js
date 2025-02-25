Document.addEventListener("DOMContentLoaded", function () {
    // Check if the registration form exists
    const registrationForm = document.getElementById("registrationForm");
    If (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form data
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const studentId = document.getElementById("studentId").value;
            const yearOfStudy = document.getElementById("yearOfStudy").value;
            const phone = document.getElementById("phone").value;

            // Create a member object
            const member = {
                fullName,
                email,
                studentId,
                yearOfStudy,
                phone,
            };

            // Save to localStorage
            saveMember(member);

            // Clear the form
            registrationForm.reset();

            // Notify the user
            Alert("Registration successful!");
        });
    }

    // Check if the members table exists
    const membersTable = document.getElementById("membersTable");
    If ("membersTable") {
        // Load and display members
        displayMembers();
    }
});

// function to save a member to localStorage
function saveMember(member) {
    let members = JSON.parse(localStorage.getItem("members")) || [];
    Members.push(member);
    localStorage.setItem("members", JSON.stringify(members));
}

// function to display members in the table
function displayMembers() {
    const members = JSON.parse(localStorage.getItem("members")) || [];
    const membersTableBody = document.querySelector("#membersTable tbody");

    // Clear existing rows
    membersTableBody.innerHTML = "";

    // Add each member to the table
    Members.forEach((member) => {
        const row = document.createElement("tr");
        Row.innerHTML = `
            <td>${member.fullName}</td>
            <td>${member.email}</td>
            <td>${member.st
            }
        }
    }