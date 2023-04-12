import React from 'react'
import "./LaunchDetails.css"
const launches = require("../lde.json")

function LaunchDetails() {
  return (
    <div className='launchDetails'>
        LaunchDetails
        <div>{JSON.stringify(launches[0].fairings)}</div>
        {/* <div>{JSON.stringify(launches[0].links)}</div> */}
        {/* <div>{JSON.stringify(launches[0].static_fire_date_utc)}</div> */}
        {/* <div>{JSON.stringify(launches[0].static_fire_date_unix)}</div> */}
        <div>{JSON.stringify(launches[0].net)}</div>
        <div>{JSON.stringify(launches[0].window)}</div>
        <div>{JSON.stringify(launches[0].rocket)}</div>
        <div>{JSON.stringify(launches[0].success)}</div>
        <div>{JSON.stringify(launches[0].failures)}</div>
        <div>{JSON.stringify(launches[0].details)}</div>
        <div>{JSON.stringify(launches[0].crew)}</div>
        <div>{JSON.stringify(launches[0].ships)}</div>
        <div>{JSON.stringify(launches[0].capsules)}</div>
        <div>{JSON.stringify(launches[0].payloads)}</div>
        <div>{JSON.stringify(launches[0].launchpad)}</div>
        <div>{JSON.stringify(launches[0].flight_number)}</div>
        <div>{JSON.stringify(launches[0].name)}</div>
        <div>{JSON.stringify(launches[0].date_local)}</div>
        <div>{JSON.stringify(launches[0].upcoming)}</div>
        {/* <div>{JSON.stringify(launches[0].cores)}</div> */}
        <div>{JSON.stringify(launches[0].auto_update)}</div>
        <div>{JSON.stringify(launches[0].tbd)}</div>
        <div>{JSON.stringify(launches[0].launch_library_id)}</div>
        <div>{JSON.stringify(launches[0].id)}</div>
    </div>
  )
}

export default LaunchDetails