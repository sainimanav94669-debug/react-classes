import React, { useState } from 'react'

const ImageUpload = () => {
    const [image, setImage] = useState(null)
    function uploadImage(e) {
        const file = e.target.files[0]
        if (file) {
            setImage(URL.createObjectURL(file))
        }
    }

    const imagePreview = image || ""



    
    return (
        <div>
            <input id='imageUpload' onChange={uploadImage} type="file" />
            
            {imagePreview &&
                <img src={imagePreview} alt="image" />
            }

        </div>
    )
}

export default ImageUpload
