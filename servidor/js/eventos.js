var inicioApp = function(){
	var Aceptar = function(){
		var usuario=$("#txtUsuario").val();
		var nombre =$("#txtNombre").val();
		var clave=$("#txtClave").val();
		var parametros="opc=validaentrada"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&nombre="+nombre+
						"&aleatorio="+Math.random();
	if(usuario!="" && nombre!="" && clave!=""){
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
					if (response.respuesta == true){
						//Ocultamos el inicio
						$("#secInicio").hide("slow");
						//Aparecemos usuarios
						$("#frmUsuarios").show("slow");
						//cursor en el primer cuadro de texto
						$("#txtNombreUsuario").focus();
					}else{
						alert("usuario o clave incorrecta(s)");
					}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
	}
	var buscarUsuario = function(){
		var usuario = $("txtNombreUsuario").val();
		var parametros = "opc=buscarUsuario"+"&usuario="+usuario+"&aleatorio="+Math.random();

		if(usuario != ""){
			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/buscarusuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					$("#txtNombre").val(response.nombre);
					$("#txtClaveUsuario").val(response.nombre);
				}else{
					$("#txtNombre").focus();
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});

		}
	}
	var tecladoNombreUsuario = function(tecla){
		if(tecla.which == 13){ //enter

		}
	}
	var Guardar = function(){
		var usuario=$("#textNombreUsuario").val();
		var nombre=$("#textNombre").val();
		var clave=$("#textClaveUsuario").val();
		if (Usuario!="" && nombre!="" && clave!=""){
			$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/guardarusuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					alert("Datos guardados correctamente");
					$("#frmUsuarios > input").val("");
				}else{
					alert("Ocurrió un error, intente de nuevo más tarde");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){

			}
		});
		}else{
			alert("Llene todos los campos");
		}
	}
	var Borrar = function(){
		var usuario = $("#txtNombreUsuario").val();
		var nombre  = $("#txtNombre").val();
		var pregunta = prompt("Seguro de borrar a "+nombre+"? (si/no", "no");

		if (pregunta != null && pregunta == "si"){
			//Aquí va el AJAX . . . . 
		}

	}

	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",tecladoNombreUsuario);
	$("#btnGuardar").on("click",Guardar);
}
}
$(document).ready(inicioApp);