
window.onload = function() {
    
    document.getElementById("searchCity").addEventListener("submit", function(event){
      event.preventDefault(); // pour annuler le rechargement de la page      
      var city = document.getElementById("city").value;
      searchCity(city);   
    });
    
    function searchCity(_city){  
       console.log("searchCity","Hello from "+_city);    //A compléter dans la suite du TP
         var request = new XMLHttpRequest();
       request.open("get","http://api.openweathermap.org/data/2.5/weather?q="+_city+"&appid=026b817616733447ff9cf585780ff7af",true);

       request.onload=function (){
           if (request.status >= 200 && request.status <400){
               // Success!
              var responseJSON = JSON.parse(request.responseText);
             
              var temp = responseJSON.main.temp; 
              var icon = responseJSON.weather.icon; 
              
          //   var temp = responseJSON.weather.main;
             var humidity = responseJSON.main.humidity;
               
                 var wind = responseJSON.wind.speed;
                 var tomporaire=responseJSON.weather[0].icon;
            //     var temperature= responseJSON.temperature.value;              
             document.getElementById("result").innerHTML ="<h2>"+ responseJSON.name+ "</h2>" ;

             //document.getElementById("temps").innerHTML=  ; 
             
             document.getElementById("icon").innerHTML= "<img src=http://openweathermap.org/img/w/"+tomporaire +".png />";
               document.getElementById("temperature").innerHTML=responseJSON.main.temp; 
             
               document.getElementById("cloud").innerHTML=responseJSON.clouds.all; 
               document.getElementById("humidite").innerHTML= responseJSON.main.humidity + " % ";
           }else {
                // document.getElementById
           }
       };

       request.onerror=function(){

       };

       request.send();
}


     
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
 });

}
      



function searchLatLng(_lat,_lng){  
       console.log(searchLatLng,"Hello from "+_lat+","+_lng);    //A compléter dans la suite du TP
         
}





