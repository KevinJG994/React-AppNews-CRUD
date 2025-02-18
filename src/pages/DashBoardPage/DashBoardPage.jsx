import React from 'react'
import './DashBoardPage.css'
import ListItems from '../../components/ListItems/ListITems'

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
        </div>
    )
}
