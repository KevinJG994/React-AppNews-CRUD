import './EditorPage.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { BACK_API } from '../../api'

export default function EditorPage() {

  // Petición GET para obtener todos los editores
  const API_URL = `${BACK_API}/editors`
  const [editor, setEditor] = useState([])

  const { editorId } = useParams();

  const getNewById = () => {
    axios
      .get(`${API_URL}/${editorId}`)
      .then(response => setEditor(response.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getNewById()
  }, [])


  const getTagClass = (tag) => {
    switch (tag) {
      case 'Economia':
        return 'tag-economy';
      case 'Videojuegos':
        return 'tag-videogames';
      case 'Deportes':
        return 'tag-sports';
    }
  };


  return (
    <div className='details-content' >
      <div className='card-content' >
        <div className='cardImage'>
          <img src={editor.image} className="editor-img" />
        </div>
        <div className="card-body">
          <p className="editor-name">{editor.name}</p>
        </div>
      </div>

      <hr />

      <div className='newsDescription'>
        <h5>{editor.subtitle}</h5>
        <p className='articleDescription'>{editor.editor_info}</p>

        <h5>Info</h5>
        <p className={`tags ${getTagClass(editor.specialist)}`}>{editor.specialist}</p>
        <p className='editorSince'><i className="bi bi-calendar2-week "></i>Se unio a KevNews en {editor.since}</p>
      </div>

      <hr />

      <div className='newsButtons'>
        <Link to="/">
          <button className='btn-back' title='Back to home'><i className="bi bi-arrow-return-left"></i></button>
        </Link>
      </div>
    </div>
  )
}
