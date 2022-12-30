
let useremail = localStorage.getItem("email");


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

let index = userExists(useremail);
let text = localStorage.getItem("testJSON");
let profiles = JSON.parse(text);
let profileImage = document.getElementById('profile_property');

window.onload = function(){
    fillData();
    function fillData(){

        document.getElementById("welcome_note").innerHTML = `<h2>Welcome ${profiles[index].name}</h2>`
        document.getElementById("showName").innerHTML = `Name: ${profiles[index].name}`;
        document.getElementById("showEmail").innerHTML = `Email: ${profiles[index].email}`;
        document.getElementById("showPassword").innerHTML = `Password: ${profiles[index].password}`;
        if(profiles[index].image){
          profileImage.src = profiles[index].image;
        }
        else{
          profileImage.src = "profile_img.jpg";
        }
    }
}

const login_btn = document.getElementById("login_button");

login_btn.addEventListener("click", myFunction);

function myFunction(){
    window.open("login.html","_self");
    localStorage.removeItem("email");
}



const editButton = document.getElementById('editProfile');
const editModal = document.getElementById('edit-modal');
const closeButton = document.querySelector('.close-button');
const saveButton = document.getElementById('editProfile_form');



closeButton.addEventListener('click', function() {
  editModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == editModal || event.target == editModal1) {
    editModal.style.display = 'none';
    editModal1.style.display = 'none';
  }
});



editButton.addEventListener('click', function() {

    // Show the modal
    document.getElementById('edit-modal').style.display = 'block';


    // Get the current values from the profile
    console.log("Hi");
  
    // Set the values in the form fields
    document.getElementById('editName').value = `${profiles[index].name}`;
    document.getElementById('editPassword').value = `${profiles[index].password}`;
});
  
  
  
saveButton.addEventListener('submit', function(e){
    e.preventDefault();
    
    const updatedName = document.getElementById('editName').value;
    const updatedPassword = document.getElementById('editPassword').value;
    profiles[index].name = updatedName;
    profiles[index].password = updatedPassword;
    const myJSON = JSON.stringify(profiles);
    localStorage.setItem("testJSON", myJSON);
    
    location.reload();
    editModal.style.display = 'none';

})

const editprofilePic = document.getElementById('editProfilePic');
const editModal1 = document.getElementById('edit-modal-image');
const closeButton1 = document.querySelector('.close-button-image'); 
const saveImage = document.getElementById('editProfileImage_form');

editprofilePic.addEventListener('click', function() {

  document.getElementById('edit-modal-image').style.display = 'block';

});

saveImage.addEventListener('submit', function(e){
  e.preventDefault();


  const updatedProfileImage = document.getElementById('editProfileImage');
  const imageFile = updatedProfileImage.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onload = function(){
      const imageUrl = reader.result;
      profiles[index].image = imageUrl;
      const myJSON = JSON.stringify(profiles);
      localStorage.setItem("testJSON", myJSON);
  }
  
  location.reload();
  editModal1.style.display = 'none';

})

closeButton1.addEventListener('click', function() {
  editModal1.style.display = 'none';
});