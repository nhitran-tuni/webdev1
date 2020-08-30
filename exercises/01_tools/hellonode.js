const _ = require("lodash");
     
function hellonode(array) {

    let begin = _.first(array);
    let end = _.last(array);

    return begin + ' ' +end;
}

const string = ["hello", "goodbye", "alpha", "omega", "edge", "node"];
console.log(hellonode(string));