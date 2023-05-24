import './App.css';
import {useEffect, useState} from 'react'
import Card from './components/Card';

const cardImages = [
  {"src": "/images/face-with-tears-of-joy.png", matched: false },
  {"src": "/images/fearful.png", matched: false},
  {"src": "/images/love-hearts-eyes.png", matched: false},
  {"src": "/images/sad-crying.png", matched: false},
  {"src": "/images/smiley.png", matched: false},
  {"src": "/images/smilling-face-with-sunglasses.png", matched: false},
  {"src": "/images/amused-face.png", matched: false},
  {"src": "/images/wink.png", matched: false},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    const shufledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
    setCards(shufledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card): setChoiceOne(card)
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo){
      if (choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(
            card => {
              if (card.src === choiceOne.src){
                return {...card, matched: true}
              }
              else{
                return card
              }
            }
          )
        })
        resetTurn()
      }
      else{
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Emoticons Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (

      <Card key={card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>
    </div>
  );
}

export default App;
