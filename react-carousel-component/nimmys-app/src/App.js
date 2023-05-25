import './App.css';
import Container from './Container';

const players = [
  {
    key: 0,
    name: 'Kobe',
    img: './players/youngKob.jpeg',
  },
  {
    key: 1,
    name: 'Mike',
    img: './players/youngMike.jpeg',
  },
  {
    key: 2,
    name: 'Bron',
    img: './players/youngBron.avif',
  },
  {
    key: 3,
    name: 'AI',
    img: './players/youngAI.jpeg',
  },
  {
    key: 4,
    name: 'Shaq',
    img: './players/youngShaq.webp',
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
