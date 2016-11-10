
window.onload = function() {
    
    document.getElementById("searchCity").addEventListener("submit", function(event){
      event.preventDefault(); // pour annuler le rechargement de la page      
      var city = document.getElementById("city").value;
      searchCity(city);   
    });


    
function searchCity(_city){  
       console.log("searchCity","Hello from "+_city);    //A compléter dans la suite du TP
       //   document.getElementById("result").innerHTML ="<h2>"+ _city+"</h2>" ;
    
       var request = new XMLHttpRequest();
       request.open("GET","https://demo.bilelz.fr/owmap/?q="+_city+"&appid=026b817616733447ff9cf585780ff7af",true);

       request.onload=function (){
           if (request.status >= 200 && request.status <400){
               // Success!
              var responseJSON = JSON.parse(request.responseText);
             

            //     var temperature= responseJSON.temperature.value;              
             document.getElementById("result").innerHTML ="<h2>"+ responseJSON.name+ "</h2>" ;

             //document.getElementById("temps").innerHTML=  ; 
             
             document.getElementById("icon").innerHTML= "<img src=http://openweathermap.org/img/w/"+responseJSON.weather[0].icon +".png />";
               document.getElementById("temperature").innerHTML=responseJSON.main.temp; 
             
               document.getElementById("cloud").innerHTML=responseJSON.clouds.all; 
               document.getElementById("humidity").innerHTML= responseJSON.main.humidity + " % ";
           }else {
                 document.getElementById
           }
       };

       request.onerror=function(){

       };

       request.send();
}

   
function searchLatLng(_lat,_lng){  
       console.log(searchLatLng,"Hello from "+_lat+","+_lng);    //A compléter dans la suite du TP
        document.getElementById("result").innerHTML ="<h2>"+ _lat+","+ _lng+"</h2>" ;
   
       var request = new XMLHttpRequest();
      request.open("GET","https://demo.bilelz.fr/owmap/?lat="+_lat+"&lon="+_lng+"&appid=a86ef65f3662cce72b37f1b8af722d94",true);

      request.onload=function (){
           if (request.status >= 200 && request.status <400){
               // Success!
              var responseJSON = JSON.parse(request.responseText);
             

              var temperature= responseJSON.temperature.value;              
             document.getElementById("result").innerHTML ="<h2>"+ responseJSON.name+ "</h2>" ;

             document.getElementById("temps").innerHTML=  ; 
             
            document.getElementById("icon").innerHTML= "<img src=http://openweathermap.org/img/w/"+responseJSON.weather[0].icon +".png />";
              document.getElementById("temperature").innerHTML=responseJSON.main.temp; 
             
               document.getElementById("cloud").innerHTML=responseJSON.clouds.all; 
              document.getElementById("humidity").innerHTML= responseJSON.main.humidity + " % ";
           }else {
                 document.getElementById
           }
       };

       request.onerror=function(){

       };

       request.send();
}

