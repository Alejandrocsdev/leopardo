import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DarkModeProvider } from './components/DarkMode'
import Layout from './layouts'
import Home from './pages/Home'
import Doc from './pages/Doc'
import Introduction from './pages/features/Introduction'
import Routing from './pages/features/Routing'
import Middlewares from './pages/features/Middlewares'
import TemplateEngine from './pages/features/TemplateEngine'
import MySQL from './pages/features/MySQL'
import Firebase from './pages/features/Firebase'

function App() {
  return (
    <BrowserRouter basename="leopardo">
      <DarkModeProvider>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="doc" element={<Doc />}>
              <Route index element={<Introduction />} />
              <Route path="routing" element={<Routing />} />
              <Route path="middlewares" element={<Middlewares />} />
              <Route path="template-engine" element={<TemplateEngine />} />
              <Route path="mysql" element={<MySQL />} />
              <Route path="firebase" element={<Firebase />} />
            </Route>
          </Routes>
        </Layout>
      </DarkModeProvider>
    </BrowserRouter>
  )
}

export default App
