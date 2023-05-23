import './App.css';
import {useState} from 'react'
import Card from './components/Card';

const cardImages = [
  {"src": "/images/face-with-tears-of-joy.png"},
  {"src": "/images/fearful.png"},
  {"src": "/images/love-hearts-eyes.png"},
  {"src": "/images/sad-crying.png"},
  {"src": "/images/smiley.png"},
  {"src": "/images/smilling-face-with-sunglasses.png"},
  {"src": "/images/amused-face.png"},
  {"src": "/images/wink.png"},
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
