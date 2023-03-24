import { ChatUI } from "./ui.js";
import { Chatroom } from "./chat.js";
// dom queries
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newName = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')
const rooms = document.querySelector('.chat-rooms')


//updating the rooms
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChat(chat => chatUI.render(chat))
    }
})


//add a new chat
newChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.error(err))

})

//update username
newName.addEventListener('submit', (e) => {
    e.preventDefault();
    //update chat room class
    const name = newName.name.value.trim()
    chatroom.getName(name);
   // reset the form
    newName.reset();

    //update the name with settimeout
updateMssg.innerText = `Your name have been updated to ${name}`

setTimeout(( () => updateMssg.innerText = ''), 3000)

})

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'annon';

//chat instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('general', username)


//get chats and render
chatroom.getChat(data => chatUI.render(data));
