
window.onload = function(){
    document.getElementById(“searchCity”).addEventListener(“submit”, function(event){
event.preventDefault(); // pour annuler le rechargement de la page
        var city = document.getElementById("city").value;
      searchCity(city);
       });
  }
function searchCity(_city){
    console.log("searchCity","Hello from "+_city);
    var resuest=new XMLHttpRequest();
    Request.open("Get","http://api.openweathermap.org/data/2.5/weather?q=’+_city+’&appid=026b817616733447ff9cf585780ff7af",true);
    request.onload =function(){
    if(request.status >=200 && request.status <400){
    // Success!
    var resp = request.responseText;
    }
        
        
function searchLatLng(_lat, _ lng){
    console.log(searchLatLng,"Hello from "+_lat+","+lng);
    //A compléter dans la suite du TP
}
