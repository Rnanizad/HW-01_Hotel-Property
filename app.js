var hotel = {name:'perspolis', place:'tehran', room:20, price:'10$', star:3};

var property = prompt("Enter Property between (name , place , room, price, star) to See Value ..");

var result = prompt("The Value of " + property + " is " + hotel[property] + " : " + " Do you want to update (yes or no)?");

(result == "yes") ? hotel[property] = prompt("Enter Your New Value"): false;

console.log(hotel);



