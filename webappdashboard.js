// Simulated user data
const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    // Add more users here
];

// Event listeners
document.getElementById('logout-btn').addEventListener('click', () => {
    // Implement logout functionality
});

document.getElementById('add-user-btn').addEventListener('click', () => {
    // Implement user creation functionality
});

// Function to populate the user list
function populateUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${user.name} (${user.email})</span>
            <button>Edit</button>
            <button>Delete</button>
        `;
        userList.appendChild(listItem);
    });
}

// Initialize the user list
populateUserList();

