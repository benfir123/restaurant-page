function showMenu () {
    const content = document.getElementById('content');
    content.removeChild(content.lastChild);
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant-info')
    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'เมนูของทางร้าน';
    const restaurantInfo = document.createElement('p');
    restaurantInfo.innerText = "1.ไข่เจียวหมูสับ เปิดประเดิมกันด้วยไข่เจียวหมูสับหนานุ่มที่ทอดให้เหลืองฟู ด้านนอกกรอบ ด้านในนุ่มชุ่มฉ่ำด้วยหมูสับติดมัน\n2.กุ้งชุบแป้งทอด เมนูเอาใจเด็กน้อยกับกุ้งชุบแป้งทอดตัวใหญ่กินคู่กับน้ำจิ้มบ๊วยเจี่ยรสเปรี้ยวหวาน ช่วยตัดเลี่ยนได้เป็นอย่างดี\n3.ปีกไก่ทอด ต้องใช้ปีกกลางไก่เท่านั้นถึงจะกรอบนอกนุ่มใน นำปีกไก่ไปสะดุ้งน้ำร้อนให้หนังเต่งตึงก่อนแล้วจึงชุบแป้งทอด รับรองว่าหนังกรอบเคี้ยวเพลิน\n4.หมูสามชั้นทอดน้ำปลา หมูสามชั้นเอาไปทำอะไรก็อร่อย ก่อนอื่นต้องนำหมูไปต้มแล้วนำไปผึ่งให้แห้ง จากนั้นใช้ส้อมจิ้มหนังให้ทั่วแล้วหมักด้วยน้ำปลาดี สุดท้ายนำไปทอดให้หนังกรอบฟูก็พร้อมเสิร์ฟได้เลย\n5.ปลาหมึกนึ่งมะนาว เมนูร้านอาหารแซ่บจี๊ดโดนใจ ปลาหมึกสดสะอาดนำมาลวกให้สุกกำลังดี ผสมเข้ากับน้ำยำรสชาติแซ่บนัว จะกินกับข้าวก็ได้จะกินเป็นกับแกล้มก็เข้ากันเป็นที่สุด";
    restaurantDiv.appendChild(restaurantName);
    restaurantDiv.appendChild(restaurantInfo);
    content.appendChild(restaurantDiv);
}

export default showMenu;