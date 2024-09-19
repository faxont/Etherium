const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.appendChild(canvas);

canvas.width = window.innerWidth*.98;
canvas.height = window.innerHeight*.98;

let characters = [];
const renderer=new Renderer();

characters[0] = new Character('Bill',11,10,10,8);
characters[0].calculateSecondaryAttributes();
characters[0].selectWeaponByName("Sword");

characters[1] = new Character('Bob',10,11,10,8);
characters[1].calculateSecondaryAttributes();
characters[1].selectWeaponByName("Spear");

renderer.render(characters);
