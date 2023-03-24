import { db,orderBy ,Timestamp,collection, addDoc, where, query, onSnapshot} from './firebase.js'

class Chatroom {
 constructor( room, username){
    this.room = room;
    this.username =username;
    this.chat = collection( db, 'chat')
    this.unsub;
 }

async addChat (message){
    const now = new Date();
    const chat = {
        message: message,
        room: this.room,
        username: this.username,
        created_at: Timestamp.fromDate(now)
    }
const response = await addDoc(this.chat, chat)
return response

}

getChat(callback){
const q = query(this.chat, where('room', '==', this.room), orderBy("created_at"));
 this.unsub = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach( change => {
        if(change.type === 'added'){
            callback(change.doc.data())
        }
    })
})
}
updateName(username){
this.username = username;
localStorage.setItem('username', username)
}
updateRoom(room){
    this.room = room;
    console.log('room updated')
    if(this.unsub){
        this.unsub();
    }

}
}

export {Chatroom}


