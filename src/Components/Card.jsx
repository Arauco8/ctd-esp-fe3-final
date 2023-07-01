/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Card.module.css'
import { useAppContext } from '../Components/utils/GlobalContextDentista'
import { Link } from 'react-router-dom'
import image from '../assets/doctor.jpg'


const Card = ({ dentista }) => {
  const { addFav, removeFav, favs } = useAppContext();
  
  const { id, name, username } = dentista
  const isFavorito = favs.some((fav) => fav.id === id)

  const handleAddFav = (e) => {
    e.preventDefault()
    if (isFavorito) {
      removeFav(id)
    } else {
      addFav(id)
    }
  } 

  return (
      <div className={styles.allcards}>
        <Link className={styles.link} to={`/detail/${id}`}>
          <div className={isFavorito ? styles.fav : styles.card}>
            <img src={image} width='45%' style={{ borderRadius: '50%' }} alt='doctor' />
            <h1 className={styles.name}>
              {name}
            </h1>
            <p className={styles.username}>{username}</p>
          </div>
        </Link>
       <button onClick={handleAddFav} className={isFavorito ? styles.deleteButton : styles.favButton}>
          {isFavorito ? 'Eliminar de Favoritos' : 'Agregar a favoritos'}
        </button> 
      </div>
        )
}

export default Card
