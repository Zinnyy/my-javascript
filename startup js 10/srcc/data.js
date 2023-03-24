

const users = [
    {name: 'mario', premium: true},
    {name: 'luigi', premium: false},
    {name: 'yoshi', premium: true},
    {name: 'toad', premium: true},
    {name: 'peach', premium: false}
]

 const getPremium = () => {
    return users.filter (user => user.premium)
}

//export default users;
export {getPremium, users as default}