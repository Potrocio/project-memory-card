import '../styles/gameboard.css'

export function Gameboard({cardOrder, cards}) {
    
    return(
        <div className='gameboard'>
            {cards[cardOrder[0]]}
            {cards[cardOrder[1]]}
            {cards[cardOrder[2]]}
            {cards[cardOrder[3]]}
            {cards[cardOrder[4]]}
        </div>
    )
}
