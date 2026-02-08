"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";
// Local state
let users = [];
// DOM references
//HTMLUListElement is a built-in TypeScript type representing <ul> element
//asserting the type of userList to HTMLUListElement
const userList = document.getElementById("userList");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
// ------------------------------
// READ – Fetch users
// ------------------------------
async function fetchUsers() {
    try {
        const res = await fetch(API_URL);
        users = await res.json();
        console.log(users);
        // Limit to first 5 users
        // users = users.slice(0, 5);
        // console.log(users);
        renderUsers();
    }
    catch (err) {
        console.error("Failed to fetch users", err);
    }
}
// ------------------------------
// CREATE – Add user
// ------------------------------
function addUser() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    if (!name || !email) {
        alert("Please enter name and email");
        return;
    }
    const newUser = {
        id: Date.now(), // local ID
        name,
        email,
    };
    //adding new user to the beginning of the array
    users.unshift(newUser);
    renderUsers();
    nameInput.value = "";
    emailInput.value = "";
}
// ------------------------------
// UPDATE – Edit user
// ------------------------------
function updateUser(id) {
    const user = users.find((u) => u.id === id);
    if (!user)
        return;
    const newName = prompt("Enter new name", user.name);
    if (!newName)
        return;
    user.name = newName;
    renderUsers();
}
// ------------------------------
// DELETE – Remove user
// ------------------------------
function deleteUser(id) {
    const confirmed = confirm("Are you sure you want to delete?");
    if (!confirmed)
        return;
    users = users.filter((u) => u.id !== id);
    renderUsers();
}
// ------------------------------
// Render users-without Bootstrap
// ------------------------------
// function renderUsers(): void {
//   userList.innerHTML = "";
//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <span>${user.name} (${user.email})</span>
//       <div>
//         <button onclick="updateUser(${user.id})">Edit</button>
//         <button onclick="deleteUser(${user.id})">Delete</button>
//       </div>
//     `;
//     userList.appendChild(li);
//   });
// }
// Render users (Bootstrap list)
function renderUsers() {
    userList.innerHTML = "";
    users.forEach((user) => {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
      <div>
        <strong>${user.name}</strong><br>
        <small class="text-muted">${user.email}</small>
      </div>
      <div>
        <button
          class="btn btn-sm btn-outline-secondary me-2"
          onclick="updateUser(${user.id})"
        >
          Edit
        </button>
        <button
          class="btn btn-sm btn-outline-danger"
          onclick="deleteUser(${user.id})"
        >
          Delete
        </button>
      </div>
    `;
        userList.appendChild(li);
    });
}
// ------------------------------
// Initial load
// ------------------------------
fetchUsers();
//# sourceMappingURL=app.js.map