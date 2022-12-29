let root = document.querySelector("#root");
let balBtn = document.querySelector("#balanceBtn");
let addBtn = document.querySelector("#userBtn");
let inputPart = document.querySelector("#inputSection");
let enterUser = document.createElement("button");

//show users data
function createUsers(user) {
    let newDiv = document.createElement("div");
    newDiv.innerText = `${user.balance_id} - ${user.name} - ${user.surName} - ${user.balance}`;
    newDiv.style.border = "1px solid grey";
    newDiv.setAttribute("class","userDivs");
    root.appendChild(newDiv);
}

//get users' data from backend
fetch("http://localhost:3333/api/users")
    .then((response) => response.json())
    .then((response) => {
        response.map((user) => {
            createUsers(user);
        });
    })
    .catch(() => console.log("fetch error"));


//1. Enter new user
//---user info in array
class UserInfo {
    constructor(name, surName, bal_id, bal, bal_type) {
        this.name = name;
        this.surName = surName;
        this.balance_id = bal_id;
        this.balance = bal;
        this.balance_type = bal_type;
    }
    //id; returns from backend
    name;
    surName;
    balance_id;
    balance;
    balance_type; //boolean
}

//---input user info table form
addBtn.addEventListener("click", () => {
    //input new user data form
    inputSection.innerHTML = "";
    let newInfoDiv = document.createElement("div");
    let inputForm = `<form>
        <table>
        <tr>
            <td><input type="text" id="newName" placeholder="Name" required></td>
        </tr>
        <tr>
            <td><input type="text" id="surName" placeholder="Surname" required></td>
        </tr>
        <tr>
            <td><input type="number" id="balance" placeholder="Balance amount" min="10000" required></td>
        </tr>
        <tr>
            <td>
                <select id="balanceType" required>
                    <option value = "true" >Hugatsaatai</option>
                    <option>Hugatsaagui</option>
                </select>
                
            </td>
        </tr>
        </table>
    </form>`
    newInfoDiv.innerHTML = inputForm;
    inputSection.appendChild(newInfoDiv);

    //Enter user info button
    enterUser.innerText = "Enter";
    inputSection.appendChild(enterUser);
})

//---enerate unique balance id for new users
let count = 150;
function generateBalanceId() {
    if (count < 1000) {
        count++;
    }
    return count;
}

//---enter user info in object on click
enterUser.addEventListener("click", () => {
    let newName = document.querySelector("#newName").value;
    let surName = document.querySelector("#surName").value;
    let balance = document.querySelector("#balance").value;
    let balanceType = document.querySelector("#balanceType").value;
    let newBalId = `00100${generateBalanceId()}`;
    let newUser = new UserInfo(newName, surName, newBalId, balance, balanceType);


    fetch("http://localhost:3333/api/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
    }).then((data) => data.json())
        .then((data) => console.log(data))
        .catch(() => console.log("post error"))

})



//2. Input number and use it as year to increase interest 

//---change balance
balBtn.addEventListener("click", () => {
    let inputYear = document.querySelector("#year").value;              //always inside event listener
    fetch("http://localhost:3333/api/users")
        .then((response) => response.json())
        .then((response) => {
            response.map((user) => {
                console.log(inputYear);
                for (let i = 0; i < inputYear; i++) {
                    if (user.balance_type == true) {
                        user.balance = user.balance * 2;
                    } else {
                        user.balance = (user.balance * (1.2)).toFixed(2);
                    }
                }
                console.log(user.balance);
            });
        })
        .catch(() => console.log("fetch error"));
});


//3. delete div 
let userDivs = document.querySelector(".userDivs");
userDivs.addEventListener("click", () => {
    fetch(`http://localhost:3333/api/users`)
    .then((response) => response.json())
    .then((data) => data.filter())
    .catch(console.log("no id"))
});
