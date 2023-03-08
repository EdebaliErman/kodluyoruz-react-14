import React, { useState } from 'react'
import { useChat } from '../context/ChatContext'
import { sendMessage } from '../socketApi'
import styles from './style.module.css'


function ChatForm() {
  //Stateler
  const [message, setMessage] = useState('')

  const { setMessages } = useChat()

  //Fonksiyonlar
  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message)

    setMessages((prevState) => [...prevState, { message, fromMe: true }])
    sendMessage(message)
    setMessage("")
  }



  return (
    <div className='chat-form'>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textInput}
          value={message}
          onChange={onChangeMessage}
        />
      </form>
    </div>
  )
}

export default ChatForm
