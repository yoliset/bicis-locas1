function validateForm(){
	var nombre = document.forms["myForm"]["nombre"].value;
	var apellido = document.forms["myForm"]["apellido"].value;
	var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
	var estado = true;
	console.log(nombre)
	if (/^[A-Z][a-z]+$/.test(nombre) === false) {
		alert('El nombre es incorrecto, debe tener la primera letra mayúscula');
		estado = false;
	}
	if (/^[A-Z][a-z]+$/.test(apellido) === false) {
		alert('El apellido es incorrecto, debe tener la primera letra mayúscula');
		estado = false;
	}
	if (/^\S+@\S+\.\S+$/.test(email) === false) {
		alert('email incorrecto')
		estado = false;
	}
    if (password.length>=6 === false) {
		alert('El password debe tener 6 carácteres')
		estado = false;
	}
    if (password =="123456" ||password == "098754") {
		alert('El password debe tener letras y números')
		estado = false;
	}

	if (estado)
		alert('todo bien')
	/* Escribe tú código aquí */
}