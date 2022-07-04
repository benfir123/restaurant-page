import myImage from './krapow.png';

function showHome () {
    const content = document.getElementById('content');
    content.removeChild(content.lastChild);
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant-info')
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'ร้านกระเพราโบราณดั้งเดิม';
    const restaurantImage = new Image();
    restaurantImage.src = myImage;
    const restaurantInfo = document.createElement('p');
    restaurantInfo.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    restaurantDiv.appendChild(restaurantName);
    restaurantDiv.appendChild(restaurantImage);
    restaurantDiv.appendChild(restaurantInfo);
    content.appendChild(restaurantDiv);
}

export default showHome;