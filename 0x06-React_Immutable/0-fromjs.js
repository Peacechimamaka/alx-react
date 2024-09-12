const {fromJS} = require('immutable');

export default getImmutableObject(object) {
	return fromJS(object);
}
