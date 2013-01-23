/**
 *
 * Creates namespace object or returns existing namespace object
 * @author roxy
 *
 * @param {string} namespace string
 * @param {string|undefined} target where namespace should be searched/created, if no target is passed, window is used
 * @return {object} namespace
 *
 *
 * @example lib.namespace('myApp.util');
 *
 */

window.lib = window.lib || {};
lib.namespace = function namespace(nsString, target) {
    var namespaces = nsString.split('.');
    var parentNamespace = target || window;
    for(var i = 0, length = namespaces.length; i < length; i++) {
		var key = namespaces[i];
        parentNamespace = parentNamespace[key] = parentNamespace[key] || {};
    }
    return parentNamespace;
};