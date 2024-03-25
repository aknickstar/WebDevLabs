
function greetingFunc(){
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if (h>=5 && h<12){
        E.innerHTML = "Good morning, I am Annika Santhanam!";
    }
    else if (h>=12 && h<18){
        E.innerHTML = "Good afternoon, I am Annika Santhanam!";
    }
    else if (h>=18 && h<20){
        E.innerHTML = "Good evening, I am Annika Santhanam!";

    }
    else if (h>= 20 && h<24 || h<5){
        E.innerHTML = "Good night, I am Annika Santhanam!";
    }
}

/*
greetingFunc();
*/

var L = window.location.href
console.log(L)
if (L.includes("index.html")){
    greetingFunc();
}


function addYear(){
    var d = new Date();
    var y = d.getFullYear();

    var E = document.getElementById("copyYear");
    E.innerHTML +=y;
}

/*

function showList(){
    document.getElementById("FavList").style.display = "block"
    document.getElementById("SeeMoreBTN").style.display = "none"
}
*/

$("#readLess").click(function(){

    $("#longIntro").hide();
 
    $("#readLess").hide();  
 
    $("#readMore").show();    
 
 
  });
 
   $("#readMore").click(function(){
 
    $("#longIntro").show();
 
    $("#readLess").show();
 
    $("#readMore").hide();    
 
  });


  function validate() {

    var userName = document.getElementById("name");
 
    var userEmail = document.getElementById("email");
 
    var userText = document.getElementById("comment");
 
    var msg = document.getElementById("ValidateMsg");
 
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
 
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
 
    }
 
 }



if (window.location.pathname.includes("fun.html")){





let map;


async function initMap() {


 const position = { lat: 40.44332926007748, lng:-79.94249584843838 };



 const { Map } = await google.maps.importLibrary("maps");

 const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");



 map = new Map(document.getElementById("map"), {

   zoom: 12,

   center: position,

   mapId: "MAP_ID",

 });



 const marker = new AdvancedMarkerElement({

   map: map,

   position: {lat: 40.44347660928775, lng: -79.9498828083373},

   title: "Carnegie Mellon Museum of Natural History",

 });


 const marker2 = new AdvancedMarkerElement({

    map: map,
 
    position: {lat: 40.439521770413364, lng: -79.94781152513701},
 
    title: "Phipps Botanical Gardens",
 
  });


  const marker3 = new AdvancedMarkerElement({

    map: map,
 
    position: {lat:   40.44345280322221, lng: -80.0013212977413},
 
    title: "Heinz Hall",
 
  });

}


initMap();

}



function activeNav() {

  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {

    x.className += " responsive";

  } else {

    x.className = "topnav";

  }

}