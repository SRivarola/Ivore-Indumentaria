$('#send').on('click', (e) =>{
    e.preventDefault();
    enviarMail();
    $('#formContact').trigger("reset")
});

function enviarMail(){
    $('.alertaNombre').css('display', 'none');
    $('.alertaMail').css('display', 'none');
    $('alertaTel').css('display', 'none');
    $('.alertaMsj').css('display', 'none');
    $('.alertaError').css('display', 'none');
    $('.alertaExito').css('display', 'none');

    let nombre = $("#name").val();
    let email = $("#email").val();
    let telefono = $("#tel").val();
    let mensaje = $("#message").val();
    let valido = 1;

    let validacionCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(nombre.length <2){
        $('.alertaNombre').css('display', 'block')
        valido = 0;
    }
    if(!validacionCorreo.test(email)){
        $('.alertaMail').css('display', 'block')
        valido = 0;
    }
    if(telefono.length < 8){
        $('.alertaTel').css('display', 'block')
        valido = 0;
    }
    if(mensaje.length <= 5){
        $('.alertaMsj').css('display', 'block')
        valido = 0;
    }
    if (valido == 1){
        let datos = 'nombre=' + nombre + '&correo=' + email + '&telefono=' + telefono + '&mensaje=' + mensaje;
        $.ajax({
			type: "POST",
			url: "../formulario.php",
			data: datos,
			success: function(res) {
                if(parseInt(res) == 1){
                    $('.alertaExito').css('display', 'block')
                } else{
                    $('.alertaError').css('display', 'block')
                }
			},
			error: function(res) {
                    $('.alertaError').css('display', 'block')
			}
		});
    }
}


