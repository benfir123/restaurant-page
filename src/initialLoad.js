import myImage from './krapow.png';

function initialLoad () {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const homeButton = document.createElement('button');
    homeButton.id = 'home-button'
    const menuButton = document.createElement('button');
    menuButton.id = 'menu-button'
    const contactButton = document.createElement('button');
    contactButton.id = 'contact-button';
    const restaurantDiv = document.createElement('div');
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';
    restaurantDiv.classList.add('restaurant-info')
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'ร้านกระเพราโบราณดั้งเดิม';
    const restaurantImage = new Image();
    restaurantImage.src = myImage;
    const restaurantInfo = document.createElement('p');
    restaurantInfo.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    content.appendChild(header);
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);
    restaurantDiv.appendChild(restaurantName);
    restaurantDiv.appendChild(restaurantImage);
    restaurantDiv.appendChild(restaurantInfo);
    content.appendChild(restaurantDiv);
}

export default initialLoad;