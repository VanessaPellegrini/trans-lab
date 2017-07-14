//console.log("funciona");
$(document).ready(function(){
	//console.log("hola soy perfil");
  //show items saved in local storage
  $("#tarjeta").html(localStorage.getItem("numTarjeta"));

  $("#agregarTarjeta").on('click', function(e) {
    function isNumber(number) {
        var regex = /^[0-9]+$/;
      return regex.test(number);
    };
    e.preventDefault();
    if ($("#tarjeta").val() == '') {
      alert('Agrega un nuevo número de tarjeta..');
    }else {
      $("ul").prepend('<li>'+ $("#tarjeta").val() + '</li>');
      localStorage.setItem("numTarjeta", $("#tarjeta").val());
      e.preventDefault();
      //limpia la caja pero debe ir despues porque sino deja el value vacio y localStorage no guarda nada
      $("#tarjeta").val('');
      };
    /*if (isNumber($("#tarjeta").val()) == false ) {
      e.preventDefault();
      alert('Solo números..');
    }*/
  });
  console.log(localStorage);
});
