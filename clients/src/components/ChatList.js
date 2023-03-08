import React from 'react'
import { useChat } from '../context/ChatContext'
import Chatİtem from './Chatİtem'
import styles from './style.module.css'
import ScrollableFeed from 'react-scrollable-feed'

function ChatList() {
  const { messages } = useChat()
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => <Chatİtem key={key} item={item} />)}
      </ScrollableFeed>
    </div>
  )
}

export default ChatList
