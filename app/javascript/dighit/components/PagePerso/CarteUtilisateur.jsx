import React from 'react'
import Popup from "reactjs-popup";


import avatar from "../../../../assets/images/avatar.jpeg"

const CarteUtilisateur = ({ user }) => {
  return (
    <div id="utilisateur">
      <div id="carteUtilisateur" className="container">
        <div id="cartePhoto">
          <img id="photo" src={avatar} alt=""/>
        </div>
        <div id="infosUtilisateur">
          <div>
            <p>{user.username}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolor saepe architecto, ipsum quas deleniti quia! Quaerat cupiditate culpa a quo delectus aperiam! Vel fuga sunt ab eligendi perferendis dolore.</p>
            <a href="">Soundcloud</a>
            <br/>
            <a href="">Bandcamp</a>
          </div>
        </div>
        <div id="contactUtilisateur">
          <button id="button-pseudo">suivre Pseudo</button>
        </div>
      </div>
    </div>
  )
}

export default CarteUtilisateur
