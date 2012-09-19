/**
 * Object.create polyfill
 * only takes one argument, passing of additional properties
 * to new Object not directly shimmable
 */
if (!Object.create) {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}


/**
 * Object.creator
 * 
 * Shim (or just a little nicer syntax if you don't need to set enumerable and so on)
 * for creating Objects with direct prototypal inheritance and in desperate need 
 * of a better name
 *
 * Usage:
 *
 * var parentObject = Object.create(null);
 * parentObject.parentProp = "42";
 *
 * var childObject = parentObject.creator({
 * 	childProp1: "hello",
 * 	childProp2: 
 * });
 */
Object.prototype.creator = function(props){
	var prop,
		obj = Object.create(this);

	for(prop in props){
		if(props.hasOwnProperty(prop)){
			obj[prop] = props[prop];
		}
	}

	return obj;
}