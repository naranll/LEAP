let root = document.querySelector("#root");
let myBtn = document.querySelector("#gen");

//show users data
function createUsers(user) {
    let newDiv = document.createElement("div");
    newDiv.innerText = `${user.name}, ${user.surName}, ${user.balance}, ${user.balance_type}`;
    root.appendChild(newDiv);
}

fetch("http://localhost:3333/api/users")
    .then((response) => response.json())
    .then((response) => {
        response.map((user) => {
            createUsers(user);
        });
    })
    .catch(() => console.log("fetch error"));


//change balance
myBtn.addEventListener("click", () => {
    fetch("http://localhost:3333/api/users")
        .then((response) => response.json())
        .then((response) => {
            response.map((user) => {
                console.log(user);
                /*
                let newb = 0;
                if (user.balance_type) {
                    newb = user.balance + 800;
                } else {
                    newb = user.balance - 800;
                }
                console.log("new balance", newb);
                */
            });
        })
        .catch(() => console.log("fetch error"));
})


