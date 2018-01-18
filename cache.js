(function () {
	// Main cache storage for saving data
	window.cacheStorage = {};
	// Cache function for adding data to cacheObject
	function cache (key, value) {
		// Check is value exist
		if (typeof value == 'undefined') {
			// Just return element of cacheStorage
			return cacheStorage[key];
		}
		// Set cacheStorage prop
		return cacheStorage[key] = value;
	}
	// Main object which can use for manipulating with DOM
	function _io_object_ () {}
	// Alternative for querySelector method
	_io_object_.prototype.qs = function (selector) {
		// Ternary condition to return element
		return !cache(selector) ?
			cache(selector, document.querySelector(selector))
				: cache(selector);
	}
	// Alternative for querySelectorAll method
	_io_object_.prototype.qsa = function (selector) {
		return !cache(selector) ?
			cache(selector, document.querySelectorAll(selector))
				: cache(selector);
	}
	// Alternative for getElementById method
	_io_object_.prototype.gbid = function (selector) {
		return !cache(selector) ?
			cache(selector, document.getElementById(selector))
				: cache(selector);
	}
	// Alternative for getElementsByClassName method
	_io_object_.prototype.gbclass = function (selector) {
		return !cache(selector) ?
			cache(selector, document.getElementsByClassName(selector))
				: cache(selector);
	}
	// Alternative for getElementsByName method
	_io_object_.prototype.gbname = function (selector) {
		return !cache(selector) ?
			cache(selector, document.getElementsByName(selector))
				: cache(selector);
	}
	// Alternative for getElementsByTagName method
	_io_object_.prototype.gbtag = function (selector) {
		return !cache(selector) ?
			cache(selector, document.getElementsByTagName(selector))
				: cache(selector);
	}
	// Extend _io_object for creating new methods for caching object
	_io_object_.prototype.extend = function (newMethod) {
		if (typeof newMethod != 'function') {
			console.warn("Argument of extend function need to be 'function'");
		}
		this[newMethod['name']] = newMethod;
		return this;
	}
	// Window methods and objects
	window._$ = new _io_object_();
	window.cache = cache;
})()