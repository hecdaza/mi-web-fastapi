import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const cards = [
  { title: '🌦 Clima', path: '/clima', color: 'bg-blue-400' },
  { title: '💊 Farmacias', path: '/farmacias', color: 'bg-green-400' },
  { title: '📜 Leyes (BNC)', path: '/bnc', color: 'bg-yellow-400' },
  { title: '📈 Indicadores', path: '/indicadores', color: 'bg-purple-400' },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-pink-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Panel de Programas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(card.path)}
            className={`cursor-pointer rounded-xl p-6 text-white shadow-lg text-center text-xl ${card.color}`}
          >
            {card.title}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Home
