import React from 'react'
import { useLocation} from 'react-router-dom'

function ImageDetails() {

    const location = useLocation()
    const {title, url, description} = location.state;
    console.log(title, url, description);

  return (
    <div className="image-details">
        <div className="image-details-card">
            <img src={url} alt="" />
            <div className="details">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ImageDetails