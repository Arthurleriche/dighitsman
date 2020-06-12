
import React, {useState, useEffect} from 'react';
import './style.css';
import axios from 'axios'

const AddVideoToPopUp = (props) =>  {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('null')
  const [playlist_id, setPlaylist_id] = useState(1)
  const [user_id, setUser_id] = useState(props.id)
  const [score, setScore] = useState(0)
  const [addNewSong, setAddNewSong] = useState({
    url: '',
    title: '',
    description: '',
    img: '',
    user_id: null,
    playlist_id: 1,
    score: null,
    img: ''
    })

  const uploadVideo = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'koiahkt5');

    const res = await axios('https://api.cloudinary.com/v1_1/dxkvjnkx4/video/upload',{
      method: 'POST',
      header: {
        "content-type": "application/json"
      },
      data: data
    }).then(function(res) {
      setUrl(res.data.url)
      .then(console.log(url))
    }).catch(function(err) {;
    })
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  useEffect (() => {
    setAddNewSong({
    url: url,
    title: title,
    description: description,
    user_id: props.id,
    playlist_id: 1,
    score: score,
    img:''
    })
  }, [description, url])

  const addVideo = (e) => {
    if (url === "null") {
      alert('cela peut prendre quelque temps avant le chargement complet de la vidéo')
    } else {
        console.log(addNewSong)
        e.preventDefault()
        props.addSong(addNewSong)
        props.closePopup()
    }

  }

  return (
    <div className='popup'>
      <div className='popup\_inner'>
        {url === 'null' ? <p style={{color: "red"}}>pas de fichier ou la video charge</p> : <p style={{color: "green"}}>la vidéo est chargée</p>}
        <input type="file" name="file" onChange={uploadVideo}/>
        <input name="title" type="text" value={title} onChange={handleChangeTitle}/>
        <input name="description" type="text" value={description} onChange={handleChangeDescription}/>
        <button onClick={addVideo}>ajouter une playlist</button>
      </div>
    </div>
  );
}

export default AddVideoToPopUp;
