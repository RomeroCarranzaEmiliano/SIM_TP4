"""
    events.py

    Diccionario de eventos apuntando a su respectiva función.

    Para agregar una nueva funcionalidad, se debe crear una función que haga lo pertinente y luego
    agregar esa función al diccionario events = {}

"""

# IMPORTS #########################################################################################
import negocio.montecarlo
###################################################################################################


# Funciones
# -------------------------------------------------------------------------------------------------
def ws_test():
    """
        retorna un "OK", esta definición de evento es redundante, es solo para ilustrar
    """
    return "OK"

def calcular_montecarlo():


# Diccionario de eventos
# -------------------------------------------------------------------------------------------------
events = {
    "ws-test": ws_test,
}


