import React from 'react';

const ImageList = (props) => {
    //const images = [];
    const images = props.images.map(image => { return <img key={image.id} alt="images"  src={image.urls.regular} />});
    //console.log(props);
        return (
            <div>
                {images}
              </div>
        );
};
export default ImageList;