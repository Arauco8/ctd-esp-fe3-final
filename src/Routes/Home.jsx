import React from 'react'
import { useAppContext } from '../Components/utils/GlobalContextDentista'
import Card from '../Components/Card.jsx'
import stylesCards from '../Components/Card.module.css'
import { useThemeContext } from '../Components/utils/GlobalContextTheme'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const { dentists } = useAppContext()
  const { theme } = useThemeContext()

  console.log(dentists)
  const styles = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
    color: theme === 'light' ? '#333' : '#fff',
  }
  
  return (
    <main style={styles}>
     <h1 className={stylesCards.titulo}>Nuestro Equipo</h1>
         <div className={stylesCards.container}>
          {dentists.map((dentista) => (
            <Card key={dentista.id} dentista={dentista} />
          ))}
        </div>
    </main>
  )
}

export default Home