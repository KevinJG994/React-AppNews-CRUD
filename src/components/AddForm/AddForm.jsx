import './AddForm.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddForm() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")
    const [image, setImage] = useState("")
    const [article, setArticle] = useState("")
    const [tags, setTags] = useState("")
    const [date, setDate] = useState("")
    const [editor, setEditor] = useState("")

    const handleTitle = e => setTitle(e.target.value);
    const handleImage = e => setImage(e.target.value);
    const handleSubTitle = e => setSubTitle(e.target.value);
    const handleArticle = e => setArticle(e.target.value);
    const handleTags = e => setTags(e.target.value);
    const handleDate = e => setDate(e.target.value);
    const handleEditor = e => setEditor(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = { id: 11, title, subTitle, image, article, tags, date, editor }

        console.log("Submitted: ", newProduct);

        addProduct(newProduct)

        clearForm()

        navigate("/");
    }

    function clearForm() {
        setTitle("")
        setSubTitle("")
        setImage("")
        setArticle("")
        setTags("")
        setDate("")
        setEditor("")
        setCategory("")
        setOperatingSystem("")
    }


    return (
        <form className='formContent'>

            <div className='form-header'>
                <div className='form-img'>
                    <input name="Image" type="file" value={image} onChange={handleImage} required />
                </div>
                <div className="form-title">
                    <input name="Title" type="text" placeholder="Title" value={title} onChange={handleTitle} required />
                </div>
            </div>

            <div className='form-editor-info'>
                <div>
                    <i className="bi bi-person"></i>
                    <select name="Editor" value={editor} onChange={handleEditor} required>
                        <option value="" disabled>---</option>
                        <option value="Jose-Luis">Jose Luis</option>
                        <option value="Elena-Ruiz">Elena Ruiz</option>
                        <option value="Diego-Herrera">Diego Herrera</option>
                    </select>
                </div>

                <div>
                    <i className="bi bi-calendar2-week"></i>
                    <input name="Date" type="date" value={date} onChange={handleDate} required />
                </div>
            </div>

            <hr />

            <div className='form-info'>
                <input name="SubTitle" type="text" placeholder="SubTitle" value={subTitle} onChange={handleSubTitle} required />
                <textarea name="Article" type="text" placeholder="Article" value={article} onChange={handleArticle} className='articleInput' required />

                <h5>Tags</h5>
                <select name="Tags" value={tags} onChange={handleTags} className='tagSelect' required>
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
                <button className='btn-addArticle' title='Add Article'><i className="bi bi-plus-lg"></i></button>
            </div>
        </form>
    );
}
