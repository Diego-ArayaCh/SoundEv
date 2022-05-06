
navigator.geolocation.getCurrentPosition(fn_ok, fn_error);


function fn_error(){
    var divMap = document.getElementById('map-pink');
    divMap.innerHTML = 'Hubo un problema';
}

function fn_ok(respuesta){
    var divMap = document.getElementById('map-pink');
    var lat = respuesta.coords.latitude;
    var lng = respuesta.coords.longitude;
   
   
    var gLatLng = new google.maps.LatLng(lat, lng);
    var objConfig = {
        zoom:17,
        center:gLatLng 

    };
    var gMap = new google.maps.Map(divMap, objConfig);  
    var objConfigMarker = {
        position: gLatLng ,
        map: gMap,
        title: "Usted está aquí"
    };
    
    var gMarker = new google.maps.Marker(objConfigMarker);


    var objConfigMarker1 = {
        position: new google.maps.LatLng(9.932872, -84.077011) , //Ruta del evento
        map: gMap,
        title: "Evento"
    };
    
    var gMarker1 = new google.maps.Marker(objConfigMarker1);
    


    gMarker1.setIcon('../Eventos/music1.png')
    var objHTML = {
        content:'<div style = " padding: 5px; color: #BA882C;  background-color: #363636; border-radius: 20px; height: 150px; width: 150px"><h2>Teatro Nacional</h2> <h3>Evento<h3></div>'

    }
   var gIW = new google.maps.InfoWindow(objHTML)
    google.maps.event.addListener(gMarker1, 'click', function(){
        gIW.open(gMap,gMarker1); 
    });

    var objConfigDR = {
        map: gMap,
        suppressMarkers: true

    }

    var objConfigDS = {
        origin: gLatLng,
        destination: new google.maps.LatLng(9.932872, -84.077011), //Ruta del evento
        travelMode: google.maps.TravelMode.DRIVING
    }



    var ds = new google.maps.DirectionsService();
    var dr = new google.maps.DirectionsRenderer(objConfigDR);

    ds.route(objConfigDS, fn_rutear);
function fn_rutear(resultados , status){
        if (status == 'OK') {
            dr.setDirections(resultados);
        }else{
            alert('Hubo un error al trazar la ruta');
        }
}

}


//mostrar_objeto(navigator.geolocation);
