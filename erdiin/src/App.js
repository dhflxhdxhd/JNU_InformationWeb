// import logo from './logo.svg';
import './App.css';
import MapContainer from './busMap';
import './busMap.css'
// import navlist from './nav'
import * as time from './time'



function App() {  
  return (
    <div id="wrapper">
      <div id="navlist">
        <div>들어갔나?</div>
      </div>
      <MapContainer />
    </div>


  );
}

export default App;
