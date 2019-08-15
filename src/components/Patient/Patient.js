import React from 'react'
import PatientNav from './PatientNav'
import '../../App.css'
import AddPatient from './AddPatient';
export default function Patient(props) {
    // console.log(props.location.pathname)
    return (
        <div className="patient">
        <span className="left">Manage Patients</span>
        <span className="right">
        Doctors 4 | Patient 2 | Nurse 1 
        </span>
        <PatientNav/>     
        {/* {
            props.location.pathname == "/patient/addPatient" &&
            <p>Render a form</p>
        } */}
        </div>
    )
}
