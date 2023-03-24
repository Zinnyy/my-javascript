// function streamVideo() {
    
//     const video = document.querySelector('video')
//     const options = { video: true};
//     navigator.mediaDevices.getUserMedia(options)
//     .then(stream => video.srcObject = stream)
//     .catch(err => console.error(err))

//}

const video = document.querySelector('video')
const button = document.querySelector('button')

button.addEventListener('click', e => {

    const options = { video: true}
    navigator.mediaDevices.getUserMedia(options)
    .then(stream => video.srcObject = stream)
    .catch(err => console.error(err))


})