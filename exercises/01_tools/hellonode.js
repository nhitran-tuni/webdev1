const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);

function hellonode(array) {

    let begin = _.first(array);
    let end = _.last(array);

    return begin + ' ' +end;
}

module.exports = hellonode;