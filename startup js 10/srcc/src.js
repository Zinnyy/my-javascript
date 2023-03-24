import {addTitle, styleBody} from './dom.js'
import users, {getPremium} from './data'

console.log(users)

const premusers = getPremium(users)
console.log(premusers)
console.log('text')


