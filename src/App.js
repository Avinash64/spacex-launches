import logo from './logo.svg';
import './App.css';
import LaunchDetails from './Components/LaunchDetails/LaunchDetails';
import LaunchSummary from './Components/LaunchSummary/LaunchSummary';
import Home from './Components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
const launches = require("./Components/lde.json")
function App() {
  return (
            <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<LaunchSummary/> }/>
      </Routes>
       {launches.map((val,ind) => {
        return <LaunchSummary key={ind} launch={val}/>
      })} 


      
      
    </div>
      </BrowserRouter>
  );
}

export default App;
