/*
    index.js

    Lógica para el cliente
*/


// Se carga el script
$(document).ready(function(){
    // Para chequear por consola que el script se ejecutó
    console.log("Hola Mundo")

    let socket = new WebSocket("ws://localhost:8080");

    // Función para mostrar mensaje de conectado
    function show_connected() {
        // Informar por consola la conexión exitosa
        console.log("Conectado ");
        // Cambiar el estado de conexión a "conectado"
        $("#conn_state").text("conectado");
        $("#conn_state").css({
            "color":"green",
        });
        // Desvanecer y transformar en boton de chequear conexión
        $("#conn_state").fadeIn(1500, function(){
            $("#conn_state").fadeOut(1500);
        });
    }

    function show_disconnected() {
        // Informar por consola la falla en la conexión
        console.log("Problema de conexión, reconectando...");

        // Cambiar el estado de conexión a "reconectando..."
        $("#conn_state").text("reconectando...");
        $("#conn_state").css({
            "color":"red",
        });
        $("#conn_state").fadeIn(1500);
    }

    // Cuando se conecta al servidor webscocket
    socket.onopen = function(e) {
        show_connected();
    }

    // Cuando se pierde la conexión al servidor websocket
    socket.onclose = function(e) {
        show_disconnected();
    }


    // Manejo de eventos
    socket.onmessage = function(event) {
        console.log("[SERVER] "+event.data);
        // Mostrar mensaje de conectado si la respuesta fue OK
        if(event.data == "OK") {
            show_connected();
        }
    }

    // Para testear si el servidor ws funciona
    $("#ws_test").click(function() {
        console.log("[TEST] Testeando conexión con el servidor");
        socket.send("ws-test");
    });

});
