var config = { 
  apiKey: "AIzaSyCpestZyCwEMkPVhDfiV0NRRAS-U4Sju_0",
  authDomain: "garrr-d0388.firebaseapp.com",
  databaseURL: "https://garrr-d0388-default-rtdb.firebaseio.com",
  projectId: "garrr-d0388",
  storageBucket: "garrr-d0388.appspot.com",
  messagingSenderId: "19269687839",
  

}; 
firebase.initializeApp(config); 
 
$(document).ready(function(){ 
  var database = firebase.database(); 
  var slot1; 
 
  database.ref().on("value", function(snap){ 
    slot1 = snap.val().slot1; 
    if(slot1 == 1){ 
      document.getElementById("lightStatus").style.backgroundColor = 'red'; 
    } else { 
      document.getElementById("lightStatus").style.backgroundColor = '#05ff1b'; 
    } 
  }); 
})

$(document).ready(function(){ 
  var database = firebase.database(); 
  var slot2; 
 
  database.ref().on("value", function(snap){ 
    slot2 = snap.val().slot2; 
    if(slot2 == 1){ 
      document.getElementById("lightStatus1").style.backgroundColor = 'red'; 
    } else { 
      document.getElementById("lightStatus1").style.backgroundColor = '#05ff1b'; 
    } 
  }); 
})

$(document).ready(function(){ 
  var database = firebase.database(); 
  var slot3; 
 
  database.ref().on("value", function(snap){ 
    slot3 = snap.val().slot3; 
    if(slot3 == 1){ 
      document.getElementById("lightStatus2").style.backgroundColor = 'red'; 
    } else { 
      document.getElementById("lightStatus2").style.backgroundColor = '#05ff1b'; 
    } 
  }); 
})