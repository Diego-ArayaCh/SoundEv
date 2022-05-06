function cotizar() {
    var costoMes = document.getElementById('costoMes');
    var costoCarousel = document.getElementById('costoCarousel');
    var iva = document.getElementById('iva');
    var costoTotal = document.getElementById('costoTotal');
    var meses = document.getElementById('meses');
var sumaTotal = 20000;
    alert("Costo por mes establecido a 30000 colones");
    if (meses.value.trim() == "") {
        meses.focus();
        alert('Seleccione la cantidad de meses que mostrará su evento');
        return;
    }
    var isCarousel = document.getElementById('isCarousel');
    if (isCarousel.checked) {
        costoCarousel.innerHTML = "Costo por carousel: ₡10000"
        sumaTotal+= 10000;
    } else {
        costoCarousel.innerHTML = "Costo por carousel: ₡0"
    }

     var cantMeses = meses.value;
     parseInt(cantMeses);
     costoMes.innerHTML = "Costo de los meses: ₡"+ (cantMeses * 30000); 
        sumaTotal+= cantMeses*30000;
    iva.innerHTML = "IVA(13%): ₡"+ (sumaTotal*0.13);
    console.log(sumaTotal);
    sumaTotal += sumaTotal*0.13  ;
    console.log(sumaTotal);
    costoTotal.innerHTML = "CT + IVA: ₡"+sumaTotal


}