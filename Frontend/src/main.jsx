import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from "react-redux"
import store from "./redux/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store} >
      <main className='dark'>
        <App />
      </main>
      </Provider>
    </NextUIProvider>
  </React.StrictMode>,
)
