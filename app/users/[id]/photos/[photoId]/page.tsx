import React from 'react'

interface Props {
    params: {
        id:number , 
        photoId: number;
    }
}

const PhotosPage = ({params: {id,photoId}}: Props) => {
  return (
    <div>
        Photo {id} {photoId};
    </div>
  )
}

export default PhotosPage
