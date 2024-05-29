import '../styles/gameboard.css'
import { useState } from 'react'
import { updateScore, updateHighScore } from './game-data';
// import { photos } from '../main'

export function randomizeCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const element = array[i];
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateCard(photo, className, handleClick, id) {
    const photoUrl = `url('${photo}')`
    return (
        <div 
            className={className} 
            key={id}
            id = {id}
            onClick={event => handleClick(event)}
            style={{backgroundImage: photoUrl}}
        ></div>
    )
}

const photos = [
    "https://i.pinimg.com/564x/4f/4f/e7/4f4fe7b7cea561fdf710dcf9bf0f015e.jpg",
    "https://ae01.alicdn.com/kf/S1e8d9174481b4ae4864db2d04ba561a5y.jpg_640x640Q90.jpg_.webp",
    "https://i.pinimg.com/originals/03/37/2d/03372d0be68a8083c093d58fa965720b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8dNP_2UhOgelTjXs_W6J66s1qeg3zGs1RA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BbrqXuLGFM8CUSKI52DC4tdgCTjtk_jZlQ&s"
]


export function Gameboard() {
    let cards = [
        // change keys later when using the actual API
        generateCard(photos[0], 'iron-man', handleClick, 'ironMan'),
        generateCard(photos[1], 'hulk', handleClick, 'hulk'),
        generateCard(photos[2], 'spider-man', handleClick, 'spiderMan'),
        generateCard(photos[3], 'captain-america', handleClick, 'captainAmerica'),
        generateCard(photos[4], 'scarlet-witch', handleClick, 'scarletWitch'),
    ]

    randomizeCards(cards)
    const [cardOrder, setCardOrder] = useState(cards)
    const [heroesSelected, setHeroesSelected] = useState({
        ironMan: false,
        hulk: false,
        spiderMan: false,
        captainAmerica: false,
        scarletWitch: false
    })
    
    function handleClick(event) {
        console.log('You clicked it')
        randomizeCards(cards)
        const cardsObject = {
            [0]:cards[0],
            [1]:cards[1],
            [2]:cards[2],
            [3]:cards[3],
            [4]:cards[4]
        }
        setCardOrder(cardsObject);
        if (heroesSelected[event.target.id]) {
            console.log('you already clicked it!')
        } else {
            setHeroesSelected(heroesSelected, heroesSelected[event.target.id]= true);
            updateScore()
            updateHighScore()
        }
    }
    
    return(
        <div className='gameboard'>
            {cardOrder[0]}
            {cardOrder[1]}
            {cardOrder[2]}
            {cardOrder[3]}
            {cardOrder[4]}
        </div>
    )
}
