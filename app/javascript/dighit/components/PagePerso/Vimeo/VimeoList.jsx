import React, { useState } from 'react'
import VimeoCarte from './VimeoCarte'

const VimeoList = ({ vimeoVid, playlistActual, selectedVideo, id, addSongToArray}) => {
// const [selected, setSelected] = useState({})

//   const video = (song) => {
//     setSelected({
//       attributes: {
//         cloud: song.link,
//         title: song.name,
//         description: song.description,
//         url: ""
//     }})
//   }

  // const handleSelected = () => {
  //   selectedVideo(selected)
  //   console.log(selected)
  // }

  const list = vimeoVid.map((data) => {
   return <VimeoCarte key={data} resultat={data} selectedVideo={selectedVideo} id={id} playlistActual={playlistActual} addSongToArray={addSongToArray}/>
  })

  return(

    <div>
    {list}
    </div>
  )
}

export default VimeoList
