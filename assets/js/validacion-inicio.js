//console.log("funciona");
$(document).ready(function(){
	$("#caja-imprimir").html(localStorage.getItem("emailLocal"));
	//$("#email-box").append('<p>'+localStorage.getItem("localEmail")+'<p>');
	/*var mostrarEmail = function(){
		//show items saved in local storage
  		return $("#email").value(localStorage.getItem("localEmail"));
	}
	console.log(mostrarEmail);*/

	$("#submitButton").click(function(e){
		console.log("welcome to the menu");

		function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 		 return regex.test(email);
		};
		function isPass(pass) {
  			var regex = /^[0-9]+$/;
 		 	return regex.test(pass);
		};
		console.log(isPass() + " FALSE = NO ES UN NUMERO, TRUE = EUREKA");
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

		if ($("#pass").val().length > 8) {
			e.preventDefault();
			error += "<p> La contraseña no es válida, favor ingresar hasta 8 carácteres</p>";
		}

		if (isEmail($("#email").val()) == false ) {
			e.preventDefault();
			error += "<p>El email es incorrecto</p>";
		}
		if (isEmail($("#email").val()) == true ) {
			e.preventDefault();
			localStorage.setItem("emailLocal", $("#email").val());
		}
		console.log(localStorage)

		if (isPass($("#pass").val()) == false ) {
			e.preventDefault();
			error += "<p>La contraseña es incorrecta</p>";
		}

		if (error != "") {
			$("#error").html(error);
		} else {
			$("#error").hide();
			e.preventDefault();
			window.location = "index-menu.html";

		}
	});
	//console.log(localStorage)
});