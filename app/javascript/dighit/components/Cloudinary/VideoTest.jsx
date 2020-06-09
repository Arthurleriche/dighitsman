import React from 'react'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


export default class VideoTest extends React.Component {

  handleClick = (widget) => {
    widget.open()
  }



  render() {
    const widget = window.cloudinary.createUploadWidget({
      cloudName: 'dighists' },
      (error, result) => { })
    return (
      <div>
        <h1>je suis videotest</h1>
        <button onClick={() => this.handleClick (widget)}>click ici pour rajouter une video</button>
      </div>
    )
  }
}

