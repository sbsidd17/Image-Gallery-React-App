import React from 'react'
import { Link } from 'react-router-dom'

function Image({title, url, description}) {
  return (
    <div className='image-card'>
        <Link to={"/image-detail"} state={{title, url, description}}>
            <img src={url} alt=""/>
        </Link>
    </div>
  )
}

export default Image