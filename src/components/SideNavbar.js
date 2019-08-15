import React from 'react'
import {Link} from 'react-router-dom'

export default function SideNavbar() {
    return (
        <div>
            <h2>Quick links</h2>
            <ul>
                <li>
                    <Link to ="/">DashBoard</Link>
                </li>
                <li>
                    <Link to ="/bills">Bills</Link>
                </li>
                <li>
                    <Link to ="/patient">Patient</Link>
                </li>

            </ul>
      
        </div>
    )
}
