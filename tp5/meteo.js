
window.onload = function() {
    
    document.getElementById("searchCity").addEventListener("submit", function(event){
      event.preventDefault(); // pour annuler le rechargement de la page      
      var city = document.getElementById("city").value;
      searchCity(city);   
    });
    
    function searchCity(_city){  
       console.log("searchCity","Hello from "+_city);    
         var request = new XMLHttpRequest();
       request.open("get","http://api.openweathermap.org/data/2.5/weather?q="+_city+"&appid=026b817616733447ff9cf585780ff7af",true();

       request.onload=function (){
           if (request.status >= 200 && request.status <400){
             
              var responseJSON = JSON.parse(request.responseText);
             document.getElementById("result").innerHTML ="<h2>"+ responseJSON.name+ "</h2>"
             document.getElementById("icon").innerHTML= "<img src=http://openweathermap.org/img/w/"+temporaire +".png />";
      
               document.getElementById("temperature").innerHTML=responseJSON.main.temp; 
             
               document.getElementById("cloud").innerHTML=responseJSON.clouds.all; 
               document.getElementById("humidity").innerHTML= responseJSON.main.humidity + " % ";
           }
               else {
                
           }
       };

       request.onerror=function(){

       };

       request.send();
                 }


  function searchLatLng(_lat,_lng){  
       console.log(searchLatLng,"Hello from "+_lat+","+_lng);    //A compléter dans la suite du TP
         
}
  
    document.getElementById("gps").addEventListener("click", function(){  
         
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition, showError);
              } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
              }

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
         searchLatLng(position.coords.latitude,position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

}
      









