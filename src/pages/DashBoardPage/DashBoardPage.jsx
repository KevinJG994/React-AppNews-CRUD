import React from 'react'
import './DashBoardPage.css'
import ListItems from '../../components/ListItems/ListItems'

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

          <ListItems/>

            <div aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link"> <i className="bi bi-arrow-left"></i></span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active" aria-current="page">
                        <span className="page-link">2</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#"><i className="bi bi-arrow-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
