const users = [
    {name: 'zinny', premium: true},
    {name: 'inny', premium: false},
    {name: 'nny', premium: true},
    {name: 'ny', premium: true},
    {name: 'y', premium: false},
];

  const getPremiumUsers = (users) => {
    return users.filter (users => users.premium)
}

export { getPremiumUsers, users }