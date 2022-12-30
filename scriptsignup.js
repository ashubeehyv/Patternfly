function Profile(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

const myObj = [new Profile("vineetks","vineetks@gmail.com","vineetks"),new Profile("admin","admin@gmail.com","admin")];

document.getElementById("signup_form").addEventListener("submit", myFunction);


const addName = document.getElementById("addName");
const addPassword = document.getElementById("addPassword");
const addEmail = document.getElementById("addEmail");

function userExists(Email){
    let text = localStorage.getItem("testJSON");
    let profiles = JSON.parse(text);
    console.log(localStorage);
    console.log(!profiles);
    console.log(addName.value);
    if(!profiles){
        return -1;
    }
    for(let i = 0; i < profiles.length; i++){
        if(profiles[i].email == Email){
            return i;
        }
    }
    return -1;
}

function myFunction(e){
    e.preventDefault();
    console.log("Hi");

    if(userExists(addEmail.value) == -1){
        console.log(addName);
        myObj.push(new Profile(addName.value, addEmail.value, addPassword.value));
        const myJSON = JSON.stringify(myObj);
        localStorage.setItem("testJSON", myJSON);
        localStorage.setItem("email", addEmail.value);
        window.open("profile.html", "_self");
        console.log(localStorage);
    }
    else{
        alert("User already exists, please login!");
    }   
}
