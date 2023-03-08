import io from 'socket.io-client'

let socket
export const init = () => {
    console.log("connecting...")

    socket = io("http://localhost:3000", {
        transports: ["websocket"]
    })

    socket.on("connect", () => console.log("Connected !"))
}

export const sendMessage = (message) => {
    socket && socket.emit('new-message', message)
}
export const subscribeChat = (cb) => {
    if (!socket) return;

    socket.on("receive-message", (message) => {
        console.log("Yeni mesaj var", message)
        cb(message)
    })
}

export const subscribeChatInitalMessage = (cb) => {
    if (!socket) return;

    console.log("hello world")

    socket.on("message-list", (messages) => {
        console.log("Inital", messages)
        cb(messages)
    })
}