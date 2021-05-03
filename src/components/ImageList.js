import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'


const ImageList = props => {
    
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} /> //key: gives react the ability to decipher what needs to be rendered onscreen//it goes in the root element. so if there was a div. it would get the key
     
    })
               

return <div className="image-list"> {images}</div>
};
    
    

export default ImageList