import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DarkModeProvider } from './components/DarkMode'
import Layout from './layouts'
import Home from './pages/Home'
import Doc from './pages/Doc'
import Introduction from './pages/Introduction'
import Routing from './pages/Routing'

function App() {
  return (
    <BrowserRouter basename="/leopardo">
      <DarkModeProvider>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/doc" element={<Doc />}>
              <Route index element={<Introduction />} />
              <Route path="routing" element={<Routing />} />
            </Route>
          </Routes>
        </Layout>
      </DarkModeProvider>
    </BrowserRouter>
  )
}

export default App
