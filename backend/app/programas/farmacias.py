import requests
from datetime import datetime

URL = "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php"

comunas_objetivo = {
    "TALCA": ["TALCA", "TALCA CENTRO", "TALCA PERIMETRAL", "TALCA SUR"],
    "LONGAVI": ["LONGAVI"],
    "LINARES": ["LINARES"]
}

def obtener_farmacias():
    try:
        response = requests.get(URL, timeout=10)
        response.raise_for_status()
        data = response.json()

        resultado = {}

        for comuna_base, nombres_equivalentes in comunas_objetivo.items():
            farmacias = [
                f for f in data
                if f.get("comuna_nombre", "").strip().upper() in [n.upper() for n in nombres_equivalentes]
            ]
            resultado[comuna_base] = {
                "fecha": str(datetime.now().date()),
                "total": len(farmacias),
                "farmacias": farmacias
            }

        return resultado

    except Exception as e:
        return {"error": f"Error al obtener farmacias: {str(e)}"}
