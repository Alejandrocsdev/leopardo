import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DarkModeProvider } from './components/DarkMode'
import Layout from './layouts'
import Home from './pages/Home'
import Doc from './pages/Doc'

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter basename="/leopardo">
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/doc" element={<Doc />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App
