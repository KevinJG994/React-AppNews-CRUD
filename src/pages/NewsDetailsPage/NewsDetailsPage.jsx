import './NewsDetailsPage.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { BACK_API } from '../../api'

export default function NewsDetailsPage() {
  // Petición GET mediante Axios para obtener todos los elementos del Id seleccionado
  const API_URL = `${BACK_API}/news`
  const [news, setNews] = useState([])

  const { newId } = useParams();

  // Metodo para obtener la noticia por su Id
  const getNewById = () => {
    axios
      .get(`${API_URL}/${newId}`)
      .then(response => setNews(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getNewById()
  }, [])

  // Metodo para eliminar un registro
  const navigate = useNavigate()

  const handleDelete = () => {
    const isConfirmed = window.confirm("¿Do you want to delete this article?")

    if (isConfirmed) {
      axios
        .delete(`${API_URL}/${newId}`)
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };


  // Condición para cambiar el estilo dependendion el tag
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


  // Metodo para obtener el editor por su Id
  const [editors, setEditors] = useState([]);
  const [editorId, setEditorId] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACK_API}/editors`)
      .then(response => {
        setEditors(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (news.editor && editors.length > 0) {
      const matchedEditor = editors.find(e => e.name.toLowerCase() === news.editor.toLowerCase());
      if (matchedEditor) {
        setEditorId(matchedEditor.id);
      }
    }
  }, [news.editor, editors]);


  return (
    <div className='details-content' >
      <div className='card-content' >
        <div className='cardImage'>
          <img src={news.image} className="card-img-top" />
        </div>
        <div className="card-body">
          <p className="card-text">{news.title}</p>
        </div>
      </div>

      <div className='newsInfo'>

        <Link to={`/editorPage/${editorId}`}>
          <p className='editorLink' title='Editor Details'><i className="bi bi-person"></i>{news.editor}</p>
        </Link>
        <p><i className="bi bi-calendar2-week"></i>{news.date}</p>
      </div>

      <hr />

      <div className='newsDescription'>
        <h5>{news.subtitle}</h5>
        <p className='articleDescription'>{news.article}</p>

        <h5>Tags</h5>
        <p className={`tags ${getTagClass(news.tags)}`}>{news.tags}</p>
      </div>

      <hr />

      <div className='newsButtons'>
        <Link to="/">
          <button className='btn-back' title='Back to home'><i className="bi bi-arrow-return-left"></i></button>
        </Link>

        <Link to={`/EditForm/${newId}`}>
          <button className='btn-edit' title='Edit Article'><i className="bi bi-pencil-square"></i></button>
        </Link>

        <button className='btn-delete' title='Delete Article' onClick={handleDelete}><i className="bi bi-trash-fill"></i></button>
      </div>
    </div>
  )
}
