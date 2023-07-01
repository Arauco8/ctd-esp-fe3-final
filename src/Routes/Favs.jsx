import React from 'react'
import Card from '../Components/Card'
import { useAppContext } from '../Components/utils/GlobalContextDentista'
import styles from '../Components/Card.module.css'
import { Link } from 'react-router-dom'

const Favs = () => {
  const { favs } = useAppContext()

  const uniqueFavs = favs.filter((value, index, self) => {
    return self.findIndex((item) => item.id === value.id) === index
  })

  const favoritos = uniqueFavs.map((fav) => (
    <Link key={fav.id} className={styles.link} to={`/detail/${fav.id}`}>
      <Card dentista={fav} />
    </Link>
  ))

  const hasFavoritos = favoritos.length > 0

  return (
    <div
      className={`${styles.favsrouter} ${!hasFavoritos && styles.empty} ${
        favoritos.length <= 3 && styles.smallHeight
      }`}
    >
      <h1 className={styles.titulo}>Favoritos</h1>
      <div className={`${styles.container} ${!hasFavoritos && styles.empty}`}>
        {favoritos.length > 0 ? (
          favoritos
        ) : (
          <p>DH DENTISTAS 🦷</p>
        )}
      </div>
    </div>
  )
}

export default Favs
