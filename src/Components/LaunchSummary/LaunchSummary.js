import React from 'react'
import "./LaunchSummary.css"
import { useLocation } from 'react-router-dom';
const launches = require("../lde.json")

function LaunchSummary(props) {

  const location = useLocation();
  var launch = location.state ? location.state.launch : props.launch;
  
  return (

    <div className='launchSummary text-white bg-dark mb-3'>
        <div className='card-title mt-3 title'>
          <div>
            {launch.name} 
            </div>
        <span className="badge bg-danger">
            {launch.success ? "Success" : "Fail"}
        
        </span>
        </div>
        <div className="card-img-top patch" style={{backgroundImage : `url('${launch.links.patch.large}')`}}> </div>
        <div className='card-body'>

        {/* <div>{JSON.stringify(launch.links)}</div> */}
        <div className='info'>Flight Number: {launch.flight_number}</div>
        <div className='info'>Date: {launch.date_local}</div>
        <div className='info'>Details: {launch.details}</div>
        {/* <div className='info'>Rocket Id: {launch.rocket}</div> */}
        {/* <div className='info'>{launch.crew}</div> */}
        {/* <div className='info'>{launch.ships}</div> */}
        {/* <div className='info'>{launch.capsules}</div> */}
        {/* <div className='info'>Payload Id: {launch.payloads}</div> */}
        {/* <div className='info'>Launchpad Id: {launch.launchpad}</div> */}

        </div>
    </div>
  )
}

export default LaunchSummary