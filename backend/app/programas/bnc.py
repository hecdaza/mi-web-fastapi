import requests
from bs4 import BeautifulSoup

URL = "https://www.leychile.cl/Consulta/obtxml?opt=3&cantidad=10"

def obtener_leyes():
    response = requests.get(URL)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, "lxml-xml")
    leyes = soup.find_all("NORMA")

    lista = []
    for ley in leyes:
        lista.append({
            "numero": ley.find('NUMERO').text if ley.find('NUMERO') else "No disponible",
            "fecha_pub": ley.find('FECHA_PUBLICACION').text if ley.find('FECHA_PUBLICACION') else "No disponible",
            "titulo": ley.find('TITULO').text if ley.find('TITULO') else "No disponible",
            "tipo": ley.find('TIPO').text if ley.find('TIPO') else "No disponible",
            "organismo": ley.find('ORGANISMO').text if ley.find('ORGANISMO') else "No disponible",
        })

    return lista
