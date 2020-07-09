import React from 'react'
import CarteDernierSons from './CarteDernierSons'

const AjoutRecent = ({ allSongs, selectedVideo }) => {

  const listRecent = allSongs.map((data) => {
    return <CarteDernierSons key={data.id} allSongs={data} selectedVideo={selectedVideo}/>
  })
  return (
    <React.Fragment>
    <h3>Sons ajouter par les utilisateurs</h3>
    <div className="ajout-recent">
      {listRecent}
    </div>
    </React.Fragment>
  )
};

export default AjoutRecent
