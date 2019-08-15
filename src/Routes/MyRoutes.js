import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Patient from '../components/Patient/Patient'
import AddPatient from '../components/Patient/AddPatient'
const dashBoard = () =>{
    return <div>
        dashBoard
    </div>
}

const bills = () =>{
    return <div>
        bills
    </div>
}
export default function Routes() {
    return (
        <Switch>
            <Route exact path = '/' component = {dashBoard} />
            <Route path ='/patient' component = {Patient} />
            <Route path = '/bills' component ={bills} />
            <Route path = "/addPatient" component = {AddPatient} />
        </Switch>
    )
}
