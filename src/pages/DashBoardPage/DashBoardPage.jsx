import React, { useState } from 'react'
import './DashBoardPage.css'
import ListItems from '../../components/ListItems/ListITems'

export default function DashBoardPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className='dashboard'>
            <div className='dashboard-categories'>
                <h4>Categories</h4>
                <div className='buttons-container'>
                <button onClick={() => setSelectedCategory(null)}><i className="bi bi-newspaper"></i>All News</button>
                    <button onClick={() => setSelectedCategory('Sports')}><i className="bi bi-cookie"></i>Sports</button>
                    <button onClick={() => setSelectedCategory('Videogames')}><i className="bi bi-controller"></i>Videogames</button>
                    <button onClick={() => setSelectedCategory('Economy')}><i className="bi bi-coin"></i>Economy</button>
                </div>
            </div>

          <ListItems selectedCategory={selectedCategory}/>
        </div>
    )
}
