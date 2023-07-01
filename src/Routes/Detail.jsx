/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../Components/Card.module.css'
import { useThemeContext } from '../Components/utils/GlobalContextTheme'
import image from '../assets/doctor.jpg'
//import Loading from '../components/Loading/Loading'

const Detail = () => {

  const { theme } = useThemeContext()
  const { id } = useParams()
  const [dentista, setDentista] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  console.log(id)
  async function fetchDentista() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      if (response.ok) {
        const dentistaData = await response.json()
        console.log(dentistaData)
        setDentista(dentistaData)
      } else {
        throw new Error('Error al obtener los datos del dentista')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  } 

  

  useEffect(() => {
    fetchDentista()
  }, [id])

  /* if (isLoading) {
    return <Loading />
  } */

  

  const stylesTheme = {
    backgroundColor: theme === 'light' ? '#D8D9D9' : '#434243',
    color: theme === 'light' ? '#434243' : '#D8D9D9',
  }

  const { name, email, phone, website } = dentista

  return (
    <div className={styles.detalles}>
      <div className={styles.cdetalles} style={stylesTheme}>
      <img src={image} width='30%' style={{ borderRadius: '50%' }} alt='doctor' />
        <h1 className={styles.dtitulo}>{name}</h1>
        <p className={styles.ddatos}>Email: {email}</p>
        <p className={styles.ddatos}>Teléfono: {phone}</p>
        <div className={styles.dweb}>
          <p>Website:</p>
          <Link className={styles.link} to='/' style={stylesTheme}>
            www.{website}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail