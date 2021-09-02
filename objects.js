//Object notes:
/*
Objects are JS data type that hold key and value pairs of data.
Objects can hold numbers, strings, booleans, arrays, and other objects, etc.
*/
//Curly brackets deonte object, objects REQUIRE two main attributes: *key and *value
let netflix = {
    id : 1,
    name: 'The Office',
    isRunning: false,
    season1:{
        seasonInfo:{
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName:"Diversity Day"
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            }
            ]
        }
    },
    season2:{},
    season3:{},
};

//Use dot and bracket notation to console.log episodeName of episode 2 

console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);

// JSON OBJECT
/*\
-JSON stands for JavaScript Object Notation
-derived from JSON syntax, JSON format is text only.
-Exists as a string 
    -Useful when fetching data from a server(back-end apllication or logic)
    -Needs to be converted to a native JavaSript Object if we want to access the data.
*/


//Bracket Notation / Property Accessors
//Property Accessors: dot notation ( . ), bracket notation []

let superHero = {};

//Target object as a whole w/ bracket notation, inject/give a key which is a string
superHero['name'] = 'Spider-Man';
//Assigning second key and value
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
console.log(superHero['name'],superHero['alterEgo']);
console.log(superHero.name);

//All keys in objects are strings even though they aren't wrapped in quotes when represented in the object itself

let test = Object.keys(superHero);
console.log(test);
console.log(typeof test[0]);


let spacedObject = {
    'Spaces Here': true,
    noSpaces: true
}

console.log(spacedObject)