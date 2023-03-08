import React from 'react'
import styles from './style.module.css'
function Chatİtem({ item }) {
    return (
        <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ''}`}>
            {item.message}

        </div>
    )
}

export default Chatİtem
