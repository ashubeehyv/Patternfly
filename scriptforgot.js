const verifyEmail = document.getElementById("verifyEmail");
const verifyName = document.getElementById("verifyName");

document.getElementById("forgot_form").addEventListener("submit", fetchPassword);

function fetchPassword(e){
    e.preventDefault();
    let index = userExists(verifyEmail.value);
    let text = localStorage.getItem("testJSON");
    let profiles = JSON.parse(text);

    if(index != -1 && profiles[index].name == verifyName.value){
        alert(`Your password is ${profiles[index].password}` + "\n" + "Please log in using your password!");
        window.open("login.html","_self");
    }
    else{
        alert("User does not exit please sign up!");
    }

}


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



