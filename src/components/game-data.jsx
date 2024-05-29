import '../styles/game-data.css'
import { useState } from 'react'

export default function GameData() {
    const [score, setScore] = useState('0')
    const [highScore, setHighScore] = useState('0')

    return(
        <div className='game-data'>
            <div className='objective'>Select a card, but don't select the same card twice. Goodluck!</div>
            <div className='score'>Score: {score} / 5</div>
            <div className='high-score'>High Score: {highScore}</div>
        </div>
    )
}