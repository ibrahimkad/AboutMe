'use strict';
var score=0;





var uname = prompt('what is your name?');
alert('Hello ' + uname);
alert('To know me better please answer the following quesions by typing : yes or no or y or n');
var drink;
function drink() {
    drink = prompt('do I like tea?');

    if (drink.toLowerCase() === 'y') {
        alert('you are right');
        score++;
    } else if (drink.toLowerCase() === 'yes') {
        alert('you are right');
        score++;
    } else {
        alert('sorry It\'s not right');
    }
}
drink();
//  second question
var food
function food() {
    food = prompt('do I like shawarma?');
    if (food.toLowerCase() === 'y') {

        alert('of course ,who don\'t');
        score++;
    } else if (food.toLowerCase() === 'yes') {
        score++;
        alert('of course ,who don\'t');
    } else {
        alert('sorry It\'s not right');
    }
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
        alert('sorry It\'s not right');
    }
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
        alert('sorry It\'s not right');
    }
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
        alert('sorry It\'s not right');
    }
}
hair();

//  alert
alert('Hope you know me well now ' + uname);

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

//  last question 

var check = false;
var treetype = ['fig', 'orange', 'blueberry', 'almond'];
function tree() {

    for (var attempt = 0; attempt < 6; attempt++) {
        var tree = prompt('I like many trees,guess one of them');
        //for (var a in tree1) {
        for (var j = 0; j < treetype.length; j++) { 
            if (tree === treetype[j]) {
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


alert('your score:' + score);

 
