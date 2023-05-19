// import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <CustomButton text="I" color="white" bgColor="pink" border="black" />
      <CustomButton text="Know" color="black" border="gold" bgColor="yellow" />
      <CustomButton text="React!" color="white" bgColor="cyan" border="blue" />
    </div>
  );
}

export default App;
