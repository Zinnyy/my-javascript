import { styleBody, addTitle, contact } from "./dom.js";
import {getPremiumUsers, users} from './data.js'


styleBody();
addTitle('Hello Family')
console.log(contact)

console.log('hello')


const PremUsers = getPremiumUsers(users)
console.log(PremUsers, users)