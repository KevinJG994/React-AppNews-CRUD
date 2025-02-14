import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsDetailsPage() {
  return (
    <div className='details-content'>

      <div className='card-content'>
        <div className='cardImage'>
          <img src="./src/assets/developer_image.png" className="card-img-top" />
        </div>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div className='newsInfo'>
        <p><i className="bi bi-person"></i>User</p>
        <p><i className="bi bi-calendar2-week"></i>Date</p>
      </div>

      <hr />

      <div className='newsDescription'>
        <h5>Title</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam perspiciatis error, repudiandae aperiam praesentium dolores in atque officiis impedit nam harum velit magnam voluptatum blanditiis quam corrupti facere. Ducimus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sed dolore odit repudiandae quos fugiat iusto tempora corporis ducimus amet inventore repellat nemo a, quo sunt, quae veritatis reiciendis officiis.
        </p>
        <h5>Tags</h5>
        <p>Tag</p>
      </div>

      <hr />

      <div className='newsButtons'>
        <Link to="/">
          <button className='btn-back' title='Back to home'><i className="bi bi-arrow-return-left"></i></button>
        </Link>
        
        <button className='btn-edit' title='Edit new'><i className="bi bi-pencil-square"></i></button>
        <button className='btn-delete' title='Delete new'><i className="bi bi-trash-fill"></i></button>
      </div>
    </div>
  )
}
