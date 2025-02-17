import './AddForm.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddForm({counter}) {
    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [image, setImage] = useState("")
    const [article, setArticle] = useState("")
    const [tags, setTags] = useState("")
    const [date, setDate] = useState("")
    const [editor, setEditor] = useState("")
    
    
    const API_URL = "http://localhost:5005/news"
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const addArticle = { id: counter , title, subTitle, image, article, tags, date, editor }
        axios
            .post(`${API_URL}`, addArticle)
            .then(response => {
                navigate("/");
            })
            .catch(error => console.log(error))
    }

    return (
        <form className='formContent' onSubmit={handleSubmit}>

            <div className='form-header' >
                <div className='form-img'>
                    <input name="Image" type="file" value={image} onChange={(e) => setImage(e.target.value)} required />
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
                        <option value="Jose-Luis">Jose Luis</option>
                        <option value="Elena-Ruiz">Elena Ruiz</option>
                        <option value="Diego-Herrera">Diego Herrera</option>
                    </select>
                </div>

                <div>
                    <i className="bi bi-calendar2-week"></i>
                    <input name="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
            </div>

            <hr />

            <div className='form-info'>
                <input name="SubTitle" type="text" placeholder="SubTitle" value={subTitle} onChange={(e) => setSubTitle(e.target.value)} required />
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
                <button className='btn-addArticle' title='Add Article' type='submit'><i className="bi bi-plus-lg"></i></button>
            </div>
        </form>
    );
}
