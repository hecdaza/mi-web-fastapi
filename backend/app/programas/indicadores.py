import requests
from datetime import datetime

API_KEY = "c5081d7caa54f9254c0247c87e9710ac157ded48"
BASE_URL = "https://api.cmfchile.cl/api-sbifv3/recursos_api"

def consulta_indicador(endpoint):
    try:
        url = f"{BASE_URL}/{endpoint}?apikey={API_KEY}&formato=json"
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return {"error": str(e)}

def valor(data, key1, key2):
    try:
        return data[key1][0][key2]
    except:
        return "No disponible"

def obtener_indicadores():
    try:
        return {
            "fecha": datetime.now().strftime("%d/%m/%Y"),
            "uf": valor(consulta_indicador("uf"), "UFs", "Valor"),
            "utm": valor(consulta_indicador("utm"), "UTMs", "Valor"),
            "dolar_observado": valor(consulta_indicador("dolar"), "Dolares", "Valor"),
            "dolar_acuerdo": valor(consulta_indicador("dolar_acuerdo"), "Dolares", "Valor"),
            "dolar_informal": valor(consulta_indicador("dolar_intercambio"), "Dolares", "Valor"),
            "euro": valor(consulta_indicador("euro"), "Euros", "Valor"),
            "ipc": valor(consulta_indicador("ipc"), "IPCs", "Valor"),
            "tpm": valor(consulta_indicador("tasaPoliticaMonetaria"), "TasaPoliticaMonetarias", "Valor"),
            "tasa_colocacion": valor(consulta_indicador("tasa_colocacion"), "Tasas", "Valor")
        }
    except Exception as e:
        return {"error": f"Error al obtener indicadores: {str(e)}"}
