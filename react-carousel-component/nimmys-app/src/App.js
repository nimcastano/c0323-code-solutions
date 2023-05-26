import './App.css';
import Container from './Container';

const players = [
  {
    id: 0,
    name: 'Kobe',
    img: '/players/youngKob.jpeg',
  },
  {
    id: 1,
    name: 'Mike',
    img: '/players/youngMike.jpeg',
  },
  {
    id: 2,
    name: 'Bron',
    img: '/players/youngBron.avif',
  },
  {
    id: 3,
    name: 'AI',
    img: '/players/youngAI.jpeg',
  },
  {
    id: 4,
    name: 'Shaq',
    img: '/players/youngShaq.webp',
  },
  {
    id: 5,
    name: 'KG',
    img: '/players/youngKev.jpeg',
  },
];

function App() {
  return (
    <div className="App">
      <Container imgs={players} />
    </div>
  );
}

export default App;
