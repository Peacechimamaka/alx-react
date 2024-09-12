const { fromJS } = require('immutable');

function getImmutableObject(object) {
    return fromJS(object);
}

module.exports = getImmutableObject;

const exampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

console.log(getImmutableObject(exampleObject));

