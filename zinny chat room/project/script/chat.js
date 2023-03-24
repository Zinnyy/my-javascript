
//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the room

import { db, query, where ,collection, Timestamp, addDoc, onSnapshot, getDoc } from  "./chatfirebase.js"
import { orderBy } from  "./chatfirebase.js"

class Chatroom{
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = collection(db, 'chat');
        this.unsub;
    }
async addChat(message){
    //format a chat object to the db
    const now = new Date();
    const chat = {
        message,
        username: this.username,
        room: this.room,
        created_at: Timestamp.fromDate(now)
    }
    //save the chat document
    const response = await addDoc(this.chats, chat);
    return response;
}
getChat(callback){
    const q = query(this.chats, where('room', '==', this.room), orderBy('created_at'))
  this.unsub =  onSnapshot(q , (snapshot) => {
       snapshot.docChanges().forEach( change => {
            if(change.type === 'added'){
                //update ui
                callback(change.doc.data())
            }
           
       })
    })
}
getName(username){
    this.username = username;
    localStorage.setItem('username', username)
}
updateRoom(room){
this.room = room;
console.log('room updated');
if(this.unsub){
    this.unsub();
}

}
}

export {Chatroom}

 


// setTimeout(()=>{
//     chatroom.updateRoom('gaming');
//     chatroom.getName('Easy');
//     chatroom.getChat((data) => {
//     console.log(data)
//      });
//      chatroom.addChat('hello')
//}, 3000)