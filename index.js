"use strict";

const holger = {
    name: 'holger',
    age: 39,
    happy: true,
    hairColor: 'red',
}

const brandon = {
    name: 'brandon',
    age: 34,
    happy: true,
    hairColor: 'brown',
}

const sama = {
    name: 'sama',
    age: 33,
    happy: false,
    hairColor: 'black',
}

const studentArray = [holger, brandon, sama];
// console.log(studentArray);


for(let i = 0; i < studentArray.length; i++) {
    console.log(`hello, ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old. Why are you so ${ studentArray[i].happy ? 'happy' : 'unhappy'}?`);
}

// studetArray[i].happy ? 'happy' : 'unhappy' :same as below
/* if(josh.happy) {
    return 'happy';
} else {
    return 'unhappy';
} */