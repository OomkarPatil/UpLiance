import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './store/store'
import MainLayout from './components/MainLayout'
import HomePage from './pages/HomePage'
import Counter from './components/Counter'
import UserForm from './components/UserForm'
import RichTextEditor from './components/RichTextEditor'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/editor" element={<RichTextEditor />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App