console.log("funciona calcular");
$(document).ready(function(){

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

  var calcularPasaje = function(saldo){
    $('select#tarifa').on('change',function(saldo){
      var valor = $(this).val();
      console.log(valor);
        if(valor == 1){
          var resultado = saldo.saldoTarjeta - 640;
          console.log(resultado);
        }

        /*if(valor == 1){
          saldo.saldoTarjeta.parseInt() - 680;
        }

        if(valor == 3){
          saldo.saldoTarjeta.parseInt() - 740;
        }*/

  };
calcularPasaje();

});