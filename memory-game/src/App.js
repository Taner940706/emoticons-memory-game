import './App.css';
import {useState} from 'react'

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

  const shuffleCards = () => {
    const shufledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
    setCards(shufledCards)
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>Emoticons Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="front image" />
              <img className="back" src="/images/cover.jpg" alt="cover image" />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
