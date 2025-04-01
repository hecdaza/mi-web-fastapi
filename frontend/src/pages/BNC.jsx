import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BNC() {
  const [leyes, setLeyes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/bnc/')
      .then(res => setLeyes(res.data))
      .catch(() => setLeyes(null))
  }, [])

  return (
    <div className="min-h-screen p-6 bg-gradient-to-tr from-yellow-50 to-amber-100">
      <h2 className="text-2xl font-bold mb-4">📜 Últimas Leyes Publicadas</h2>

      {!leyes && <p className="text-red-500">No se pudieron cargar las leyes.</p>}

      {leyes?.length > 0 && leyes.map((ley, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-4 mb-4">
          <h3 className="font-semibold text-lg mb-1">Ley N° {ley.numero}</h3>
          <p><strong>📅 Fecha:</strong> {ley.fecha_pub}</p>
          <p><strong>🏛 Tipo:</strong> {ley.tipo}</p>
          <p><strong>📌 Organismo:</strong> {ley.organismo}</p>
          <p><strong>📝 Título:</strong> {ley.titulo}</p>
        </div>
      ))}
    </div>
  )
}

export default BNC
