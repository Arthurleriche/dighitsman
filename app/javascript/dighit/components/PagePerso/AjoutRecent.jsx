import React from 'react'
import CarteDernierSons from './CarteDernierSons'

const AjoutRecent = ({ allSongs, selectedVideo }) => {

  const listRecent = allSongs.map((data) => {
    return <CarteDernierSons key={data.id} allSongs={data} selectedVideo={selectedVideo}/>
  })
  return (
    <div className="ajout-recent">
      {listRecent}
    </div>
  )
};

export default AjoutRecent
