const btn = document.getElementById('get-btn');
const containerDiv = document.getElementById('container');

btn.addEventListener('click', async () => {
    const data = fetch('https://randomuser.me/api')
        .then((data) => data.json())
        .then((data) => data.results[0]);
    const res = await data;

    const { picture, location, cell, name } = res;

    const userData = {
        picture: picture.large,
        city: location.city,
        postcode: location.postcode,
        cell,
        name: `${name.title} ${name.first} ${name.last}`,
    };

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const img = document.createElement('img');
    img.src = userData.picture;

    wrapper.appendChild(img);

    delete userData.picture;

    for (const [key, value] of Object.entries(userData)) {
        const text = document.createElement('div');
        text.innerText = `${key}: ${value}`;
        wrapper.appendChild(text);
    }
    containerDiv.prepend(wrapper);
});
