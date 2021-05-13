"""
    semanas.py

"""

# IMPORTS #########################################################################################
import random
###################################################################################################


def calcular(actividad, rnd):
    """
        Recibe una actividad(A, B, C o D) y un número random rnd,
        devuelve la cantidad de semanas calculada en base a la actividad
        y el rnd
    """
    semanas = -1            #<----- setee la semana en para q funcione la excepecion

    if actividad == "a" or actividad == "A":
        if round(rnd, 2) < 0.35:
            semanas = 6
        elif round(rnd, 2) < 0.60:
            semanas = 7
        elif round(rnd, 2) < 0.85:
            semanas = 5
        else:
            semanas = 8
    elif actividad == "b" or actividad == "B":
        if round(rnd, 2) < 0.55:
            semanas = 5
        elif round(rnd, 2) < 0.80:
            semanas = 7
        else:
            semanas = 3
    elif actividad == "c" or actividad == "C":
        if round(rnd, 2) < 0.40:
            semanas = 14
        elif round(rnd, 2) < 0.65:
            semanas = 12
        elif round(rnd, 2) < 0.85:
            semanas = 16
        elif round(rnd, 2) < 0.95:
            semanas = 10
        else:
            semanas = 18
    elif actividad == "d" or actividad == "D":
        if round(rnd, 2) < 0.60:
            semanas = 8
        else:
            semanas = 10

    if semanas == -1:
        raise Exception("[ERROR] No se reconoció la actividad ingresada como parametro")
    else:
        return semanas

