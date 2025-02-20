import React from 'react'
import './AboutPage.css'

export default function AboutPage() {
    return (
        <div className="aboutPanel">
            <h2>React CRUD with backend</h2>
            <p>This application is a NewsApp for managing news in React. You can perform a complete CRUD of news. It is integrated with a mock backend server.</p>

            <div className="developer_profile">
                <img src="../assets/developer_image.png" alt="developer_image" />
                <h3>Kevin Jiménez</h3>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/kevin-jim%C3%A9nez94/" target="_blank">
                            <i className="bi bi-linkedin"></i>
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/KevinJG994" target="_blank">
                            <i className="bi bi-github"></i>
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
