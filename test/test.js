var assert = chai.assert;


describe('General', function(){
	//namespace.js
	describe('namespace', function(){
		var target = {};
		var ns = lib.namespace('demo.test', target);
		it('namespace should equal newly generated namespace ', function(){
			assert.strictEqual(ns, lib.namespace('demo.test', target));
		});
		it('namespace should not equal another namespace ', function(){
			assert.strictEqual(ns, lib.namespace('demo.test', target));
			assert.notStrictEqual(ns, lib.namespace('demo.testerl', target));
		})
	});

	//eventDispatcher.js
	describe('eventDispatcher', function(){
		var eventDispatcherObject = Object.create(lib.eventDispatcher);
		var eventDispatcherObject2 = Object.create(lib.eventDispatcher);
		eventDispatcherObject.EVENTS = {MUZZIKIMM: 'muzzikimm'};
		eventDispatcherObject2.EVENTS = {MUZZIKIMM: 'muzzikimm'};
		it('event dispatcher callback should be called twice (test removeEventListener)', function(done){
			var muzziKimmCounter = 2;
			function onEventDispatcherMuzzikimm() {
				if(!--muzziKimmCounter) {
					done();
				}
			}
			eventDispatcherObject.addEventListener(eventDispatcherObject.EVENTS.MUZZIKIMM, onEventDispatcherMuzzikimm);
			eventDispatcherObject.addEventListener(eventDispatcherObject.EVENTS.MUZZIKIMM, onEventDispatcherMuzzikimm);
			eventDispatcherObject.dispatchEvent(eventDispatcherObject.EVENTS.MUZZIKIMM);
			eventDispatcherObject.removeEventListener(eventDispatcherObject.EVENTS.MUZZIKIMM);
			eventDispatcherObject.dispatchEvent(eventDispatcherObject.EVENTS.MUZZIKIMM);
		});
		it('event dispatcher test second object and parameters ', function(done){
			eventDispatcherObject2.addEventListener(eventDispatcherObject2.EVENTS.MUZZIKIMM, onEventDispatcherMuzzikimm2);
			function onEventDispatcherMuzzikimm2(e) {
				if(e.muzziname == "sepp") {
					done();
				}
			}
			eventDispatcherObject2.dispatchEvent(eventDispatcherObject2.EVENTS.MUZZIKIMM, {muzziname: "sepp"});
		});
	});
});










