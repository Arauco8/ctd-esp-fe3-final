import React from 'react'

import styles from '../Components/NotFound.module.css';

const NotFound= () => { 
    return (
        <div className={styles.container}>
            <img className={styles.image} src={"./images/404.jpg"} alt="Error 404" />
        </div>
    )
}

export default NotFound