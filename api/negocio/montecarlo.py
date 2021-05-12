"""

"""

# IMPORTS #########################################################################################
import negocio.semana as semana
import random
###################################################################################################


def calcular_linea():
    """
        Genera una linea de montecarlo y la devuelve en el siguiente formato:
        [rnd_a, semanas_a, rnd_b, semanas_b, rnd_c, semanas_c, rnd_d, semanas_d]
    """

    linea = [0]

    actividades = "ABCD"
    for actividad in actividades:
        # Calcular rnd
        rnd = random.random()

        # Calcular semanas
        semanas_calculadas = semana.calcular(actividad, rnd)

        # Agregar a la linea
        linea.append(round(rnd, 3))
        linea.append(semanas_calculadas)

    # Agregar el resto de campos de la linea
    linea.append(0)
    linea.append(0)
    linea.append(0)

    # Solo para testing, borrar en la versión final
    """
    linea = [0, random.random(), random.randint(5, 10), random.random(), random.randint(5, 10),
             random.random(), random.randint(5, 10), random.random(), random.randint(5, 10),
             0, 0, 0]
    """

    return linea


def calcular(menos_de, cantidad, desde, hasta):
    """
        Recibe 3 int como parametros:
            menos_de
            cantidad
            desde
            hasta
    """

    tabla = []
    linea = []
    acumulado_anterior = 0
    for i in range(cantidad):
        # Obtener la siguiente linea de aleatorios
        linea = calcular_linea()

        # Calcular total de semanas
        total = linea[2]+linea[4]+linea[6]+linea[8]

        # Calcular exito
        exito = 0
        if total < menos_de:
            exito = 1

        # Calcular acumulado
        acumulado = acumulado_anterior + exito
        acumulado_anterior = acumulado

        # Completar la linea de montecarlo con el nro de experimento, exitos y acumulado
        linea[0] = i+1
        linea[9] = total
        linea[10] = exito
        linea[11] = acumulado

        # Si se encuentra entre las lineas a mostrar, guardar en vector en la tabla
        if i+1 >= desde and i+1 <= hasta:
            tabla.append(linea)

    # Se calcula el resultado
    resultado = (linea[-1]/cantidad)*100

    # Agregar la ultima linea a la tabla a mostrar
    tabla.append(linea)

    respuesta = [resultado, tabla]

    return respuesta

