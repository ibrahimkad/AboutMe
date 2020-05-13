'use strict';
var score=0;





var uname = prompt('what is your name?')
alert('Hello ' + uname)
alert('To know me better please answer the following quesions by typing : yes or no or y or n');
var drink
function drink() {
    drink = prompt('do I like tea?');

    if (drink.toLowerCase() === 'y') {
        alert('you are right');
        score++;
    } else if (drink.toLowerCase() === 'yes') {
        alert('you are right');
        score++;
    } else {
        alert('sorry It\'s not right')
    }

    console.log('drink=', drink);
}
drink();
//  second question
var food
function food() {
    food = prompt('do I like shawarma?')
    if (food.toLowerCase() === 'y') {

        alert('of course ,who don\'t');
        score++;
    } else if (food.toLowerCase() === 'yes') {
        score++;
        alert('of course ,who don\'t');
    } else {
        alert('sorry It\'s not right')
    }

    console.log('food=', food)
}
food();


//  third question
var sport
function sport() {
    sport = prompt('do I like waking?');

    if (sport.toLowerCase() === 'y') {
        alert('you are right');
        score++;
    } else if (sport.toLowerCase() === 'yes') {
        alert('you are right');
        score++;
    } else {
        alert('sorry It\'s not right')
    }

    console.log('sport=', sport);
}
sport();



//  fourth question
var place
function place() {
    place = prompt('do I live in zarqa ?');

    if (place.toLowerCase() === 'y') {
        alert('you are right');
        score++;
    } else if (place.toLowerCase() === 'yes') {
        alert('you are right');
        score++;
    } else {
        alert('sorry It\'s not right')
    }

    console.log('place=', place)
}
place();

// fifth question
var hair
function hair() {
    hair = prompt('do I have long hair?');

    if (hair.toLowerCase() === 'y') {
        alert('you are right');
        score++;
    } else if (hair.toLowerCase() === 'yes') {
        alert('you are right');
        score++;
    } else {
        alert('sorry It\'s not right')
    }

    console.log('hair=', hair)
}
hair();

//  alert
alert('Hope you know me well now ' + uname)

//  sixth question
var quiz
function quiz() {
    for (var i = 1; i < 5; i++) {
        quiz = prompt('what is the number that give remainder equal to 1 when divided on 6,5,4,3,2 ');
        if (quiz == '61') {
            alert('right,you are smart');
            score++;
            break;

        } else if (quiz < '61') {
            alert('sorry,it\s too low');

        } else {
            alert('sorry,it\'s too high');

        }


    }
}
quiz();
// TODO //create counter to 6 
// TODO // create loop 
// TODO // create array
// TODO //loop
// TODO //check if answer in array


// var myArray = [1, 2, 3, 4, 5];
// var x = 4;
// for(var i in myArray){
//     // if(x === myArray[i]){
//     //     //do something
//     // }
//     console.log(myArray[i]);
//}

//  last question 

var check = false;
var treetype = ['fig', 'orange', 'blueberry', 'almond'];
function tree() {

    for (var attempt = 0; attempt < 6; attempt++) {
        //attempt  = 2
        var tree = prompt('I like many trees,guess one of them');//abc
        //for (var a in tree1) {
        for (var j = 0; j < treetype.length; j++) {//j= 0 
            if (tree === treetype[j]) {//abc >>> fig
                alert('right ,look like you like tree');
                score++;
                check = true;
                break;
            } 
        }
        if (check === true) {
            break;
        }
    }

}
tree();

//counter
//var counter = 0
//function counter1(counter) {


// if (drink === 'y' || drink === 'yes') {
//     counter = counter + 1;
// }
// if (food === 'y' || food === 'yes') {
//     counter = counter + 1;
// }
// if (sport === 'y' || sport === 'yes') {
//     counter = counter + 1;
// }
// if (place === 'y' || place === 'yes') {
//     counter = counter + 1;
// }
// if (hair === 'y' || hair === 'yes') {
//     counter = counter + 1;
// }
// if (quiz === 'y' || quiz === 'yes') {
//     counter = counter + 1;
// }
// if (tree === 'y' || tree === 'yes') {
//     counter = counter + 1;
// }
alert('your score:' + score)
console.log(score);
    //return counter
//}
