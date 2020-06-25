import React, {useEffect, useState} from 'react'
import axios from 'axios'

import CarteVideo from './CarteVideo'

const MesSons = () => {

  const url = `/api/v1/1/songs`

  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios(url)
      .then(res => setSongs(res.data))
      .catch()
     },[])

  const list = songs.map((data) => {
    return <CarteVideo songs={data} key={data.id} />
  })

  return(
    <div id="mes-sons">
      <h3 className="titre">Mes Sons</h3>

          <div id="mes-sons-liste">
            {list}

        </div>
    </div>
  )
}

export default MesSons
