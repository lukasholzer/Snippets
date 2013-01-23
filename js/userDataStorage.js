/**
 * Storage for IE7
 * LocalStorage Polyfill
 *
 * @usage on DOM READY:
 * var localStorage = null;
 * if(window.UserDataStorage && !window.UserDataStorage.testLocalStorage()) {
 *			localStorage = new window.UserDataStorage();
 *		} else {
 *			localStorage = window.localStorage;
 *		}
 * }
 */
function UserDataStorage(maxage)  {
	var memory = document.createElement("div");
	memory.style.display = "none";
	memory.style.behavior = "url('#default#userData')";
	document.body.appendChild(memory);
	if (maxage) {
		var now = new Date().getTime();
		var expires = now + maxage * 1000;
		memory.expires = new Date(expires).toUTCString();
	}
	memory.load("UserDataStorage");
	this.getItem = function(key) {
		return memory.getAttribute(key) || null;
	};
	this.setItem = function(key, value) {
		memory.setAttribute(key,value);
		memory.save("UserDataStorage");
	};
	this.removeItem = function(key) {
		memory.removeAttribute(key);
		memory.save("UserDataStorage");
	};
}
UserDataStorage.testLocalStorage = function testLocalStorage() {
	try {
		localStorage.setItem("userDataStorageTest", "userDataStorageTest");
		localStorage.removeItem("userDataStorageTest");
		return true;
	} catch(e) {
		return false;
	}
};