function showContact () {
    const content = document.getElementById('content');
    content.removeChild(content.lastChild);
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant-info')
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'ข้อมูลติดต่อของทางร้าน';
    const restaurantInfo = document.createElement('p');
    restaurantInfo.innerText = "นายสมชาย ศรีบุญเรือง 0865601703 \nซอยเทียนทะเล 7 แขวงแสมดำ เขตบางขุนเทียนกรุงเทพมหานคร 10150\ntanadon.keawnakorn@gmail.com"
    restaurantDiv.appendChild(restaurantName);
    restaurantDiv.appendChild(restaurantInfo);
    content.appendChild(restaurantDiv);
}

export default showContact;