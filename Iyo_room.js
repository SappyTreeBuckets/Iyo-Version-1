var firebaseConfig = {
    apiKey: "AIzaSyBfbda1Vp9Y__JVcwS_SBMuNOLTM7YNtjg",
    authDomain: "iyofirebase.firebaseapp.com",
    databaseURL: "https://iyofirebase-default-rtdb.firebaseio.com",
    projectId: "iyofirebase",
    storageBucket: "iyofirebase.appspot.com",
    messagingSenderId: "441777436235",
    appId: "1:441777436235:web:029b2401cd64e86ca97fce"
  };
  var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();