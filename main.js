const btnAddImage = document.getElementById('addImage');
const deleteImage = document.getElementById('deleteImage');
const output = document.getElementById('output');

const min = 1;
const max = 122;
const random = () => Math.floor(Math.random() * (max - min)) + min;

const createImage = () => {
    const img = document.createElement('img');
    img.src = `https://randomfox.ca/images/${random()}.jpg`;
    img.loading = "lazy";
    
    output.appendChild(img);
}

const btnDelete = () => {
    output.textContent = '';
}

btnAddImage.addEventListener('click', createImage);
deleteImage.addEventListener('click', btnDelete);