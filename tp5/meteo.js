
window.onload = function(){
    document.getElementById("searchCity").addEventListener("submit", function(event){
event.preventDefault(); // pour annuler le rechargement de la page
        var city = document.getElementById("city").value;
        console.log("searchCity","Hello from "+_city);
      searchCity(city);
       });
  }
    
function searchCity(_city){
    console.log("searchCity","Hello from "+_city);
    
    var request=new XMLHttpRequest();
    request.open("Get","http://api.openweathermap.org/data/2.5/weather?q=’+_city+’&appid=026b817616733447ff9cf585780ff7af",true);
    request.onload =function(){
        if(request.status >=200 && request.status <400){
            // Success!
           var responseJSON = JSON.parse(request.responseText);
                var icon = responseJSON.weather.icon;
                var temps = responseJSON.weather.main;
                var humidity = responseJSON.main.humidity;
                var cloud = responseJSON. Cloudiness;
                var wind = responseJSON.wind.speed;
        }
    }
}
        
function searchLatLng(_lat, _lng){
    console.log(searchLatLng,"Hello from "+_lat+","+lng);
    //A compléter dans la suite du TP
}
