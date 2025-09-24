import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstilosGlobal, { Container } from './styles'

import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/home'
import Cadastro from './pages/cadastro'

const rotes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstilosGlobal />
      <Container>
        <RouterProvider router={rotes} />
      </Container>
    </Provider>
  )
}
export default App
