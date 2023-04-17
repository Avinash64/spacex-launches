import logo from './logo.svg';
import './App.css';
import LaunchDetails from './Components/LaunchDetails/LaunchDetails';
import LaunchSummary from './Components/LaunchSummary/LaunchSummary';
const launches = require("./Components/lde.json")
function App() {
  return (
    <div className="App">
      {/* <LaunchDetails/>
      {launches.map((val,ind) => {
        return <LaunchSummary key={ind} launch={val}/>
      })} */}
      <LaunchSummary launch={launches[170]}/>
    </div>
  );
}

export default App;
