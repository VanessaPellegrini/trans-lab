//console.log("funciona");
$(document).ready(function(){

  var imprimirSaldo = function(saldo) {
    $(".cajaPapa").append('<div class="caja-amarilla">'+saldo.saldoTarjeta+'</div>');
  }

	console.log("holi soy el saldo, funciono c:");

  $("#calcular").click(function(e) {
    var saldo = $("#tarjeta").val();
    console.log(saldo)
    e.preventDefault();

    /*validar saldo*/
    if ($("#tarjeta").val() == '') {
      alert('Agrega un número de tarjeta..');
    }

      //localStorage.setItem("numTarjeta", $("#tarjeta").val());
    $.ajax({
      url : 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
      type : 'GET',
      datatype : 'json',
      data : {'bip': saldo}
    })
    .done(function(saldo){
      console.log(saldo);
      imprimirSaldo(saldo);
    })
    .fail(function(){
      alert("Hubo un problema por favor ingrese otra tarjeta");
      console.log("error");
    })
    //limpia la caja pero debe ir despues porque sino deja el value vacio y localStorage no guarda nada
    $("#tarjeta").val('');
  });
});