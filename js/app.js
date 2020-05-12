'use strict'
var uname = prompt('what is your name?')
alert('Hello ' + uname)
alert('To know me better please answer the following quesions by typing : yes or no or y or n');


var drink = prompt('do I like tea?');

if (drink.toLowerCase() === 'y') {
    alert('you are right');
} else if (drink.toLowerCase() === 'yes') {
    alert('you are right');
} else {
    alert('sorry It\'s not right')
}

console.log('drink=', drink)

var food = prompt('do I like shawarma?')
if (food.toLowerCase() === 'y') {

    alert('of course ,who don\'t');
} else if (food.toLowerCase() === 'yes') {
    alert('of course ,who don\'t');
} else {
    alert('sorry It\'s not right')
}

console.log('food=', food)


var sport = prompt('do I like waking?');

if (sport.toLowerCase() === 'y') {
    alert('you are right');
} else if (sport.toLowerCase() === 'yes') {
    alert('you are right');
} else {
    alert('sorry It\'s not right')
}

console.log('sport=', sport)




var place = prompt('do I live in zarqa ?');

if (place.toLowerCase() === 'y') {
    alert('you are right');
} else if (place.toLowerCase() === 'yes') {
    alert('you are right');
} else {
    alert('sorry It\'s not right')
}

console.log('place=', place)


var hair = prompt('do I have long hair?');

if (hair.toLowerCase() === 'y') {
    alert('you are right');
} else if (hair.toLowerCase() === 'yes') {
    alert('you are right');
} else {
    alert('sorry It\'s not right')
}

console.log('hair=', hair)

alert('Hope you know me well now ' + uname)


for (var i = 1; i < 5; i++) {
    var quiz = prompt('what is the number that give remainder equal to 1 when divided on 6,5,4,3,2 ');
    if (quiz == '61') {
        alert('right,you are smart');
        break;

    } else if (quiz < '61') {
        alert('sorry,it\s too low');

    } else {
        alert('sorry,it\'s too high');

    }


}
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


    var tree1 = ['fig', 'orange', 'blueberry', 'almond'];
    var tree = prompt('I like many trees,guess one of them');
    for (var a in tree1){
        if (tree === tree1[a]) {
            alert('right ,look like you like tree');
            break;
        
        }else{
            alert('sorry try again');
            tree = prompt('I like many trees,guess one of them');
        }
        
        for (var x = 0; x < 6; x++) {
    
    }  
}
//counter
function counter1(counter) {
    var counter=0
    
    
    if (drink==='y' || drink==='yes') {
        counter++;
    }
    if (food==='y' || food==='yes') {
        counter++;
    }
    if (sport==='y' || sport==='yes') {
        counter++;
    }
    if (place==='y' || place==='yes') {
        counter++;
    }
    if (hair==='y' || hair==='yes') {
        counter++;
    }
    console.log(counter)
    return counter
}
