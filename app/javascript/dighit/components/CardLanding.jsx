import React from 'react'

const CardLanding = (props) => {
  return (
      <div id='card'>
        <div key={props.playlist.id} id="card-playlist">
          <h3>{props.playlist.name}</h3>
        </div>
      </div>
  )

}
