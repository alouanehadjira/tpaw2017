
window.onload = function(){
    document.getElementById("searchCity").addEventListener("submit", function(event){
       
        var city = document.getElementById("city").value;
         event.preventDefault();
        searchCity(city);
       });
     }
/*    document.getElementById("gps").addEventListener("click", function(event){
        getLocation();
       });*/
 
    
function searchCity(_city){
 
    
  var request=new XMLHttpRequest();
    request.open("get","http://api.openweathermap.org/data/2.5/weather?q="+_city+"&appid=026b817616733447ff9cf585780ff7af",true);
    request.onload =function(){
        if(request.status >=200 && request.status <400){
            // Success!
           var responseJSON = JSON.parse(request.responseText);
                var icon = responseJSON.weather.icon;
                document.getElementById("icon").innerHTML = '<img src="http://openweathermap.org/img/w/'+icon+'.png">';
                var temps = responseJSON.weather.main;
                 document.getElementById("temps").innerHTML = temps + " K°";
                var humidity = responseJSON.main.humidity;
                var cloud = responseJSON. Cloudiness;
                var wind = responseJSON.wind.speed;
        }
    }
   
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    $("#inputAdresse3").val(latlon);

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
    document.getElementById("demo").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("demo").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("demo").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById("demo").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("demo").innerHTML = "An unknown error occurred."
            break;
    }
}
        
function searchLatLng(_lat, _lng){
    console.log(searchLatLng,"Hello from "+_lat+","+_lng);
    //A compléter dans la suite du TP
}





