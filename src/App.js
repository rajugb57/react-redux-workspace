import logo from './logo.svg';
import './App.css';
import Services  from './components/Services/Service';
import Provider from './components/Providers/Provider';

function App() {
  return (
    <div className="App">
      <div className="leftContainer">
        <Services />
      </div>
      <div className="rightContainer">
        <Provider />
      </div>
    </div>
  );
}

export default App;
