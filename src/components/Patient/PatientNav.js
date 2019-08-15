import React from 'react'
import {Link} from 'react-router-dom'

export default function PatientNav() {
    return (           
<nav className="navbar navbar-expand-md pat-nav">
  <ul className="navbar-nav">
    <li className="nav-item i1">
      <Link to ="/patientDisplay">Patient List</Link>
    </li>
    <li className="nav-item">
      <Link to ="/addPatient">(+) Add Patient</Link>
    </li>
  </ul>
</nav>
    )
}
