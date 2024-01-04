'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button'[1]);

// console.log(btns);

// const circle = document.getElementsByClassName('circle');

// console.log(circle);


// const heart = document.querySelectorAll('.heart');
// console.log(heart);

// LESSON 43 

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	hearts = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart'),
	wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'blue';
box.style.width = '50px';

box.style.cssText = 'background-color: red; width: 10px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue';
// }

// hearts[0].style.backgroundColor = 'blue';


hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
// const text = document.createTextNode('Тут був я');


div.classList.add('black');
// wrapper.append(div);

document.body.append(div);  // Add div at the end body
div.innerText = '<h1>Hello World</h1>'; // ADD html in the div

div.innerHTML = '<h1>Hello World</h1>'; // ADD html in the div
// div.textContent = 'hello'; // Add only text to div


div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');

// hearts[0].replaceWith(circles[0]); // replace with 


// wrapper.appendChild(div);  // add element in div

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();



