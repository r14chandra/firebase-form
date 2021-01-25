//Your web app's Firebase configuration
var firebaseConfig = {
   
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

//redirecting to home page 
function home() { 
        window.location.href="index.html"; 
}

//submit functions
function submit(){

    //getting email,password,name and place by using document.getElementById().value
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("nm").value;
    var place = document.getElementById("pl").value;

    // creating user using firebase auth built-in method createUserWithEmailAndPassword()
    auth.createUserWithEmailAndPassword(email, password)
        .then(function(){ 
            alert("Signed Up with "+email +", go to home page to log in!");
            // storing current user-id in variable 'id' 
            const id = auth.currentUser.uid;

            //storing name,place and email in firebase database in table 'User' 
            firebase.database().ref('User/'+id).set({
                 name:name,
                 place:place, 
                 email:email
            });

            //emptying input fields
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("nm").value = "";
            document.getElementById("pl").value = "";
    }).catch(function(error){
            alert(error);

            //emptying input fields
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("nm").value = "";
            document.getElementById("pl").value = "";
    }); 
}
