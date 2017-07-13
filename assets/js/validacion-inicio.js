//console.log("funciona");
$(document).ready(function(){
	$("#submitButton").click(function(e){
		console.log("hola");
		function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 		 return regex.test(email);
		};

		var error = "";
		var vacio = "";

		
		if ($("#email").val() == "") {

			vacio += "<br>Email";
		}
		
		if ($("#pass").val() == "") {

			vacio += "<br>Contraseña";
		}

		if (vacio != "") {
			error += "<p>El siguiente campo se encuentra vacío" + vacio;
		}

		if ($("#pass").val().length != 8) {
			e.preventDefault();
			error += "<p> La contraseña no es válida, favor ingresar 8 carácteres</p>";
		}

		if (isEmail($("#email").val()) == false ) {
			e.preventDefault();
			error += "<p>Your Email address is not valid</p>";
		}

		if (error != "") {
			$("#error").html(error);
		} else {
			$("#error").hide();
			e.preventDefault();
			window.location = "index-menu.html";
		}
	});
});