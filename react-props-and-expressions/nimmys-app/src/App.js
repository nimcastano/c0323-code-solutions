// import logo from './logo.svg';
import './App.css';

function CustomButton({ text, style }) {
  return <button style={style}>{text}</button>;
}

function App() {
  return (
    <div className="App">
      <CustomButton
        text="I"
        style={{
          color: 'white',
          background: 'purple',
          border: '2px solid black',
        }}
      />
      <CustomButton
        text="Know"
        style={{
          color: 'black',
          background: 'cyan',
          border: '2px solid blue',
        }}
      />
      <CustomButton
        text="React!"
        style={{
          color: 'white',
          background: 'green',
          border: '2px solid pink',
        }}
      />
    </div>
  );
}

export default App;
