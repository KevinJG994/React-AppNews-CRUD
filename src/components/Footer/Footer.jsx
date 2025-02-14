import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <Link to="/aboutPage">
                <i className="bi bi-github"></i>
                Kevin Jiménez
            </Link>
        </footer>
    )
}
