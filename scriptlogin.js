document.getElementById("login_form").addEventListener("submit", userLoginDataStorage);

const logInEmail = document.getElementById("email");
const logInPassword = document.getElementById("password");

function userExists(Email){
    let text = localStorage.getItem("testJSON");
    let profiles = JSON.parse(text);
    for(let i = 0; i < profiles.length; i++){
        if(profiles[i].email == Email){
            return i;
        }
    }
    return -1;
}


function userLoginDataStorage(e){
    e.preventDefault();
    let index = userExists(logInEmail.value);
    console.log(index);
    console.log("hi");
    let text = localStorage.getItem("testJSON");
    let profiles = JSON.parse(text);

    if(index != -1 && profiles[index].password == logInPassword.value){
        localStorage.setItem("email", logInEmail.value);
        window.open("profile.html","_self");
    }
    else{
        alert("Invalid credentials, please try again!");
    }
}