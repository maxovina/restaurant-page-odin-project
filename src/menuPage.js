export default function menuPage(){
    const menuCategory = document.createElement('div');
    menuCategory.classList.add('menu');
    const categoryName = document.createElement('h1');
    categoryName.textContent = 'Menu';
    menuCategory.appendChild(categoryName);

    menuCategory.appendChild(createMenuItem(
        bluecheese,
        'Blue Cheese Quesadilla',
        'Quesadilla with chicken, "BlueCheese" sauce and crispy bacon',
        '$20'
    ));
    menuCategory.appendChild(createMenuItem(
        cheddar,
        'Cheddar Quesadilla',
        'Quesadilla with chicken, cheddar cheese, "Salsa" sauce and crispy bacon',
        '$20'
    ));
    menuCategory.appendChild(createMenuItem(
        nachos,
        'Cheddar Cheese Nachos',
        'Nachos with Cheddar sauce and Jalapeno pappers',
        '$5'
    ));
    menuCategory.appendChild(createMenuItem(
        cheesebites,
        'Cheddar Cheese Bites',
        'Fried Cheddar bites with Jalapeno peppers and dipping sauce of your choice',
        '$5'
    ));
    menuCategory.appendChild(createMenuItem(
        onionrings,
        'Onion Rings',
        'Fried Onion rings with Mint dipping sauce',
        '$5'
    ));

    content.appendChild(menuCategory);
}

import bluecheese from './img/bluecheese.jpeg';
import cheddar from './img/cheddar.jpeg';
import nachos from './img/nachos.jpeg';
import cheesebites from './img/cheesebites.jpeg';
import onionrings from './img/onionrings.jpeg';

const content = document.querySelector('.content')

function createMenuItem(picture, name, desc, price){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemPicture = document.createElement('div');
    itemPicture.classList.add('item-picture');
    const imgElement = document.createElement('img');
    imgElement.src = picture;
    itemPicture.appendChild(imgElement);
    
    const itemDesc = document.createElement('div');
    itemDesc.classList.add('item-desc');

    const itemName = document.createElement('h1');
    itemName.textContent = name;
    itemName.classList.add('item-name');
    const p = document.createElement('p');
    p.textContent = desc;
    const h2 = document.createElement('h2');
    h2.textContent = price;

    itemDesc.appendChild(itemName);
    itemDesc.appendChild(p);
    itemDesc.appendChild(h2);

    menuItem.appendChild(itemPicture);
    menuItem.appendChild(itemDesc);

    return menuItem;
}
