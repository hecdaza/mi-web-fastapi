import requests
from datetime import datetime, timedelta

API_KEY = 'd7cd35cf5c754103ba1190232252603'
BASE_URL = 'http://api.weatherapi.com/v1/forecast.json'

def obtener_clima(comuna):
    mañana = (datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')

    params = {
        'key': API_KEY,
        'q': comuna + ", Chile",
        'days': 2,
        'aqi': 'no',
        'alerts': 'no'
    }

    response = requests.get(BASE_URL, params=params)
    if response.status_code != 200:
        return {"error": f"Error al obtener datos para {comuna}"}

    data = response.json()
    hoy = data['forecast']['forecastday'][0]
    actual = data['current']

    resultado = {
        "comuna": comuna,
        "hoy": {
            "fecha": hoy['date'],
            "condicion": actual['condition']['text'],
            "temp_actual": actual['temp_c'],
            "sensacion": actual['feelslike_c'],
            "temp_max": hoy['day']['maxtemp_c'],
            "temp_min": hoy['day']['mintemp_c'],
            "humedad": actual['humidity'],
            "viento": actual['wind_kph']
        },
        "manana": None
    }

    for dia in data['forecast']['forecastday']:
        if dia['date'] == mañana:
            resultado["manana"] = {
                "fecha": mañana,
                "condicion": dia['day']['condition']['text'],
                "temp_max": dia['day']['maxtemp_c'],
                "temp_min": dia['day']['mintemp_c'],
                "lluvia": dia['day']['daily_chance_of_rain'],
                "viento_max": dia['day']['maxwind_kph']
            }

    return resultado
