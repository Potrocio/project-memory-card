import Title from './title.jsx'
import GameData from './game-data.jsx'
import {Gameboard} from './gameboard.jsx'
import { useState, useEffect } from 'react'
import { GenerateCard } from './generate-card.jsx'


export default function PageContent() {
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState({})
    const [cardsClicked, setCardsClicked] = useState({
        charizard: false,
        mewtwo: false,
        primeape: false,
        gengar: false,
        psyduck: false
    })

    const photos = [];
    let executed = false;
    const cardOrder = ['charizard','mewtwo','primeape','gengar','psyduck'];


    function randomizeCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const element = array[i];
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    useEffect(() => {
        //"If executed" is used so that react strict mode doesn't
        //render my useEffect twice
        if (!executed) {
            try{
                async function getPokemonImages(pokemon) {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {mode: 'cors'})
                    const data = await response.json();
                    const picture = data.sprites.other['official-artwork']['front_default'];
                    photos.push(picture);
                }
                
                async function populatePhotos() {
                    await getPokemonImages('charizard')
                    await getPokemonImages('mewtwo')
                    await getPokemonImages('primeape')
                    await getPokemonImages('gengar')
                    await getPokemonImages('psyduck')
                    setCards({
                        charizard: <GenerateCard photo = {photos[0]} className = {'charizard'} handleClick={handleClick} id = {'charizard'} />,
                        mewtwo: <GenerateCard photo = {photos[1]} className = {'mewtwo'} handleClick={handleClick} id = {'mewtwo'} />,
                        primeape: <GenerateCard photo = {photos[2]} className = {'primeape'} handleClick={handleClick} id = {'primeape'} />,
                        gengar: <GenerateCard photo = {photos[3]} className = {'gengar'} handleClick={handleClick} id = {'gengar'} />,
                        psyduck: <GenerateCard photo = {photos[4]} className = {'psyduck'} handleClick={handleClick} id = {'psyduck'} />
                    })              
                }
                populatePhotos()
                executed = true;
            } catch (error){
                alert(error)
            }
        }
    }, [])

    randomizeCards(cardOrder)

    const resetClicks = {
        charizard: false,
        mewtwo: false,
        primeape: false,
        gengar: false,
        psyduck: false
    }

    function handleClick(event) {
        randomizeCards(cardOrder)
        console.log(event.target.id)

        setCardsClicked(prevState => {
            let updatedCardsClicked = {...prevState};

            if (updatedCardsClicked[event.target.id]) {
                updatedCardsClicked = resetClicks
                setScore(0)
                alert('Thanks for playing!')
            } else {
                setScore(prevState => {
                    let updatedScore = prevState
                    updatedScore += 1;
                    setHighScore(prevState => {
                        let updatedHighScore = prevState
                        if(updatedScore > updatedHighScore) {
                            updatedHighScore = updatedScore;
                        }
                        return updatedHighScore;
                    })
                    return updatedScore;
                })
                updatedCardsClicked[event.target.id] = true;    
            }
            return updatedCardsClicked;
        })
    }

    return (
    <>
        <Title />
        <GameData 
            score = {score}
            highScore = {highScore}
        />
        <Gameboard 
            cardOrder = {cardOrder}
            cards = {cards}
        /> 
    </>
    )
}