import '../styles/game-data.css'

export default function GameData({score, highScore}) {
    return(
        <div className='game-data'>
            <div className='objective'>Select cards, just don't select the same card twice. Goodluck!</div>
            <div className='score'>Score: {score}</div>
            <div className='high-score'>High Score: {highScore}</div>
        </div>
    )
}