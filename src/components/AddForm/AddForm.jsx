import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddForm() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [stock, setStock] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState("")
    const [operatingSystem, setOperatingSystem] = useState("")

    const handleName = e => setName(e.target.value);
    const handleImage = e => setImage(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    const handleBrand = e => setBrand(e.target.value);
    const handleModel = e => setModel(e.target.value);
    const handleStock = e => setStock(e.target.value);
    const handlePrice = e => setPrice(e.target.value);
    const handleCategory = e => setCategory(e.target.value);
    const handleOperatingSystem = e => setOperatingSystem(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = { id: 31, name, description, image, brand, model, stock, price, category, operatingSystem }

        console.log("Submitted: ", newProduct);

        addProduct(newProduct)

        clearForm()

        navigate("/");
    }

    function clearForm() {
        setName("")
        setDescription("")
        setImage("")
        setBrand("")
        setModel("")
        setStock("")
        setPrice("")
        setCategory("")
        setOperatingSystem("")
    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Add Product</h2>
                <img src="../src/assets/KevTech.png" className="form-image" />
                <div className="form-grid">

                    <input name="Name" type="text" placeholder="Name" value={name} onChange={handleName} required />

                    <input name="Description" type="text" placeholder="Description" value={description} onChange={handleDescription} required />

                    <input name="Image" type="url" placeholder="Product Image" value={image} onChange={handleImage} required />

                    <input name="Brand" type="text" placeholder="Brand" value={brand} onChange={handleBrand} required />

                    <input name="Model" type="text" placeholder="Model" value={model} onChange={handleModel} required />

                    <input name="Stock" type="number" placeholder="Stock" value={parseInt.stock} onChange={handleStock} required />

                    <input name="Price" type="text" placeholder="Price" value={parseFloat.price} onChange={handlePrice} required />

                    <select name="Category" value={category} onChange={handleCategory} required>
                        <option value="" disabled>Category</option>
                        <option value="SmartPhone">SmartPhone</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tablet">Tablet</option>
                    </select>

                    <select name="OperatingSystem" value={operatingSystem} onChange={handleOperatingSystem} required>
                        <option value="" disabled>Operating System</option>
                        <option value="Windows">Windows</option>
                        <option value="macOs">macOs</option>
                        <option value="Android">Android</option>
                        <option value="iOs">iOs</option>
                    </select>

                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}
