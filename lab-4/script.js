const element = document.getElementById('ninth');

const nextElement = document.querySelector('.hobby + div > h4');

const colors = ['#9f7df6', '#61b7f4', '#fff048', 'transparent'];

const IMG_SRC =
    'https://www.wien.info/resource/image/290578/3x2/1663/1122/a91e087927a65f46f9f779797068f401/6E892396EBCED61F02AE5F4DA19A81EF/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen.jpg';
const CONTAINER = document.getElementById('imgs-container');

let i = 0;

const clickHandler = (element) => {
    element.style.backgroundColor = colors[i % colors.length];
    element.style.color = i % 2 ? 'black' : 'white';
    i++;
};

element.onclick = () => clickHandler(element);

nextElement.onclick = () => clickHandler(nextElement);

document.getElementById('add').onclick = (e) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    const imageElem = document.createElement('img');
    imageElem.style.width = '1000px';
    imageElem.src = IMG_SRC;
    imgContainer.appendChild(imageElem);
    CONTAINER.appendChild(imgContainer);
};

document.getElementById('zoom-in').onclick = (e) => {
    const imageElem = CONTAINER.lastChild.querySelector('img');
    if (imageElem) {
        const currWidth = imageElem.clientWidth;
        imageElem.style.width = currWidth + 100 + 'px';
    }
};

document.getElementById('zoom-out').onclick = (e) => {
    const imageElem = CONTAINER.lastChild.querySelector('img');
    if (imageElem) {
        const currWidth = imageElem.clientWidth;
        imageElem.style.width = currWidth - 100 + 'px';
    }
};

document.getElementById('delete').onclick = (e) => {
    const imageElem = CONTAINER.lastChild;
    imageElem && CONTAINER.removeChild(imageElem);
};
