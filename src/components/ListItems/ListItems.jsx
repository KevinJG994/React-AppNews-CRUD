import './ListItems.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BACK_API } from '../../api';

export default function ListItems({selectedCategory}) {
    const API_URL = `${BACK_API}/news`;
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setNews(response.data))
            .catch(error => console.log(error));
    }, []);


    const getTagClass = (tag) => {
        switch (tag) {
            case 'Economy':
                return 'tag-economy';
            case 'Videogames':
                return 'tag-videogames';
            case 'Sports':
                return 'tag-sports';
        }
    };

    const filteredNews = selectedCategory
        ? news.filter(item => item.tags === selectedCategory)
        : news;

    // Lógica de paginación
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

    const changePage = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className='dashboard-content'>
            <h4>News</h4>

            {currentNews.map((getNew) => (
                <Link to={`/newsDetailsPage/${getNew.id}`} key={getNew.id}>
                    <div className="card">
                        <div className='card-content'>
                            <div className='cardImage'>
                                <img src={getNew.image} className="card-img-top" />
                            </div>
                            <div className="card-body">
                                <p className="card-text">{getNew.title}</p>
                                <div className='newsInfo'>
                                    <p><i className="bi bi-person"></i>{getNew.editor}</p>
                                    <p><i className="bi bi-calendar2-week"></i>{getNew.date}</p>
                                    <p className={`tags ${getTagClass(getNew.tags)}`}>{getNew.tags}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <div aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => changePage(currentPage - 1)}>
                            <i className="bi bi-arrow-left"></i>
                        </button>
                    </li>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => changePage(i + 1)}>{i + 1}</button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => changePage(currentPage + 1)}>
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
