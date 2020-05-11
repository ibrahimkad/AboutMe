'use strict'
var uname = prompt('what is your name?')
alert('Hello '+uname) 
alert('To know me better please answer the following quesions by typing : yes or no or y or n');


var drink = prompt('do I like coffee?');
 
if (drink.toLowerCase() === 'y') {
    alert('you are right');
}else if (drink.toLowerCase() === 'yes') {
        alert('you are right');
}else {
        alert('sorry It\'s not right')
}

console.log('drink=',drink)

var food = prompt('do I like shawarma?')
if (food.toLowerCase() === 'y') {

    alert('of course ,who don\'t');
}else if (food.toLowerCase() === 'yes'){
    alert('of course ,who don\'t');
}else {
    alert('sorry It\'s not right')
} 

console.log('food=',food)


var sport = prompt('do I like waking?');

if (sport.toLowerCase() === 'y') {
    alert('you are right');
}else if (sport.toLowerCase() === 'yes') {
        alert('you are right');
}else {
        alert('sorry It\'s not right')
}

console.log('sport=',sport)




var place = prompt('do I live in zarqa ?');

if (place.toLowerCase() === 'y') {
    alert('you are right');
}else if (place.toLowerCase() === 'yes') {
    alert('you are right');
}else {
    alert('sorry It\'s not right')
}

console.log('place=',place)


var hair = prompt('do I have long hair?');

if (hair.toLowerCase() === 'y') {
    alert('you are right');
}else if (hair.toLowerCase() === 'yes') {
    alert('you are right');
}else {
    alert('sorry It\'s not right')
}

console.log('hair=',hair)

alert('Hope you know me well now '+uname) 
