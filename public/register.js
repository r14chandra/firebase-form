//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAkBOLdpyulcaGg5uN-tc9_AM5sx0y0S1c",
    authDomain: "form-49d7c.firebaseapp.com",
    databaseURL: "https://form-49d7c.firebaseio.com",
    projectId: "form-49d7c",
    storageBucket: "form-49d7c.appspot.com",
    messagingSenderId: "1087204700304",
    appId: "1:1087204700304:web:6b62305a3e35ccb3376815"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

 
function newLocation() { 
        window.location.href="login.html"; 
} 
function submit(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("nm").value;
    var place = document.getElementById("pl").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(function(){ 
            alert("Signed Up with "+email +", you can log in now!");
            const id = auth.currentUser.uid;
            firebase.database().ref('User/'+id).set({
                 name:name,
                 place:place, 
                 email:email
            });
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("nm").value = "";
            document.getElementById("pl").value = "";
    }).catch(function(error){
            alert(error);
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("nm").value = "";
            document.getElementById("pl").value = "";
    }); 
}
