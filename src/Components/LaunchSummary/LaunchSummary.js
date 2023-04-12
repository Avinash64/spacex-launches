import React from 'react'
import "./LaunchSummary.css"
const launches = require("../lde.json")

function LaunchSummary() {
  return (
    <div className='launchSummary text-white bg-dark mb-3'>
        <div className='card-title mt-3'>LaunchSummary {launches[0].name}</div>
        <div className='card-body'>

        {/* <div>{JSON.stringify(launches[0].links)}</div> */}
        <div>{JSON.stringify(launches[0].rocket)}</div>
        <div>{JSON.stringify(launches[0].success)}</div>
        <div>{JSON.stringify(launches[0].details)}</div>
        <div>{JSON.stringify(launches[0].crew)}</div>
        <div>{JSON.stringify(launches[0].ships)}</div>
        <div>{JSON.stringify(launches[0].capsules)}</div>
        <div>{JSON.stringify(launches[0].payloads)}</div>
        <div>{JSON.stringify(launches[0].launchpad)}</div>
        <div>{JSON.stringify(launches[0].flight_number)}</div>
        <div></div>
        <div>{JSON.stringify(launches[0].date_local)}</div>
        <div>{JSON.stringify(launches[0].upcoming)}</div>
        {/* <div>{JSON.stringify(launches[0].cores)}</div> */}
        <div>{JSON.stringify(launches[0].auto_update)}</div>
        <div>{JSON.stringify(launches[0].tbd)}</div>
        <div>{JSON.stringify(launches[0].launch_library_id)}</div>
        <div>{JSON.stringify(launches[0].id)}</div>
        </div>
    </div>
  )
}

export default LaunchSummary