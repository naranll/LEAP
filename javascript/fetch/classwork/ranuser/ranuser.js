let root = document.getElementById("root");
let btn = document.getElementById("btn");
btn.innerText = "Click";

btn.addEventListener("click", () => {
    getData();
})

function getData() {
    let mydata;
    fetch("https://randomuser.me/api/")
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            printUser(data)
        })
        .catch((data) => console.log("no"));
}


function printUser(user) {
    let inputText = `
    <div><img src = ${user.results[0].picture.large}></div>
    <p>Name:    (${user.results[0].name.title}) ${user.results[0].name.first} ${user.results[0].name.last}</p>
    <p>Gender:  ${user.results[0].gender}</p>
    <p>Age: ${user.results[0].dob.age}</p>
    <p>Nationality: ${user.results[0].nat}</p>
    <p>Contact: ${user.results[0].cell}</p>
    <p>Email:   ${user.results[0].email}</p>
    <p>Address: ${user.results[0].location.street.number} ${user.results[0].location.street.name} Str, ${user.results[0].location.state}, ${user.results[0].location.city}, ${user.results[0].location.country} (${user.results[0].location.postcode})</p>
    `;
    root.innerHTML = inputText;
}


