//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAQ6dYbsQbIvWZHAJ_sbnL8uMR_kzsj448",
  authDomain: "kiwtter-4fc53.firebaseapp.com",
  databaseURL: "https://kiwtter-4fc53-default-rtdb.firebaseio.com",
  projectId: "kiwtter-4fc53",
  storageBucket: "kiwtter-4fc53.appspot.com",
  messagingSenderId: "412495957510",
  appId: "1:412495957510:web:7d6223be61a1da53eafd87"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name,message:msg,like:0
     })
     document.getElementById("msg").value="";
}