//hoisting
getRandomInt();

function getRandomInt(min, max) {

    Math.floor(Math.random() * (max + 1 - min) + min);
}
const getRandomIntAnonymousFunction = function (min, max) {
    Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min,max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
 
}

//task write the above in a one-liner


const oneliner = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min) + min);

                                //string //callback function
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
  }
//callback er executable kode der bliver passed som argument til en anden funktion

const running = (name) => `${name} is running`;

//write code below so that you can cnsole log "Alex is running"

const action = genericActionPerformer("Alex", running);

console.log(action);

// create a single line below that print "Louis is eating"
console.log((genericActionPerformer("Louis", (name => `${name} is eating.`))))


  