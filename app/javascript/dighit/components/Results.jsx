import React from 'react'

const Results = (props) => {

  const list = props.video.map(data => {
    return (
    <div key={data.snippet.title} id="card-playlist">
      <h3>{data.snippet.title}</h3>
    </div>
    )
  })


  return (
    <div id="section">
      <div id="title">
        <h2>recherches</h2>
      </div>
      <div id='card'>
        {list}
      </div>
    </div>
  )
}


export default Results
