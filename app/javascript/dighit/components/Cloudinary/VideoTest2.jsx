import React, { useState } from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';



const VideoTest2 = () => {

  const [image, setImage] = useState({
    url: ''
    })
  const [load, setLoad] = useState(false)

    const uploadVideo = async (e) => {
      const file = e.target.files[0];
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'koiahkt5');
      console.log(data);
      setLoad(true)
      const res = await axios('https://api.cloudinary.com/v1_1/dxkvjnkx4/video/upload',{
        method: 'POST',
        header: {
          "content-type": "application/json"
        },
        data: data
      }).then(function(res) {
        setImage({url: res.data.url})
        .then(console.log(image))
      }).catch(function(err) {;
      })
    }

    const test = () => {
      console.log(image)
    }

  return (
    <div>
      <button onClick={test}>click pour voir l'url</button>
      <input type="file" name="file" onChange={uploadVideo}/>

      {load ? <h1>load...</h1> : <img src={image} />}


    <h1>Hello, world!</h1>
          <Image cloudName= "dxkvjnkx4">

          </Image>
  </div>
  )
}

export default VideoTest2




























