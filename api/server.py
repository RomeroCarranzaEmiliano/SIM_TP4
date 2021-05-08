"""
    server.py

    Servidor websocket para servir la api al cliente en el navegador
"""

import asyncio
import websockets

""" <- ignorar esto
async def hello(websocket, path):
    name = await websocket.recv()
    print(f"< {name}")
    greeting = f"Hello {name}!"

    await websocket.send(greeting)
    print(f"> {greeting}")
"""


async def server(websocket, path):
    """
        Función que define al servidor websocket
    """

    # Loop principal para mantener la conexión
    while(True):
        # Se recibe el evento
        event = await websocket.recv()

        # Manejo de un evento ws-test a modo de prueba
        if event == "ws-test":
            print("[TEST] ws api tested -> OK")
            await websocket.send("OK")

        print("[EVENT] Incoming event")


def run():
    """
        Iniciar el servidor en localhost:8080
    """
    print("Iniciando servidor...")

    start_server = websockets.serve(server, "localhost", 8080)
    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()


run() # <- solo para testear, borrar o se ejecutará automaticamente al importar en __main__.py
