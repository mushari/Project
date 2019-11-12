//Q4. The following JSON object has been provided to you in data.js:
json = (require('./data')); 
json = JSON.parse(json);
let logData = function () {
        console.log(json.people);
}
//logData();

let logNames = function() {
    for (const iterator of json.people) {
        console.log(`name : ${iterator.name}`);
    }
};
//logNames()

let logNameEyes  = function() {
    for (const iterator of json.people) {
        console.log(`name : ${iterator.name} , eye : ${iterator.eye_color}`);
    }
};

//logNameEyes()

let logByMass = function() {

    for (const iterator of json.people) {
        if(iterator.mass > 75)
        console.log(`name : ${iterator.name}`);
    }
};
//logByMass();