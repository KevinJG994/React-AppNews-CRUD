import React from 'react'
import { Link } from 'react-router-dom'
import './DashBoardPage.css'

export default function DashBoardPage() {
    return (
        <div className='dashboard'>
            <div className='dashboard-categories'>
                <h4>Categories</h4>
                <div className='buttons-container'>
                    <button><i className="bi bi-cookie"></i>Deportes</button>
                    <button><i className="bi bi-controller"></i>Videojuegos</button>
                    <button><i className="bi bi-coin"></i>Economia</button>
                </div>
            </div>

            <div className='dashboard-content'>
                <h4>News</h4>

                <Link to="/newsDetailsPage">
                    <div className="card">
                        <div className='card-content'>
                            <div className='cardImage'>
                                <img src="./src/assets/KevTech.png" className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                <div className='newsInfo'>
                                    <p><i className="bi bi-person"></i>User</p>
                                    <p><i className="bi bi-calendar2-week"></i>Date</p>
                                    <p>Tag</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>

            <div aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <span class="page-link"> <i className="bi bi-arrow-left"></i></span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#"><i className="bi bi-arrow-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
