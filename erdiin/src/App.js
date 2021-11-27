// import logo from './logo.svg';
import './App.css';
import MapContainer from './busMap';

const {kakao} = window;
let map;

function App() {  
  return (
    <div className="wrapper">
      <MapContainer />
    </div>
  );
}

export default App;
