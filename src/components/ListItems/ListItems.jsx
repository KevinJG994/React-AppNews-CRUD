import './ListItems.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ListItems() {
    // Petición GET mediante Axios para obtener todos los elementos
    const API_URL = 'http://localhost:5005/news'
    const [news, setNews] = useState([])

    const getAllNews = () => {
        axios
            .get(API_URL)
            .then(response => setNews(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getAllNews()
    }, [])

    return (
        <div className='dashboard-content'>
            <h4>News</h4>

            {news.map((getNew) => {
                return (
                    <Link to={`/newsDetailsPage/${getNew.id}`} key={getNew.id}>
                        <div className="card" >
                            <div className='card-content'>
                                <div className='cardImage'>
                                    <img src={getNew.image} className="card-img-top" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{getNew.title}</p>

                                    <div className='newsInfo'>
                                        <p><i className="bi bi-person"></i>{getNew.editor}</p>
                                        <p><i className="bi bi-calendar2-week"></i>{getNew.date}</p>
                                        <p>{getNew.tags}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}

        </div>
    )
}
