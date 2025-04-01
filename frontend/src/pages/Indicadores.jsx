import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Indicadores() {
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    axios.get('https://mi-web-fastapi.onrender.com/indicadores')
      .then(res => setDatos(res.data))
      .catch(() => setDatos({ error: 'No se pudieron cargar los indicadores.' }))
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-purple-50 to-indigo-100">
      <h2 className="text-2xl font-bold mb-4">📈 Indicadores Económicos</h2>

      {!datos && <p>Cargando...</p>}

      {datos?.error && <p className="text-red-500">{datos.error}</p>}

      {datos && !datos.error && (
        <div className="bg-white rounded-xl shadow p-4">
          <p><strong>📅 Fecha:</strong> {datos.fecha}</p>
          <ul className="mt-4 space-y-2">
            <li>💰 <strong>UF:</strong> ${datos.uf}</li>
            <li>🧾 <strong>UTM:</strong> ${datos.utm}</li>
            <li>💵 <strong>Dólar observado:</strong> ${datos.dolar_observado}</li>
            <li>🤝 <strong>Dólar acuerdo:</strong> ${datos.dolar_acuerdo}</li>
            <li>🪙 <strong>Dólar informal:</strong> ${datos.dolar_informal}</li>
            <li>💶 <strong>Euro:</strong> ${datos.euro}</li>
            <li>📉 <strong>IPC:</strong> {datos.ipc} %</li>
            <li>🏦 <strong>TPM:</strong> {datos.tpm} %</li>
            <li>💼 <strong>Tasa colocación:</strong> {datos.tasa_colocacion} %</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Indicadores
