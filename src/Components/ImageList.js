import React from 'react';
import './image-list.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
    //const images = [];
    const images = props.images.map(image => { return < ImageCard image = {image} />});
    //console.log(props);
    return (
        <div className = "image-list">
              {images}
              </div>
        );
};
export default ImageList;