import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

const newName = document.querySelector('.new-name')
const newChat = document.querySelector('.new-chat');
const List = document.querySelector('.chat-list');
const updatemsg = document.querySelector('.update-mssg');
const room = document.querySelector('.chat-rooms')

newChat.addEventListener('submit', e => {
    e.preventDefault();
    const chat = newChat.message.value.trim();
chatroom.addChat(chat).then(()=> newChat.reset())
.catch(err => console.log(err))
})

newName.addEventListener('submit', e => {
    e.preventDefault();
    const name = newName.name.value.trim();
    chatroom.updateName(name)

    newName.reset()
updatemsg.innerText = `Your name have been updated to ${name}`

setTimeout(( ()=> updatemsg.innerText = ''), 3000)


})

room.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChat(chat => chatUI.render(chat))
    }
})

const username = localStorage.username ? localStorage.username : 'anon'

const chatUI = new ChatUI(List)
const chatroom = new Chatroom('music', 'zinny')

chatroom.getChat(data => chatUI.render(data))


//chatroom.getChat(data => console.log(data))
