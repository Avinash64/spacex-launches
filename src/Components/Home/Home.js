import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LaunchSummary from '../LaunchSummary/LaunchSummary'
import "./Home.css"
const launches = require("../lde.json")

function Home() {
    const navigate = useNavigate();
    const [search, setSearch ] = useState(100);
  return (
    <div classNameName='HomePage'>
{/* {launches.map((val,ind) => {
        return <div classNameName='ls'><LaunchSummary key={ind} launch={val}/></div>
      })}  */}
      <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Space X Launches</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">
            View data about all Space X launches from the very first one all the way up to the most recent one!
        </p>
        <div className='searchText'>Enter launch number below to view details about that launch</div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input type="number" onChange={(e) => setSearch(e.target.value)} className="form-control" id="floatingInput" placeholder="100"/>
        </div>
        <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={()=> navigate('/about', {state:{launch: launches[search-1]}})}>Search</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Home