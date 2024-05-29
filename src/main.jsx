import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Title from './components/title'
import GameData from './components/game-data'
import {Gameboard} from './components/gameboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title />
    <GameData />
    <Gameboard />
  </React.StrictMode>,
)
