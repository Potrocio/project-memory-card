import '../styles/game-data.css'
import { useState } from 'react'

let score = '1';
let highScore = '0';

export function updateScore() {
    console.log(score)
    score = +score;
    score += 1;
}

export function updateHighScore() {
    highScore = +highScore;
    highScore += 1;
    console.log(highScore)
}

export default function GameData() {
    // const [score, setScore] = useState(currentScore)
    // const [highScore, setHighScore] = useState(currentHighScore)

    return(
        <div className='game-data'>
            <div className='objective'>Select cards, just don't select the same card twice. Goodluck!</div>
            <div className='score'>Score: {score} / 5</div>
            <div className='high-score'>High Score: {highScore}</div>
        </div>
    )
}