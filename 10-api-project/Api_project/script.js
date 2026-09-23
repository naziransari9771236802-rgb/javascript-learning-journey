const loadUsers = document.querySelector("#loadUsers");
const loading = document.querySelector("#loading");
const users = document.querySelector("#users");

loadUsers.addEventListener("click", async function(){
    loading.style.display = "black";

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    loading.style.display = "none";

    data.forEach(function (user) {
        users.innerHTML += `
        <div>
           <h3>${user.name}</h3>
           <p>${user.email}</p>
        </div>   
        `;
    });
});