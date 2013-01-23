/**
 *
 * Event dispatcher
 * implements event dispatcher pattern
 * allows passing of callback context and additional data which will be added to event object
 * @author roxy
 *
 * @example
 * 		var myObject = Object.create(lib.eventDispatcher);
 * 		myObject.addEventListener("complete", function(e) {
 * 			//context == this
 * 			console.log(e.id);
 * 		}, this);
 * 		myObject.dispatchEvent("complete", {id: "franz"});
 */

window.lib = window.lib || {};
lib.eventDispatcher = {

	//public

	/**
	 * addEventListener
	 * if two listener is added twice, callback will be called twice.
	 *
	 * @param {string} type
	 * @param {function} callback
	 * @param {object|undefined} context
	 */
	addEventListener: function addEventListener(type, callback, context) {
		this._events[type] = this._events[type] || [];
		this._events[type].unshift({callback: callback, context: context});
	},

	/**
	 * removeEventListener
	 * if only type is passed, all event listeners will be removed with this type.
	 *
	 * @param {string} type
	 * @param {function|undefined} callback
	 * @param {object|undefined} context
	 */
	removeEventListener: function removeEventListener(type, callback, context) {
		if(this._events[type]) {
			if(callback) {
				var listener = this._events[type];
				for(var i = listener.length - 1; i >=0; i--) {
					if(listener[i].callback === callback && (!context || context && listener[i].context === context)) {
						listener = listener.splice(i, 1);
					}
				}
			} else {
				delete this._events[type];
			}
		}
	},

	/**
	 * dispatchEvent
	 * parameters data will be added to event object
	 *
	 * @param {string} type
	 * @param {object|undefined} data
	 */
	dispatchEvent: function dispatchEvent(type, data) {
		var listener = this._events[type];
		if(listener && listener.length) {
			var index = listener.length;
			var eventObject = {type: type};
			for(var key in data) {
				eventObject[key] = data[key];
			}
			while(index--) {
				var context = listener[index].context;
				if(!context) {
					context = this;
				}
				listener[index].callback.call(context, eventObject);
			}
		}
	},

	//private

	_events: []
};
