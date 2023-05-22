// import logo from './logo.svg';
import './App.css';

function CustomButton({ text, color, onCustomClick }) {
  return (
    <button
      onClick={() => onCustomClick(text)}
      style={{
        background: color,
      }}>
      Click Me!
    </button>
  );
}

function App() {
  const handleCustomClick = (text) => {
    alert(text);
  };

  return (
    <div className="App">
      <CustomButton
        onCustomClick={handleCustomClick}
        text="HAPPY"
        color="cyan"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="BIRTHDAY"
        color="pink"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="DUDEEEE"
        color="lightblue"
      />
    </div>
  );
}

export default App;
