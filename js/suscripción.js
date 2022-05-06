function enviar() {
    //validación nombre
    var nombre = document.getElementById('nombre');

    if (nombre.value.trim() == "") {
        nombre.focus();
        alert('Introduzca su nombre');
        return;
    }
    //validación email
    var correo = document.getElementById('correo');

    if (correo.value.trim() == "") {
        correo.focus();
        alert('Introduzca su correo');
        return;
    }
   var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(correo.value)){
        correo.focus();
        alert("La dirección de email es incorrecta.");
        return;
       }
       var fecha = document.getElementById('fecha');
      
      if (fecha.value.trim() == "") {
        fecha.focus();
        alert('Introduzca una fecha');
        return;
    }else{
        if(!existeFecha(fecha.value)){
            
            return;
        }else{
            if(validarFechaMenorActual(fecha.value)){
              
            }else{
                fecha.focus();
                alert('Introduzca una fecha válida');
            }
        }
    }
    var frecuencia = document.getElementById('frecuencia');
    if(frecuencia.value.trim()==""){
        frecuencia.focus();
        alert('Seleccione una opción');
        return;
    }
    var grado = document.getElementById('grado');
   
    if(grado.value.trim()==""){
        grado.focus();
        alert('Seleccione al menos una opción');
        return;
    }
    var f = document.getElementById('f');
    var m = document.getElementById('m');
   if(!f.checked && !m.checked){
        f.focus();

        alert('Seleccione su género');
        return;
   }

   var terminos = document.getElementById('terminos');
   if (!terminos.checked) {
      terminos.focus();
       alert('Para continuar acepte los términos y condiciones');
       return;
   }
   var miHtml = "<div style = 'background-color: #363636; text-align: center;'>"+
   "<img width='200px' height='200px'  style='margin-top: 20px; display: inline;' src='https://dev-jd.netlify.app/proyecto/img/IconoNav.png' >"+
   "<h1 style= 'color: #BA882C;'>Saludos " + nombre.value + "</h1> "+
   "<h3 style= 'color: #9F9F9F;'>Gracias por suscribirse a SoundEv.</h3> "+
   " <p style= 'color: #fff; margin-bottom: 20px;'>Recibirá correos mensuales<br> Con información sobre próximos eventos, promociones, regalías exlusivas <br> Y personalizadas de acuerdo a su actividad.</p>"+
   " </div> ";

   Email.send({
    SecureToken: "e55464c7-f373-4102-8108-1267b9e34c45",
    //Host: "smtp.gmail.com",
   
    To : correo.value,
    From : "soundevutn@gmail.com",
    Subject : "Suscripción SoundEv",
    Body : miHtml,
    
})
.then(message => alert("Recibirá un correo pronto"));

terminos.checked= false;
nombre.value="";
correo.value="";
fecha.value="";
frecuencia.value="";
grado.value = "";
f.checked = false;
m.checked = false;







}






















function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
}

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleannos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleannos.getFullYear();
    var m = hoy.getMonth() - cumpleannos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleannos.getDate())) {
        edad--;
    }

    return edad;
}


function existeFecha(fecha){
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year,month,'0');
    if((day-0)>(date.getDate()-0)){
          return false;
    }
    return true;
}
function validarFechaMenorActual(date){
    var x=new Date();
    
    
    var fecha = date.split("-");
    
    x.setFullYear(fecha[0],fecha[1]-1,fecha[2]);
   
    var today = new Date();

    if (x >= today)
      return false;
    else
      return true;
}