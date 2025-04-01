import React, { useState } from 'react'
import axios from 'axios'

function Clima() {
  const [comuna, setComuna] = useState('Talca')
  const [datos, setDatos] = useState(null)

  const buscarClima = async () => {
    try {
      const res = await axios.get(`https://mi-web-fastapi.onrender.com/clima/${comuna}`)
      setDatos(res.data)
    } catch (err) {
      setDatos({ error: 'No se pudo obtener el clima.' })
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-blue-50 to-cyan-100">
      <h2 className="text-2xl font-bold mb-4">🌦 Clima por Comuna</h2>
      <div className="mb-4">
        <input
          type="text"
          value={comuna}
          onChange={(e) => setComuna(e.target.value)}
          className="border p-2 rounded mr-2"
          placeholder="Ej: Talca"
        />
        <button onClick={buscarClima} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Buscar
        </button>
      </div>

      {datos && !datos.error && (
        <div className="bg-white rounded-xl shadow p-4 mt-4">
          <h3 className="text-xl font-semibold">{datos.comuna}</h3>
          <p><strong>Hoy:</strong> {datos.hoy.fecha}</p>
          <ul className="mb-2">
            <li>🌤️ {datos.hoy.condicion}</li>
            <li>🌡️ Temp actual: {datos.hoy.temp_actual}°C (sensación {datos.hoy.sensacion}°C)</li>
            <li>📈 Máx: {datos.hoy.temp_max}°C / Mín: {datos.hoy.temp_min}°C</li>
            <li>💧 Humedad: {datos.hoy.humedad}%</li>
            <li>🌬 Viento: {datos.hoy.viento} km/h</li>
          </ul>
          {datos.manana && (
            <>
              <p><strong>Mañana:</strong> {datos.manana.fecha}</p>
              <ul>
                <li>⛅ {datos.manana.condicion}</li>
                <li>🌡️ Máx: {datos.manana.temp_max}°C / Mín: {datos.manana.temp_min}°C</li>
                <li>🌧️ Lluvia: {datos.manana.lluvia}%</li>
                <li>🌬 Viento máx: {datos.manana.viento_max} km/h</li>
              </ul>
            </>
          )}
        </div>
      )}

      {datos?.error && <p className="text-red-500 mt-4">{datos.error}</p>}
    </div>
  )
}

export default Clima
