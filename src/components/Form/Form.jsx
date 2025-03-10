import './Form.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BACK_API } from '../../api'

export default function Form() {
    const [title, setTitle] = useState("")
    const [subtitle, setSubTitle] = useState("")
    const [image, setImage] = useState("")
    const [article, setArticle] = useState("")
    const [tags, setTags] = useState("")
    const [date, setDate] = useState("")
    const [editor, setEditor] = useState("")


    const API_URL = `${BACK_API}/news`
    const navigate = useNavigate()

    const { newId } = useParams();
    const isEditing = (newId) // Constante para saber si ID es igual a true


    useEffect(() => {
        if (isEditing) { //Si existe ID, lo selecciona y obtenemos el formulario con los datos de ese ID
            axios
                .get(`${API_URL}/${newId}`)
                .then(response => {
                    const editArticle = response.data
                    setTitle(editArticle.title)
                    setSubTitle(editArticle.subtitle)
                    setImage(editArticle.image)
                    setArticle(editArticle.article)
                    setTags(editArticle.tags)
                    setDate(editArticle.date)
                    setEditor(editArticle.editor)
                })
                .catch(error => console.log(error))
        }
    }, [newId])


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = { title, subtitle, image, article, tags, date, editor }

        if (isEditing) { //Si existe el ID editamos
            axios
                .put(`${API_URL}/${newId}`, formData)
                .then(response => {

                    navigate(`/newsDetailsPage/${newId}`);
                })
                .catch(error => console.log(error))
        } else { //Si no existe el ID se crea un nuevo registro
            axios
                .post(`${API_URL}`, formData)
                .then(response => {
                    navigate("/");
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <form className='formContent' onSubmit={handleSubmit}>

            <div className='form-header' >
                <div className='form-img'>
                    <input name="Image" type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
                </div>
                <div className="form-title">
                    <input name="Title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
            </div>

            <div className='form-editor-info'>
                <div>
                    <i className="bi bi-person"></i>
                    <select name="Editor" value={editor} onChange={(e) => setEditor(e.target.value)} required>
                        <option value="" disabled>---</option>
                        <option value="Luis Alberto">Luis Alberto</option>
                        <option value="Elena Ruiz">Elena Ruiz</option>
                        <option value="Diego Herrera">Diego Herrera</option>
                    </select>
                </div>

                <div>
                    <i className="bi bi-calendar2-week"></i>
                    <input name="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
            </div>

            <hr />

            <div className='form-info'>
                <input name="SubTitle" type="text" placeholder="SubTitle" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} required />
                <textarea name="Article" type="text" placeholder="Article" value={article} onChange={(e) => setArticle(e.target.value)} className='articleInput' required />

                <h5>Tags</h5>
                <select name="Tags" value={tags} onChange={(e) => setTags(e.target.value)} className='tagSelect' required>
                    <option value="" disabled>---</option>
                    <option value="Sports">Sports</option>
                    <option value="Videogames">Videogames</option>
                    <option value="Economy">Economy</option>
                </select>
            </div>

            <hr />

            <div className='formButtons'>
                <Link to="/">
                    <button className='btn-back' title='Back to home'><i className="bi bi-arrow-return-left"></i></button>
                </Link>
                <button className='btn-addArticle' title='Edit Article' type='submit'><i className="bi bi-plus-lg"></i></button>
            </div>
        </form>
    );
}
