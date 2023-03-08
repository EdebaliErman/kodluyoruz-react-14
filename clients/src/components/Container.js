import React, { useEffect } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import { init, subscribeChat, subscribeChatInitalMessage } from '../socketApi'
import { useChat } from '../context/ChatContext'

function Container() {
  const { setMessages } = useChat()

  useEffect(() => {
    init()
    subscribeChatInitalMessage((messages) => setMessages(messages))

    subscribeChat((message) => { setMessages((prevState) => [...prevState, { message }]) })
  }, [])
  return (
    <div className='App'>
      <h1>Chat App</h1>
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container
