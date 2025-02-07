import { motion } from 'framer-motion'
import { Plus, Minus, RotateCcw } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../store/slices/counterSlice'

export default function Counter() {
  const dispatch = useDispatch()
  const { value, backgroundColor } = useSelector((state) => state.counter)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
      style={{ background: backgroundColor }}
    >
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <div className="text-6xl font-bold text-gray-800 text-center mb-8">
          {value}
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={20} />
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Minus size={20} />
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <RotateCcw size={20} />
            Reset
          </button>
        </div>
      </div>      
    </motion.div>
  )
}