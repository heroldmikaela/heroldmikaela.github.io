// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAd_8eNRBV1lv_qP8I53YsdSnK4zKgwIUw",
  authDomain: "form-a8e36.firebaseapp.com",
  databaseURL: "https://form-a8e36.firebaseio.com",
  projectId: "form-a8e36",
  storageBucket: "form-a8e36.appspot.com",
  messagingSenderId: "445704733553",
  appId: "1:445704733553:web:b4b896637a811813"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //Reference messages collection 
var messagesRef = firebase.database().ref('messages');
//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
// submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    //Save Message
    saveMessage(name, email, message);

}

// Function to get get form values
// function getInputVal(id){
//     return document.getElementById(id).value;
// }

//save message to firebase 
function saveMessage(name, email, message){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
  name: name,
  email: email,
  message: message
});}