import React, { useState } from 'react'

const MenuPagePerso = ({handleChange, rechercheYoutube}) => {

const [recherche, setRecherche] = useState(true)
const [rechercheValue, setRechercheValue] = useState("")




  const clickSon = (change) => {
    handleChange(change)
  }

  const handleRecherche = () => {
    setRecherche(!recherche)
  }

  const handleChangeValue = (e) => {
    const value = e.target.value
    setRechercheValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    rechercheYoutube(rechercheValue)
  }

  const showRecherche = recherche ? <p onClick={handleRecherche}>Recherche</p> : <form onSubmit={handleSubmit}><input onChange={handleChangeValue} type="text" value={rechercheValue}/></form>

  return(
    <div className="container" id="menu-pp">
      <div id="menu-page-perso">
        <p onClick={() => clickSon("sons")}>Mes sons</p>
        <p onClick={() => clickSon("playlists")}>Mes playlists</p>
        <p onClick={() => clickSon("favoris")}>Mes favoris</p>
        <p>Ajouter une vidéo</p>
        {showRecherche}
      </div>
    </div>
  )
}

export default MenuPagePerso
