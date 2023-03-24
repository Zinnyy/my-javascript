const password = document.getElementById('password');
const username = document.getElementById('username');

document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    valid = true

    const password_value = '1234567890'
    const username_value = username.value

    if (username_value < 5 || password_value.length < 12){
        console.log('the form has not been submitted : \n - A field is not valid.')
        valid = false
    }

    else (valid)
    alert('the form has been completed. \n We will proceed with the sending')
});