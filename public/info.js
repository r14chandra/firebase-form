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

// retrieving u_id  from localStorage
var id = localStorage.getItem('u_id');
firebase.database().ref('User/'+id).once('value').then(
    function(snapshot){

        //retrieving data from object 'snapshot' 
         var name = (snapshot.val && snapshot.val().name);
         var place = (snapshot.val && snapshot.val().place);
         var email = (snapshot.val && snapshot.val().email);

         //setting values to corresponding ids of elements in info.html page
         document.getElementById('name').innerHTML = name;
         document.getElementById('place').innerHTML = place;
         document.getElementById('email').innerHTML = email;
}).catch((e)=> alert(e));

// SignOut function
function signOut() {
    auth.signOut();
    alert("Signed Out");

    //redirecting to home page
    window.location.replace("index.html");
}