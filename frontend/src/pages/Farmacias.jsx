import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Farmacias() {
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:8000/farmacias/')
      .then(res => setDatos(res.data))
      .catch(() => setDatos({ error: 'No se pudieron cargar las farmacias.' }))
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-green-50 to-emerald-100">
      <h2 className="text-2xl font-bold mb-4">💊 Farmacias de Turno</h2>
      {!datos && <p>Cargando...</p>}

      {datos?.error && <p className="text-red-500">{datos.error}</p>}

      {datos && !datos.error && Object.entries(datos).map(([comuna, info]) => (
        <div key={comuna} className="bg-white rounded-xl shadow p-4 mb-6">
          <h3 className="text-xl font-semibold text-green-600">{comuna}</h3>
          <p className="text-sm mb-2">Fecha: {info.fecha}</p>
          {info.farmacias.length > 0 ? (
            <ul className="space-y-2">
              {info.farmacias.map((f, idx) => (
                <li key={idx} className="border-b pb-2">
                  <strong>{f.local_nombre}</strong><br />
                  📍 {f.local_direccion}<br />
                  ☎️ {f.local_telefono}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay farmacias de turno registradas.</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Farmacias
