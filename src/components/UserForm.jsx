import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData, setUnsavedChanges } from '../store/slices/userSlice'

export default function UserForm() {
  const dispatch = useDispatch()
  const { hasUnsavedChanges } = useSelector((state) => state.user)
  const [showModal, setShowModal] = useState(true)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    address: '',
    phone: '',
  })

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault()
        e.returnValue = ''
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [hasUnsavedChanges])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    dispatch(setUnsavedChanges(true))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUserData = {
      ...formData,
      id: crypto.randomUUID(),
    }
    dispatch(setUserData(newUserData))
    localStorage.setItem('userData', JSON.stringify(newUserData))
    
    // Show success message
    const toast = document.getElementById('toast')
    toast.classList.remove('hidden')
    setTimeout(() => {
      toast.classList.add('hidden')
    }, 3000)
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-1 block w-full rounded-md py-2 px-[10px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 block w-full rounded-md py-2 px-[10px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="mt-1 block w-full rounded-md py-2 px-[10px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="mt-1 block w-full rounded-md py-2 px-[10px] border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </form>

      {/* Success Toast */}
      <div
        id="toast"
        className="hidden fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        User data saved successfully
      </div>

      {/* Unsaved Changes Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-medium mb-4">Unsaved Changes</h3>
            <p className="mb-4">You have unsaved changes. Are you sure you want to leave?</p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Stay
              </button>
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => {
                  dispatch(setUnsavedChanges(false))
                  setShowModal(false)
                }}
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}