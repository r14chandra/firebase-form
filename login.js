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

function login(){  
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    auth.signInWithEmailAndPassword(email, password)
    .then(()=> {
        var id = auth.currentUser.uid;
        alert("Signing in with "+email);
        localStorage.setItem('u_id',id);
        window.location.replace("info.html");
    })
    .catch(e =>{ 
        alert(email+" doesn't exist");
        document.getElementById("email").value = "";
        document.getElementById("pwd").value = "";
    }); 
}