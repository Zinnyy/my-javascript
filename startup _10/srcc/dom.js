console.log('dom file')

const body = document.querySelector('body');

const styleBody = () => {
    body.style.background = 'wine';

};

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title)
}

styleBody();

addTitle('hello world from the dom file');

export { styleBody, addTitle} 