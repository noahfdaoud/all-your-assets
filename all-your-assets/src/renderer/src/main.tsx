import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Tile from './Tile'

ReactDOM.createRoot(document.getElementById('root2') as HTMLElement).render(
  <React.StrictMode>
    <Tile />
    <Tile />
    <Tile />
  </React.StrictMode>

)
