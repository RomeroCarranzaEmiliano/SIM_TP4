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


    // Objeto de la tabla
    Table = function(){
        this.result = 0
        this.rows = [
            [1, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [10, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [2, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
            [14, 0.6, 10, 0.5, 0.5, 10, 0.5, 10, 40, 0, 0, 40],
        ]
    }

    table = new Table();
    var i;
    for(i=0; i<table.rows.length; i++) {
        row_data = table.rows[i];
        new_row = `<tr>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
                 <td>${row_data[0]}</td>
        </tr>`;
        $("#result_table").append(new_row);
    }


    // Para mostrar la sombra al escrollear
    $(".display").scroll(function(){
        if ($(".display").scrollTop() == 0){
            $(".options").css("box-shadow","0px 10px 15px -8px transparent");
        } else {
            $(".options").css("box-shadow","0px 10px 15px -8px black");
        }
    });

});
