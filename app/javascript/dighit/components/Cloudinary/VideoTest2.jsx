import React, { useState } from 'react';
import axios from 'axios';


const VideoTest2 = () => {

  const [image, setImage] = useState([])
  const [load, setLoad] = useState(false)

    const uploadVideo = async (e) => {
      const file = e.target.files[0];
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'dighits');
      setLoad(true)

      axios({
        url: 'https://api.cloudinary.com/v1_1/dighists/image/upload',
        method: 'POST',
        headers: { "X-Requested-With": "XMLHttpRequest" },
        data: data
      }).then(function(res) {
        console.log(res)
      }).catch(function(err) {;
      })



    axios({
    url: 'https://api.cloudinary.com/v1_1/dighists/resources/image',
    method: 'GET',
    headers: {
        mode: 'cors',
        credentials: 'include'
    }
    })
      .then(response => console.log(response))
    }

  return (
    <div>
      <input type="file" name="file" onChange={uploadVideo}/>

      {load ? <h1>load...</h1> : <img src={image} />}
    </div>
  )
}

export default VideoTest2




























