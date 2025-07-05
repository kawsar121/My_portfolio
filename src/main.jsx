import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainLayOut from './LayOut/MainLayOut.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import Provider from './Context/Provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
