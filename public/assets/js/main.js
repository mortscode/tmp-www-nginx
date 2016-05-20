/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./_src/js/main.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _App = __webpack_require__(/*! ./app/App */ 1);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Include global SASS file
	__webpack_require__(/*! styles/main.scss */ 25);
	
	window.app = new _App2.default();

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./_src/js/app/App.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	var _avoidOrphan = __webpack_require__(/*! ./utils/avoid-orphan */ 13);
	
	var _avoidOrphan2 = _interopRequireDefault(_avoidOrphan);
	
	var _loadImages = __webpack_require__(/*! ./utils/load-images */ 14);
	
	var _loadImages2 = _interopRequireDefault(_loadImages);
	
	var _emitter = __webpack_require__(/*! ./utils/emitter */ 17);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _scroller = __webpack_require__(/*! ./utils/scroller */ 18);
	
	var _scroller2 = _interopRequireDefault(_scroller);
	
	var _resizer = __webpack_require__(/*! ./utils/resizer */ 20);
	
	var _resizer2 = _interopRequireDefault(_resizer);
	
	var _SearchButton = __webpack_require__(/*! ./components/SearchButton */ 22);
	
	var _SearchButton2 = _interopRequireDefault(_SearchButton);
	
	var _MobileNav = __webpack_require__(/*! ./components/MobileNav */ 23);
	
	var _MobileNav2 = _interopRequireDefault(_MobileNav);
	
	var _ScrollElems = __webpack_require__(/*! ./components/ScrollElems */ 24);
	
	var _ScrollElems2 = _interopRequireDefault(_ScrollElems);
	
	var _Modal = __webpack_require__(/*! ./components/Modal */ 26);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var App = function () {
	  function App() {
	    _classCallCheck(this, App);
	
	    this.$lazyImgs = (0, _properjsHobo2.default)('.js-lazy-img');
	    this.$scrolls = (0, _properjsHobo2.default)('.js-scrolls');
	    this.$orphans = (0, _properjsHobo2.default)('.js-avoid-orphan');
	    this.orphanArray = [];
	    this.initialize();
	  }
	
	  _createClass(App, [{
	    key: 'initialize',
	    value: function initialize() {
	      this.searchButton = new _SearchButton2.default('.js-search-icon');
	      this.mobileNav = new _MobileNav2.default('.js-nav-button');
	      this.modal = new _Modal2.default('.js-modal-init');
	      (0, _loadImages2.default)(this.$lazyImgs);
	      this._bindEvents();
	      this._mapOrphans();
	      this._mapScrolls();
	      this._printRecipe();
	    }
	  }, {
	    key: '_bindEvents',
	    value: function _bindEvents() {
	      _scroller2.default.on('scroll', function () {
	        _emitter2.default.fire('app--scroll');
	      });
	
	      _resizer2.default.on('resize', function () {
	        _emitter2.default.fire('app--resizer');
	      });
	    }
	  }, {
	    key: '_mapScrolls',
	    value: function _mapScrolls() {
	      var _this = this;
	
	      this.$scrolls.each(function (elem, i) {
	        var $elem = (0, _properjsHobo2.default)(_this.$scrolls[i]);
	        $elem.data('scrolls', new _ScrollElems2.default($elem));
	      });
	    }
	  }, {
	    key: '_mapOrphans',
	    value: function _mapOrphans() {
	      var _this2 = this;
	
	      this.$orphans.each(function (elem) {
	        _this2.orphanArray.push(elem);
	      });
	      this.orphanArray.map(function (orphan) {
	        (0, _avoidOrphan2.default)(orphan);
	      });
	    }
	  }, {
	    key: '_printRecipe',
	    value: function _printRecipe() {
	      (0, _properjsHobo2.default)('.js-print-recipe').on('click', function (e) {
	        e.preventDefault();
	        window.print();
	      });
	    }
	  }]);
	
	  return App;
	}();

	exports.default = App;

/***/ },
/* 2 */
/*!*********************************!*\
  !*** ./~/properjs-hobo/hobo.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 *
	 * @method hobo
	 * @author kitajchuk
	 * @hobo-dist npm run build
	 *
	 * @links
	 * https://developer.mozilla.org/en-US/docs/Web/API/Node
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element
	 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	 * https://github.com/jakearchibald/es6-promise
	 * http://www.html5rocks.com/en/tutorials/es6/promises/
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.hobo = factory();
	    }
	
	})(function () {
	
	    var Hobo = __webpack_require__( /*! ./lib/Hobo */ 3 ),
	        utils = __webpack_require__( /*! ./lib/utils */ 4 );
	
	
	    // Core Hobo methods:
	    Hobo.prototype.on = __webpack_require__( /*! ./lib/core/on */ 5 );
	    Hobo.prototype.off = __webpack_require__( /*! ./lib/core/off */ 7 );
	    Hobo.prototype.data = __webpack_require__( /*! ./lib/core/data */ 8 );
	    Hobo.prototype.find = __webpack_require__( /*! ./lib/core/find */ 9 );
	    Hobo.prototype.addClass = __webpack_require__( /*! ./lib/core/addClass */ 10 );
	    Hobo.prototype.removeClass = __webpack_require__( /*! ./lib/core/removeClass */ 11 );
	
	
	    // Extended Hobo methods:
	    // @hobo-ext
	
	
	    /**
	     *
	     * @public
	     * @method hobo
	     * @description Wrapper for `Hobo` instances.
	     * @param {string} selector The parameter passed to `querySelectorAll`
	     * @param {element} context The Element used to call `querySelectorAll`
	     *
	     */
	    hobo = function ( selector, context ) {
	        return new Hobo( selector, context );
	    };
	
	
	    // Attach Hobo utilities to `wrapper` method
	    hobo.ajax = __webpack_require__( /*! ./lib/core/ajax */ 12 );
	
	
	    return hobo;
	
	});

/***/ },
/* 3 */
/*!*************************************!*\
  !*** ./~/properjs-hobo/lib/Hobo.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * 
	 * @Hobo
	 * @author: kitajchuk
	 *
	 *
	 */
	var utils = __webpack_require__( /*! ./utils */ 4 ),
	    array = [];
	
	
	/**
	 *
	 * @class Hobo
	 * @classdesc A very small, modular DOM utility for modern web apps.
	 * @param {string} selector The goods - String, Element, Collection.
	 * @param {element} context The Element used to call `querySelectorAll`
	 *
	 */
	var Hobo = function ( selector, context ) {
	    // Hobo version?
	    this._hobo = utils.version;
	
	    // Hobo context
	    this._context = (context && context.nodeType && context.nodeType === 1 ? context : document);
	
	    // Hobo selector / elements
	    // Hobo supports a mixed selector argument
	
	    // Handle Window
	    // Handle Document
	    // Handle DOMElement
	    if ( selector === window || selector === document || (selector.nodeType && selector.nodeType === 1) ) {
	        this._selector = "";
	        selector = [ selector ];
	
	    // Handle String
	    } else if ( typeof selector === "string" ) {
	        // Trim trailing whitespace from the string
	        selector = utils.trimString( selector );
	
	        // Handle string html => Element creation
	        if ( utils.rTag.test( selector ) ) {
	            // Then remove the doctype - `<!DOCTYPE html>`
	            selector = selector.replace( utils.rDocType, "" );
	
	            // Create a dummy `hobo` element
	            // Dump the HTML payload in the `hobo` element
	            // Extract the elements from the `hobo` element
	            var el = document.createElement( "hobo" );
	                el.innerHTML = selector;
	
	            // Format elements as a true Array
	            selector = utils.makeArray( el.children );
	
	            el = null;
	
	        // Handle string selector
	        } else {
	            this._selector = selector;
	            selector = utils.makeArray( this._context.querySelectorAll( selector ) );
	        }
	
	    // Handle Collection: NodeList, HTMLCollection, Array
	    } else if ( selector.length !== undefined ) {
	        this._selector = "";
	        selector = utils.makeArray( selector );
	    }
	
	    // Hobo events?
	    this._events = {};
	
	    // Hobo length?
	    this.length = selector.length;
	
	    // Hobo elements?
	    for ( var i = this.length; i--; ) {
	        this[ i ] = selector[ i ];
	    }
	
	    // Initial mapping of each nodes data.
	    // Transfer {DOMStringMap} => {hoboDataMap}
	    this.forEach( utils.makeData );
	};
	
	
	// Shim Array-like presentation in console
	Hobo.prototype.splice = array.splice;
	
	
	/**
	 *
	 * @instance
	 * @method forEach
	 * @param {function} callback The method called on each iteration
	 * @memberof Hobo
	 * @description Make sure Hobo is iterable like an Array
	 *
	 */
	Hobo.prototype.each = array.forEach;
	Hobo.prototype.forEach = array.forEach;
	
	
	/**
	 *
	 * @instance
	 * @method push
	 * @param {?} element element1, ..., elementN
	 * @memberof Hobo
	 * @description Make sure Hobo is pushable like an Array
	 *
	 */
	Hobo.prototype.push = array.push;
	
	
	/**
	 *
	 * @instance
	 * @method map
	 * @param {function} callback The method called for each element
	 * @memberof Hobo
	 * @description Make sure Hobo is mappable like an Array
	 *
	 */
	Hobo.prototype.map = array.map;
	
	
	// Export the main Hobo Class :D
	module.exports = Hobo;

/***/ },
/* 4 */
/*!**************************************!*\
  !*** ./~/properjs-hobo/lib/utils.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*!
	 *
	 *
	 * @Hobo-utils
	 * @author: kitajchuk
	 *
	 *
	 */
	var version = "0.3.6",
	
	
	    rData = /^data-/,
	
	
	    rDigit = /\D/g,
	
	
	    rDashAlpha = /-([\da-z])/gi,
	
	
	    rTag = /^</,
	
	
	    rJson = /^\[|\{/,
	
	
	    rDocType = /^<\!DOCTYPE\shtml>/i,
	
	
	    rFront2Back = /^\s+|\s+$/g,
	
	
	    trimString = function ( str ) {
	        return str.replace( rFront2Back, "" );
	    },
	
	
	    camelCase = function ( string ) {
	        return string.replace( rDashAlpha, function ( all, letter ) {
	            return letter.toUpperCase();
	        });
	    },
	
	
	    makeId = function () {
	        return ("hobo" + ( version + Math.random() ).replace( rDigit, "" ));
	    },
	
	
	    makeArray = function ( nodes ) {
	        return [].slice.call( nodes );
	    },
	
	
	    makeData = function ( node ) {
	        if ( !node.hoboDataMap ) {
	            node.hoboDataMap = {};
	        }
	
	        if ( node.dataset ) {
	            _mapDataset( node );
	
	        } else if ( node.attributes ) {
	            _mapAttributes( node );
	        }
	    },
	
	
	    storeData = function ( data, node ) {
	        var id,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                id = camelCase( i );
	
	                node.hoboDataMap[ id ] = data[ i ];
	            }
	        }
	    },
	
	
	    mergeData = function ( data, node ) {
	        for ( var i in node.hoboDataMap ) {
	            if ( node.hoboDataMap.hasOwnProperty( i ) && !data[ i ] ) {
	                data[ i ] = node.hoboDataMap[ i ];
	            }
	        }
	    },
	
	
	    retrieveData = function ( key, node ) {
	        var ret = null;
	
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            ret = node.hoboDataMap[ key ];
	        }
	
	        return ret;
	    },
	
	
	    removeData = function ( key, node ) {
	        // All data mapped into Hobo will be camel-cased
	        key = camelCase( key );
	
	        if ( node.hoboDataMap && node.hoboDataMap[ key ] ) {
	            delete node.hoboDataMap[ key ];
	        }
	    },
	
	
	    serializeData = function ( data, prefix ) {
	        var str = [],
	            key,
	            val,
	            i;
	
	        for ( i in data ) {
	            if ( data.hasOwnProperty( i ) ) {
	                key = prefix ? (prefix + "[" + i + "]") : i;
	                val = data[ i ];
	
	                if ( typeof val === "object" ) {
	                    str.push( serializeData( val, key ) );
	
	                } else {
	                    str.push( (encodeURIComponent( key ) + "=" + encodeURIComponent( val )) );
	                }
	            }
	        }
	
	        return str.join( "&" );
	    },
	
	
	    // DOMStringMap camel-cases data- attributes.
	    // NamedNodeMap is a fallback which supports IE 10.
	    // Data mapped through Hobo must camel-case as well.
	
	
	    _getDataValue = function ( data ) {
	        if ( rJson.test( data ) ) {
	            try {
	                data = JSON.parse( data );
	
	            } catch ( error ) {
	                throw error;
	            }
	        }
	
	        return data;
	    },
	
	
	    // Use {NamedNodeMap}
	    _mapAttributes = function ( node ) {
	        var i = node.attributes.length;
	
	        for ( i; i--; ) {
	            if ( rData.test( node.attributes[ i ].name ) ) {
	                var key = camelCase( node.attributes[ i ].name.replace( rData, "" ) );
	
	                node.hoboDataMap[ key ] = _getDataValue( node.attributes[ i ].value );
	            }
	        }
	    },
	
	
	    // Use {DOMStringMap}
	    _mapDataset = function ( node ) {
	        for ( var i in node.dataset ) {
	            if ( node.dataset.hasOwnProperty( i ) ) {
	                node.hoboDataMap[ i ] = _getDataValue( node.dataset[ i ] );
	            }
	        }
	    };
	
	
	module.exports = {
	    version: version,
	    rData: rData,
	    rDigit: rDigit,
	    rTag: rTag,
	    rJson: rJson,
	    rDocType: rDocType,
	    rFront2Back: rFront2Back,
	    trimString: trimString,
	    camelCase: camelCase,
	    makeId: makeId,
	    makeArray: makeArray,
	    makeData: makeData,
	    storeData: storeData,
	    retrieveData: retrieveData,
	    mergeData: mergeData,
	    removeData: removeData,
	    serializeData: serializeData
	};

/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./~/properjs-hobo/lib/core/on.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var matchElement = __webpack_require__( /*! properjs-matchelement */ 6 ),
	    utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @private
	 * @method bind
	 * @description Bind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {string} selector
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var bind = function ( node, event, selector, callback ) {
	    // Unique ID for each node event
	    var eventId = (utils.makeId() + "EVENT"),
	
	        // The true event name
	        eventType = event,
	
	        // Normalize event handler with a small wrapper function
	        eventHandler = function ( e ) {
	            // Default context is `this` element
	            var context = (selector ? matchElement( e.target, selector, true ) : this);
	
	            // Handle `mouseenter` and `mouseleave`
	            if ( event === "mouseenter" || event === "mouseleave" ) {
	                var relatedElement = (event === "mouseenter" ? e.fromElement : e.toElement);
	
	                if ( context && ( relatedElement !== context && !context.contains( relatedElement ) ) ) {
	                    callback.call( context, e );
	                }
	
	            // Fire callback if context element
	            } else if ( context ) {
	                callback.call( context, e );
	            }
	        };
	
	    // Support `mouseenter` and `mouseleave`
	    if ( event === "mouseenter" ) {
	        eventType = "mouseover";
	
	    } else if ( event === "mouseleave" ) {
	        eventType = "mouseout";
	    }
	
	    // Each handler/callback pair gets stored in an `events` index
	    this._events[ event ][ eventId ] = {
	        id: eventId,
	        type: eventType,
	        node: node,
	        handler: eventHandler,
	        callback: callback
	    };
	
	    node.addEventListener( eventType, eventHandler, false );
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method on
	 * @description Bind a standard DOM Event. Honor delegation as a primary.
	 * @param {string} events 
	 * @param {string} selector 
	 * @param {function} callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, selector, callback ) {
	    var self = this;
	
	    // Normalize `selector` and `callback`
	    if ( !callback ) {
	        callback = selector;
	        selector = this._selector;
	    }
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    events.split( " " ).forEach(function ( event ) {
	        // Does this event type have an index yet
	        if ( !self._events[ event ] ) {
	            self._events[ event ] = {};
	        }
	
	        self.forEach(function ( node ) {
	            bind.call( self, node, event, selector, callback );
	        });
	    });
	
	    return this;
	};

/***/ },
/* 6 */
/*!*****************************************************************!*\
  !*** ./~/properjs-hobo/~/properjs-matchelement/matchElement.js ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Use native element selector matching
	 *
	 * @matchElement
	 * @author: kitajchuk
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.matchElement = factory();
	    }
	    
	})(function () {
	
	    /**
	     *
	     * Use native element selector matching
	     * @memberof! <global>
	     * @method matchElement
	     * @param {object} el the element
	     * @param {string} selector the selector to match
	     * @param {boolean} walk should we walk the tree if el is not a match?
	     * @returns element OR null
	     *
	     */
	    var matchElement = function ( el, selector, walk ) {
	        var method = ( el.matches ) ? "matches" : ( el.webkitMatchesSelector ) ? 
	                                      "webkitMatchesSelector" : ( el.mozMatchesSelector ) ? 
	                                      "mozMatchesSelector" : ( el.msMatchesSelector ) ? 
	                                      "msMatchesSelector" : ( el.oMatchesSelector ) ? 
	                                      "oMatchesSelector" : null;
	
	        // Try testing the element against the selector
	        // 0.1 => Method is not undefined
	        // 0.2 => Element passes method call
	        if ( method && el[ method ].call( el, selector ) ) {
	            return el;
	
	        // Keep walking up the DOM if we can - only if `walk` flag is `true`
	        } else if ( walk && el !== document.documentElement && el.parentNode ) {
	            return matchElement( el.parentNode, selector, walk );
	
	        // Otherwise we should not execute an event
	        } else {
	            return null;
	        }
	    };
	
	
	    return matchElement;
	
	});

/***/ },
/* 7 */
/*!*****************************************!*\
  !*** ./~/properjs-hobo/lib/core/off.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 *
	 * @private
	 * @method unbind
	 * @description Unbind a standard DOM Event.
	 * @param {element} node
	 * @param {string} event
	 * @param {function} callback
	 * @this {Hobo}
	 *
	 */
	var unbind = function ( node, event, callback ) {
	    var type,
	        evo,
	        id;
	
	    // Remove a single handler for an event type
	    if ( callback ) {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes, Match the callback
	                if ( evo.node === node && evo.callback === callback ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	
	    // Remove all handlers for an event type
	    } else {
	        for ( id in this._events[ event ] ) {
	            if ( this._events[ event ].hasOwnProperty( id ) ) {
	                evo = this._events[ event ][ id ];
	
	                // Match the nodes
	                if ( evo.node === node ) {
	                    node.removeEventListener( evo.type, evo.handler, false );
	
	                    delete this._events[ event ][ id ];
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @private
	 * @method teardown
	 * @description Unbind all events for instance.
	 * @param {element} node
	 * @this {Hobo}
	 *
	 */
	var teardown = function ( node ) {
	    var type,
	        evo,
	        id;
	
	    for ( type in this._events ) {
	        if ( this._events.hasOwnProperty( type ) ) {
	            for ( id in this._events[ type ] ) {
	                if ( this._events[ type ].hasOwnProperty( id ) ) {
	                    evo = this._events[ type ][ id ];
	
	                    // Match the nodes
	                    if ( evo.node === node ) {
	                        node.removeEventListener( evo.type, evo.handler, false );
	
	                        delete this._events[ type ][ id ];
	                    }
	                }
	            }
	        }
	    }
	};
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method off
	 * @description Un-Bind a standard DOM Event.
	 * @param {string} events The event type
	 * @param {function} callback The supplied callback
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( events, callback ) {
	    var self = this;
	
	    // Iterate over event(s)
	    // Space separated event list is supported
	    // Example: "DOMMouseScroll mousewheel"
	    // off() can be called with no args, account for this and remove ALL events
	    (events ? events.split( " " ) : [null]).forEach(function ( event ) {
	        self.forEach(function ( node ) {
	            // Explicit `null` check for teardown
	            if ( event === null ) {
	                teardown.call( self, node );
	
	            } else {
	                unbind.call( self, node, event, callback );
	            }
	        });
	    });
	
	    return this;
	};

/***/ },
/* 8 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/data.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method data
	 * @description Get / set data values with nodes.
	 * @param {string} key The access key
	 * @param {string} value The value to be stored
	 * @returns {mixed}
	 *
	 */
	module.exports = function ( key, value ) {
	    // Any `non-unique` data keys resolve to the first unique occurrence
	    // Exactly how jQuery handles `.data( ... )` on multi-node collections
	
	    var ret = this,
	        obj = null;
	
	    // Storing data from an Object
	    if ( typeof key === "object" ) {
	        obj = key;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Storing data as a `key:value` pair
	    } else if ( value ) {
	        obj = {};
	        obj[ key ] = value;
	
	        this.forEach(function ( node ) {
	            utils.storeData( obj, node );
	        });
	
	    // Accessing data by `key`
	    } else if ( key ) {
	        this.forEach(function ( node ) {
	            if ( obj !== null ) {
	                return;
	            }
	
	            obj = utils.retrieveData( key, node );
	
	        });
	
	        ret = obj;
	
	    // Accessing all data
	    // Merges all `unique` data for a Hobo set
	    } else {
	        obj = {};
	
	        // Object is mutated here by `mergeData`
	        this.forEach(function ( node ) {
	            utils.mergeData( obj, node );
	        });
	
	        ret = obj;
	    }
	
	    return ret;
	};

/***/ },
/* 9 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/find.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var Hobo = __webpack_require__( /*! ../Hobo */ 3 ),
	    utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method find
	 * @description Query into a Hobo instance for new nodes.
	 * @param {string} selector The selector to query for
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( selector ) {
	    var ret = this;
	
	    // If we are `finding` within a multi-node collection...
	    // Here its probably faster to grab the nodes within each Node
	    // and then just let the context be the document for the new instance. 
	    if ( this.length > 1 ) {
	        ret = [];
	
	        this.forEach(function ( node ) {
	            ret = ret.concat( utils.makeArray( node.querySelectorAll( selector ) ) );
	        });
	
	        ret = new Hobo( ret, null );
	
	    // Single node collection
	    // Empty node collection
	    } else {
	        ret = new Hobo( (this.length ? selector : []), (this.length ? this[ 0 ] : null) );
	    }
	
	    return ret;
	};

/***/ },
/* 10 */
/*!**********************************************!*\
  !*** ./~/properjs-hobo/lib/core/addClass.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method addClass
	 * @description Add one or more classNames to the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        var newClass = classes.split( " " ),
	            elsClass = element.className.split( " " );
	
	        newClass.forEach(function ( klass ) {
	            if ( elsClass.indexOf( klass ) === -1 ) {
	                elsClass.push( klass );
	            }
	        });
	
	        element.className = utils.trimString( elsClass.join( " " ) );
	    });
	
	    return this;
	};

/***/ },
/* 11 */
/*!*************************************************!*\
  !*** ./~/properjs-hobo/lib/core/removeClass.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @instance
	 * @memberof Hobo
	 * @method removeClass
	 * @description Remove one or more classNames from the nodes.
	 * @param {string} classes The space-separated classNames
	 * @returns {Hobo}
	 *
	 */
	module.exports = function ( classes ) {
	    this.forEach(function ( element ) {
	        // Explicit check for `undefined`
	        // Using `!classes` would be bad in this case
	        // Calling `removeClass( "" )` should not wipe the entire className
	        if ( classes === undefined ) {
	            element.className = "";
	
	        } else {
	            var oldClass = classes.split( " " ),
	                elsClass = element.className.split( " " );
	
	            oldClass.forEach(function ( klass ) {
	                if ( elsClass.indexOf( klass ) !== -1 ) {
	                    elsClass.splice( elsClass.indexOf( klass ), 1 );
	                }
	            });
	
	            element.className = utils.trimString( elsClass.join( " " ) );
	        }
	    });
	
	    return this;
	};

/***/ },
/* 12 */
/*!******************************************!*\
  !*** ./~/properjs-hobo/lib/core/ajax.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__( /*! ../utils */ 4 );
	
	
	/**
	 *
	 * @static
	 * @memberof Hobo
	 * @method ajax
	 * @description Perform standar XHR with a native Promise.
	 *              dataType can be `html`, `json`, `jsonp`.
	 * @param {object} config The ajax config object
	 *                        url       => string, default: window.location.href
	 *                        data      => object, default: null
	 *                        dataType  => string, default: "html"
	 *                        method    => string, default: "GET"
	 *                        jsonp     => string, default: "callback"
	 *                        headers   => object, default: null
	 * @returns {Promise}
	 *
	 */
	module.exports = function ( config ) {
	    var params = (config.data || null),
	        dataType = (config.dataType || "html"),
	        method = (config.method || "GET").toUpperCase(),
	        url = (config.url || window.location.href),
	        headers = (config.headers || null);
	
	    // Handle params
	    // Params will be one of the following:
	    // Serialized querystring
	    // Instanceof FormData
	    // Null
	    if ( params && !(FormData && params instanceof FormData) ) {
	        params = utils.serializeData( config.data );
	    }
	
	    // Handle params in GET URL
	    if ( method === "GET" && params ) {
	        url += ("?" + params);
	    }
	
	    return new Promise(function ( resolve, reject ) {
	        var handleResponse = function ( response ) {
	            if ( dataType === "json" ) {
	                try {
	                    response = JSON.parse( response );
	
	                } catch ( error ) {
	                    reject( ("Rejecting on JSON.parse error : " + error) );
	                }
	            }
	
	            resolve( response );
	        };
	
	        // JSONP
	        if ( dataType === "jsonp" ) {
	            var jsonpCallbackValue = (utils.makeId() + "JSONP"),
	                jsonpCallbackKey = (config.jsonp || "callback"),
	                jsonpScript = document.createElement( "script" );
	
	            jsonpScript.src = (url + (/\?/.test( url ) ? "&" : "?") + jsonpCallbackKey + "=" + jsonpCallbackValue);
	
	            window[ jsonpCallbackValue ] = function ( response ) {
	                document.getElementsByTagName( "head" )[ 0 ].removeChild( jsonpScript );
	                jsonpScript = null;
	                delete window[ jsonpCallbackValue ];
	
	                handleResponse( response );
	            };
	
	            document.getElementsByTagName( "head" )[ 0 ].appendChild( jsonpScript );
	
	        // XHR
	        } else {
	            var xhr = new XMLHttpRequest();
	
	            xhr.open( method, url, true );
	
	            if ( headers ) {
	                for ( var header in headers ) {
	                    if ( headers.hasOwnProperty( header ) ) {
	                        xhr.setRequestHeader( header, headers[ header ] );
	                    }
	                }
	            }
	
	            xhr.onreadystatechange = function ( e ) {
	                if ( this.readyState === 4 ) {
	                    // Two-Hundo's are A-Okay with Hobo
	                    if ( /^20/.test( this.status ) ) {
	                        handleResponse( this.responseText );
	
	                    } else {
	                        reject( ("Rejecting on server status code : " + this.status) );
	                    }
	                }
	            };
	
	            xhr.send( params );
	        }
	    });
	};

/***/ },
/* 13 */
/*!*******************************************!*\
  !*** ./_src/js/app/utils/avoid-orphan.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = avoidOrphan;
	function avoidOrphan(elem) {
	  var last = elem.lastChild;
	  var windowWidth = window.innerWidth;
	  var trimmed = void 0;
	  var wordArray = void 0;
	  var wordCount = void 0;
	
	  // On mobile, do not apply ophan rule to paragraph tags. It looks funny.
	  if (windowWidth < 640 && elem.nodeName === 'P') {
	    return;
	  }
	
	  if (last && last.nodeType === 3) {
	    trimmed = last.nodeValue.trim();
	    wordArray = trimmed.match(/\S+/g);
	    wordCount = wordArray ? wordArray.length : 0;
	
	    if (wordCount > 3) {
	      last.nodeValue = trimmed.replace(/\s+([^\s]+\s*)$/g, '\xA0$1');
	    }
	  }
	}

/***/ },
/* 14 */
/*!******************************************!*\
  !*** ./_src/js/app/utils/load-images.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	var _properjsImageloader = __webpack_require__(/*! properjs-imageloader */ 15);
	
	var _properjsImageloader2 = _interopRequireDefault(_properjsImageloader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *
	 * @description Module onImageLoadHander method, handles event
	 * @method isElementLoadable
	 * @param {object} el The DOMElement to check the offset of
	 * @memberof util
	 * @return {boolean}
	 *
	 */
	var isElementLoadable = function isElementLoadable(el) {
	  if (el) {
	    var bounds = el.getBoundingClientRect();
	    return bounds.top < window.innerHeight * 2;
	  }
	};
	
	/**
	 *
	 * @description Fresh query to lazyload images on page
	 * @method loadImages
	 * @param {object} images Optional collection of images to load
	 * @param {function} handler Optional handler for load conditions
	 * @memberof util
	 * @return {instance}
	 *
	 */
	
	/* eslint-disable no-param-reassign */
	var loadImages = function loadImages(images, handler) {
	  // Normalize the handler
	  handler = handler || isElementLoadable;
	
	  // Normalize the images
	  images = images || (0, _properjsHobo2.default)('.js-lazy-image');
	
	  return new _properjsImageloader2.default({
	    elements: images,
	    property: 'data-img-src',
	    executor: handler
	  });
	};
	/* eslint-enable no-param-reassign */
	
	exports.default = loadImages;

/***/ },
/* 15 */
/*!***********************************************!*\
  !*** ./~/properjs-imageloader/ImageLoader.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Handle lazy-loading images with contextual load conditions.
	 *
	 * @ImageLoader
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ImageLoader = factory();
	    }
	
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 16 );
	
	
	    /**
	     *
	     * Handle lazy-loading images with unique callback conditions
	     * @memberof! <global>
	     * @requires raf
	     * @constructor ImageLoader
	     * @param {object} options Controller settings
	     * <ul>
	     * <li>elements - The collection of elements to load against</li>
	     * <li>property - The property to pull the image source from</li>
	     * <li>transitionDelay - The timeout before transition starts</li>
	     * <li>transitionDuration - The length of the animation</li>
	     * </ul>
	     *
	     */
	    var ImageLoader = function ( options ) {
	        var self = this;
	
	        if ( !options ) {
	            throw new Error( "ImageLoader Class requires options to be passed" );
	        }
	
	        // Up, up and away...
	        Controller.call( this );
	
	        /**
	         *
	         * The method to determine if an image should load itself
	         * @memberof ImageLoader
	         * @member _executor
	         * @private
	         *
	         */
	        this._executor = (options.executor || function ( elem ) {
	            return elem;
	        });
	
	        /**
	         *
	         * The Collection to load against
	         * @memberof ImageLoader
	         * @member _elements
	         * @private
	         *
	         */
	        this._elements = options.elements;
	
	        /**
	         *
	         * The property to get image source from
	         * @memberof ImageLoader
	         * @member _property
	         * @private
	         *
	         */
	        this._property = (options.property || "data-src");
	
	        /**
	         *
	         * The way to load, async or sync
	         * Using "sync" loading requires calling .start() on the instance
	         * and the "handle" event will not be utilized, rather each image
	         * will be loaded in succession as the previous finishes loading
	         * @memberof ImageLoader
	         * @member _loadType
	         * @private
	         *
	         */
	        this._loadType = (options.loadType || "async");
	
	        /**
	         *
	         * The current amount of elements lazy loaded
	         * @memberof ImageLoader
	         * @member _numLoaded
	         * @private
	         *
	         */
	        this._numLoaded = 0;
	
	        /**
	         *
	         * The total amount of elements to lazy load
	         * @memberof ImageLoader
	         * @member _num2Load
	         * @private
	         *
	         */
	        this._num2Load = (this._elements ? this._elements.length : 0);
	
	        /**
	         *
	         * The delay to execute lazy loading on an element in ms
	         * @memberof ImageLoader
	         * @member _transitionDelay
	         * @default 100
	         * @private
	         *
	         */
	        this._transitionDelay = (options.transitionDelay || 0);
	
	        /**
	         *
	         * The duration on a lazy loaded elements fade in in ms
	         * @memberof ImageLoader
	         * @member _transitionDuration
	         * @default 600
	         * @private
	         *
	         */
	        this._transitionDuration = (options.transitionDuration || 400);
	
	        /**
	         *
	         * This flags that all elements have been loaded
	         * @memberof ImageLoader
	         * @member _resolved
	         * @private
	         *
	         */
	        this._resolved = false;
	
	        // Break out if no elements in collection
	        if ( !this._elements.length ) {
	            return this;
	        }
	
	        // Only run animation frame for async loading
	        if ( this._loadType === "async" ) {
	            this.initAsync();
	
	        } else {
	            this.initSync();
	        }
	    };
	
	
	    /**
	     *
	     * @extends Controller
	     *
	     */
	    ImageLoader.prototype = Object.create( Controller.prototype );
	
	
	    /**
	     *
	     * Support asynchronous loading of a set of images
	     * @memberof ImageLoader
	     * @method initAsync
	     *
	     */
	    ImageLoader.prototype.initAsync = function () {
	        var self = this;
	
	        this.go(function () {
	            if ( self._resolved ) {
	                self.stop();
	
	            } else {
	                self.handle();
	            }
	        });
	    };
	
	    /**
	     *
	     * Support batch synchronous loading of a set of images
	     * @memberof ImageLoader
	     * @method initSync
	     *
	     */
	    ImageLoader.prototype.initSync = function () {
	        var self = this;
	
	        function syncLoad() {
	            var elem = self._elements[ self._numLoaded ];
	
	            self._numLoaded++;
	
	            self.load( elem, function ( error ) {
	                if ( !error && !self._resolved ) {
	                    syncLoad();
	                }
	            });
	        }
	
	        syncLoad();
	    };
	
	    /**
	     *
	     * Perform the image loading and set correct values on element
	     * @method load
	     * @memberof ImageLoader
	     * @param {object} $elem element object
	     * @param {function} callback optional callback for each load
	     * @fires done
	     *
	     */
	    ImageLoader.prototype.load = function ( element, callback ) {
	        var self = this,
	            image = null,
	            timeout = null,
	            isImage = (element.nodeName === "IMG"),
	            source = element.getAttribute( this._property );
	
	        element.setAttribute( "data-imageloader", true );
	
	        if ( isImage ) {
	            image = element;
	
	        } else {
	            image = new Image();
	        }
	
	        timeout = setTimeout(function () {
	            clearTimeout( timeout );
	
	            image.onload = function () {
	                self.fire( "load", element );
	
	                if ( !isImage ) {
	                    element.style.backgroundImage = ("url(" + source + ")");
	
	                    image = null;
	                }
	
	                timeout = setTimeout(function () {
	                    clearTimeout( timeout );
	
	                    if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                        self._resolve( true );
	
	                    } else if ( typeof callback === "function" ) {
	                        // Errors first
	                        callback( false );
	                    }
	
	                }, self._transitionDuration );
	            };
	
	            image.onerror = function () {
	                self.fire( "error", element );
	
	                if ( (self._numLoaded === self._num2Load) && !self._resolved ) {
	                    self._resolve( true );
	
	                } else if ( typeof callback === "function" ) {
	                    // Errors first
	                    callback( true );
	                }
	            };
	
	            image.src = source;
	
	        }, this._transitionDelay );
	
	        return this;
	    };
	
	    /**
	     *
	     * Handles element iterations and loading based on callbacks
	     * @memberof ImageLoader
	     * @method handle
	     *
	     */
	    ImageLoader.prototype.handle = function () {
	        var elems = this.getNotLoaded(),
	            self = this;
	
	        for ( var i = 0, len = elems.length; i < len; i++ ) {
	            if ( self._executor( elems[ i ] ) ) {
	                self._numLoaded++;
	
	                self.load( elems[ i ] );
	            }
	        }
	    };
	
	    /**
	     *
	     * Get all images in the set that have yet to be loaded
	     * @memberof ImageLoader
	     * @method getNotLoaded
	     *
	     */
	    ImageLoader.prototype.getNotLoaded = function () {
	        var elems = [];
	
	        for ( var i = 0, len = this._elements.length; i < len; i++ ) {
	            if ( !this._elements[ i ].getAttribute( "data-imageloader" ) ) {
	                elems.push( this._elements[ i ] );
	            }
	        }
	
	        return elems;
	    };
	
	    /**
	     *
	     * Resolve an instance and remove it from the stack
	     * @memberof ImageLoader
	     * @method _resolve
	     *
	     */
	    ImageLoader.prototype._resolve = function () {
	        // Resolved state
	        this._resolved = true;
	
	        // Fires the predefined "done" event
	        this.fire( "done" );
	    };
	
	
	    return ImageLoader;
	
	
	});

/***/ },
/* 16 */
/*!*********************************************!*\
  !*** ./~/properjs-controller/Controller.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Event / Animation cycle manager
	 *
	 * @Controller
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.Controller = factory();
	    }
	    
	})(function () {
	    // Private animation functions
	    var raf = window.requestAnimationFrame,
	        caf = window.cancelAnimationFrame,
	    
	    
	    /**
	     *
	     * Event / Animation cycle manager
	     * @constructor Controller
	     * @requires raf
	     * @memberof! <global>
	     *
	     */
	    Controller = function () {
	        return this.init.apply( this, arguments );
	    };
	    
	    Controller.prototype = {
	        constructor: Controller,
	    
	        /**
	         *
	         * Controller constructor method
	         * @memberof Controller
	         * @method Controller.init
	         *
	         */
	        init: function () {
	            /**
	             *
	             * Controller event handlers object
	             * @memberof Controller
	             * @member _handlers
	             * @private
	             *
	             */
	            this._handlers = {};
	    
	            /**
	             *
	             * Controller unique ID
	             * @memberof Controller
	             * @member _uid
	             * @private
	             *
	             */
	            this._uid = 0;
	    
	            /**
	             *
	             * Started iteration flag
	             * @memberof Controller
	             * @member _started
	             * @private
	             *
	             */
	            this._started = false;
	    
	            /**
	             *
	             * Paused flag
	             * @memberof Controller
	             * @member _paused
	             * @private
	             *
	             */
	            this._paused = false;
	    
	            /**
	             *
	             * Timeout reference
	             * @memberof Controller
	             * @member _cycle
	             * @private
	             *
	             */
	            this._cycle = null;
	        },
	    
	        /**
	         *
	         * Controller go method to start frames
	         * @memberof Controller
	         * @method go
	         *
	         */
	        go: function ( fn ) {
	            if ( this._started && this._cycle ) {
	                return this;
	            }
	    
	            this._started = true;
	    
	            var self = this,
	                anim = function () {
	                    self._cycle = raf( anim );
	    
	                    if ( self._started ) {
	                        if ( typeof fn === "function" ) {
	                            fn();
	                        }
	                    }
	                };
	    
	            anim();
	        },
	    
	        /**
	         *
	         * Pause the cycle
	         * @memberof Controller
	         * @method pause
	         *
	         */
	        pause: function () {
	            this._paused = true;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Play the cycle
	         * @memberof Controller
	         * @method play
	         *
	         */
	        play: function () {
	            this._paused = false;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Stop the cycle
	         * @memberof Controller
	         * @method stop
	         *
	         */
	        stop: function () {
	            caf( this._cycle );
	    
	            this._paused = false;
	            this._started = false;
	            this._cycle = null;
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller add event handler
	         * @memberof Controller
	         * @method on
	         * @param {string} event the event to listen for
	         * @param {function} handler the handler to call
	         *
	         */
	        on: function ( event, handler ) {
	            var events = event.split( " " );
	    
	            // One unique ID per handler
	            handler._jsControllerID = this.getUID();
	    
	            for ( var i = events.length; i--; ) {
	                if ( typeof handler === "function" ) {
	                    if ( !this._handlers[ events[ i ] ] ) {
	                        this._handlers[ events[ i ] ] = [];
	                    }
	    
	                    // Handler can be stored with multiple events
	                    this._handlers[ events[ i ] ].push( handler );
	                }
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller remove event handler
	         * @memberof Controller
	         * @method off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         *
	         */
	        off: function ( event, handler ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            // Remove a single handler
	            if ( handler ) {
	                this._off( event, handler );
	    
	            // Remove all handlers for event
	            } else {
	                this._offed( event );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Controller fire an event
	         * @memberof Controller
	         * @method fire
	         * @param {string} event the event to fire
	         *
	         */
	        fire: function ( event ) {
	            if ( !this._handlers[ event ] ) {
	                return this;
	            }
	    
	            var args = [].slice.call( arguments, 1 );
	    
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ].apply( this, args );
	            }
	    
	            return this;
	        },
	    
	        /**
	         *
	         * Get a unique ID
	         * @memberof Controller
	         * @method getUID
	         * @returns number
	         *
	         */
	        getUID: function () {
	            this._uid = (this._uid + 1);
	    
	            return this._uid;
	        },
	    
	        /**
	         *
	         * Controller internal off method assumes event AND handler are good
	         * @memberof Controller
	         * @method _off
	         * @param {string} event the event to remove handler for
	         * @param {function} handler the handler to remove
	         * @private
	         *
	         */
	        _off: function ( event, handler ) {
	            for ( var i = 0, len = this._handlers[ event ].length; i < len; i++ ) {
	                if ( handler._jsControllerID === this._handlers[ event ][ i ]._jsControllerID ) {
	                    this._handlers[ event ].splice( i, 1 );
	    
	                    break;
	                }
	            }
	        },
	    
	        /**
	         *
	         * Controller completely remove all handlers and an event type
	         * @memberof Controller
	         * @method _offed
	         * @param {string} event the event to remove handler for
	         * @private
	         *
	         */
	        _offed: function ( event ) {
	            for ( var i = this._handlers[ event ].length; i--; ) {
	                this._handlers[ event ][ i ] = null;
	            }
	    
	            delete this._handlers[ event ];
	        }
	    };
	
	    return Controller;
	});

/***/ },
/* 17 */
/*!**************************************!*\
  !*** ./_src/js/app/utils/emitter.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _properjsController = __webpack_require__(/*! properjs-controller */ 16);
	
	var _properjsController2 = _interopRequireDefault(_properjsController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = new _properjsController2.default();
	
	exports.default = emitter;

/***/ },
/* 18 */
/*!***************************************!*\
  !*** ./_src/js/app/utils/scroller.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _properjsScrollcontroller = __webpack_require__(/*! properjs-scrollcontroller */ 19);
	
	var _properjsScrollcontroller2 = _interopRequireDefault(_properjsScrollcontroller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scroller = new _properjsScrollcontroller2.default();
	
	exports.default = scroller;

/***/ },
/* 19 */
/*!*********************************************************!*\
  !*** ./~/properjs-scrollcontroller/ScrollController.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Window scroll event controller
	 *
	 * @ScrollController
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ScrollController = factory();
	    }
	    
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 16 ),
	        
	        // Current scroll position
	        _currentY = null,
	    
	        // Singleton
	        _instance = null;
	    
	    /**
	     *
	     * Window scroll event controller
	     * @constructor ScrollController
	     * @augments Controller
	     * @requires Controller
	     * @memberof! <global>
	     *
	     * @fires scroll
	     * @fires scrolldown
	     * @fires scrollup
	     * @fires scrollmax
	     * @fires scrollmin
	     *
	     */
	    var ScrollController = function () {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	    
	            // Call on parent cycle
	            this.go(function () {
	                var currentY = _instance.getScrollY(),
	                    isStill = (currentY === _currentY),
	                    isScroll = (currentY !== _currentY),
	                    isScrollUp = (currentY < _currentY),
	                    isScrollDown = (currentY > _currentY),
	                    isScrollMax = (currentY !== _currentY && _instance.isScrollMax()),
	                    isScrollMin = (currentY !== _currentY && _instance.isScrollMin());
	    
	                // Fire blanket scroll event
	                if ( isScroll ) {
	                    /**
	                     *
	                     * @event scroll
	                     *
	                     */
	                    _instance.fire( "scroll" );
	                }
	    
	                // Fire scrollup and scrolldown
	                if ( isScrollDown ) {
	                    /**
	                     *
	                     * @event scrolldown
	                     *
	                     */
	                    _instance.fire( "scrolldown" );
	    
	                } else if ( isScrollUp ) {
	                    /**
	                     *
	                     * @event scrollup
	                     *
	                     */
	                    _instance.fire( "scrollup" );
	                }
	    
	                // Fire scrollmax and scrollmin
	                if ( isScrollMax ) {
	                    /**
	                     *
	                     * @event scrollmax
	                     *
	                     */
	                    _instance.fire( "scrollmax" );
	    
	                } else if ( isScrollMin ) {
	                    /**
	                     *
	                     * @event scrollmin
	                     *
	                     */
	                    _instance.fire( "scrollmin" );
	                }
	    
	                _currentY = currentY;
	            });
	        }
	    
	        return _instance;
	    };
	    
	    ScrollController.prototype = new Controller();
	    
	    /**
	     *
	     * Returns the current window vertical scroll position
	     * @memberof ScrollController
	     * @method getScrollY
	     * @returns number
	     *
	     */
	    ScrollController.prototype.getScrollY = function () {
	        return (window.scrollY || document.documentElement.scrollTop);
	    };
	    
	    /**
	     *
	     * Get the max document scrollable height
	     * @memberof ScrollController
	     * @method getScrollMax
	     * @returns number
	     *
	     */
	    ScrollController.prototype.getScrollMax = function () {
	        return Math.max(
	            document.body.scrollHeight, document.documentElement.scrollHeight,
	            document.body.offsetHeight, document.documentElement.offsetHeight,
	            document.documentElement.clientHeight
	
	        ) - window.innerHeight;
	    };
	    
	    /**
	     *
	     * Determines if scroll position is at maximum for document
	     * @memberof ScrollController
	     * @method isScrollMax
	     * @returns boolean
	     *
	     */
	    ScrollController.prototype.isScrollMax = function () {
	        return (this.getScrollY() >= this.getScrollMax());
	    };
	    
	    /**
	     *
	     * Determines if scroll position is at minimum for document
	     * @memberof ScrollController
	     * @method isScrollMin
	     * @returns boolean
	     *
	     */
	    ScrollController.prototype.isScrollMin = function () {
	        return (this.getScrollY() <= 0);
	    };
	    
	    
	    return ScrollController;
	
	});

/***/ },
/* 20 */
/*!**************************************!*\
  !*** ./_src/js/app/utils/resizer.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _properjsResizecontroller = __webpack_require__(/*! properjs-resizecontroller */ 21);
	
	var _properjsResizecontroller2 = _interopRequireDefault(_properjsResizecontroller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var resizer = new _properjsResizecontroller2.default();
	
	exports.default = resizer;

/***/ },
/* 21 */
/*!*********************************************************!*\
  !*** ./~/properjs-resizecontroller/ResizeController.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 *
	 * Window resize / orientationchange event controller
	 *
	 * @ResizeController
	 * @author: kitajchuk
	 *
	 *
	 */
	(function ( factory ) {
	    
	    if ( true ) {
	        module.exports = factory();
	
	    } else if ( typeof window !== "undefined" ) {
	        window.ResizeController = factory();
	    }
	    
	})(function () {
	
	    var Controller = __webpack_require__( /*! properjs-controller */ 16 ),
	
	        // Orientation?
	        _hasOrientation = ("orientation" in window),
	
	        // Current window viewport
	        _currentView = null,
	
	        // Singleton
	        _instance = null;
	
	    /**
	     *
	     * Window resize / orientationchange event controller
	     * @constructor ResizeController
	     * @augments Controller
	     * @requires Controller
	     * @memberof! <global>
	     *
	     * @fires resize
	     * @fires resizedown
	     * @fires resizeup
	     * @fires resizewidth
	     * @fires resizeheight
	     * @fires orientationchange
	     * @fires orientationportrait
	     * @fires orientationlandscape
	     *
	     */
	    var ResizeController = function () {
	        // Singleton
	        if ( !_instance ) {
	            _instance = this;
	
	            // Initial viewport settings
	            _currentView = _instance.getViewport();
	
	            // Call on parent cycle
	            this.go(function () {
	                var currentView = _instance.getViewport(),
	                    isStill = (currentView.width === _currentView.width && currentView.height === _currentView.height),
	                    isResize = (currentView.width !== _currentView.width || currentView.height !== _currentView.height),
	                    isResizeUp = (currentView.width > _currentView.width || currentView.height > _currentView.height),
	                    isResizeDown = (currentView.width < _currentView.width || currentView.height < _currentView.height),
	                    isResizeWidth = (currentView.width !== _currentView.width),
	                    isResizeHeight = (currentView.height !== _currentView.height),
	                    isOrientation = (currentView.orient !== _currentView.orient),
	                    isOrientationPortrait = (currentView.orient !== _currentView.orient && currentView.orient !== 90),
	                    isOrientationLandscape = (currentView.orient !== _currentView.orient && currentView.orient === 90);
	
	                // Fire blanket resize event
	                if ( isResize ) {
	                    /**
	                     *
	                     * @event resize
	                     *
	                     */
	                    _instance.fire( "resize" );
	                }
	
	                // Fire resizeup and resizedown
	                if ( isResizeDown ) {
	                    /**
	                     *
	                     * @event resizedown
	                     *
	                     */
	                    _instance.fire( "resizedown" );
	
	                } else if ( isResizeUp ) {
	                    /**
	                     *
	                     * @event resizeup
	                     *
	                     */
	                    _instance.fire( "resizeup" );
	                }
	
	                // Fire resizewidth and resizeheight
	                if ( isResizeWidth ) {
	                    /**
	                     *
	                     * @event resizewidth
	                     *
	                     */
	                    _instance.fire( "resizewidth" );
	
	                } else if ( isResizeHeight ) {
	                    /**
	                     *
	                     * @event resizeheight
	                     *
	                     */
	                    _instance.fire( "resizeheight" );
	                }
	
	                // Fire blanket orientationchange event
	                if ( isOrientation ) {
	                    /**
	                     *
	                     * @event orientationchange
	                     *
	                     */
	                    _instance.fire( "orientationchange" );
	                }
	
	                // Fire orientationportrait and orientationlandscape
	                if ( isOrientationPortrait ) {
	                    /**
	                     *
	                     * @event orientationportrait
	                     *
	                     */
	                    _instance.fire( "orientationportrait" );
	
	                } else if ( isOrientationLandscape ) {
	                    /**
	                     *
	                     * @event orientationlandscape
	                     *
	                     */
	                    _instance.fire( "orientationlandscape" );
	                }
	
	                _currentView = currentView;
	            });
	        }
	
	        return _instance;
	    };
	
	    ResizeController.prototype = new Controller();
	
	    /**
	     *
	     * Returns the current window viewport specs
	     * @memberof ResizeController
	     * @method getViewport
	     * @returns object
	     *
	     */
	    ResizeController.prototype.getViewport = function () {
	        return {
	            width: window.innerWidth,
	            height: window.innerHeight,
	            orient: _hasOrientation ? Math.abs( window.orientation ) : null
	        };
	    };
	
	    /**
	     *
	     * Tells if the viewport is in protrait mode
	     * @memberof ResizeController
	     * @method isPortrait
	     * @returns boolean
	     *
	     */
	    ResizeController.prototype.isPortrait = function () {
	        var orient = this.getViewport().orient;
	
	        return (orient !== null && orient !== 90);
	    };
	
	    /**
	     *
	     * Tells if the viewport is in landscape mode
	     * @memberof ResizeController
	     * @method isLandscape
	     * @returns boolean
	     *
	     */
	    ResizeController.prototype.isLandscape = function () {
	        var orient = this.getViewport().orient;
	
	        return (orient !== null && orient === 90);
	    };
	
	
	    return ResizeController;
	
	});

/***/ },
/* 22 */
/*!************************************************!*\
  !*** ./_src/js/app/components/SearchButton.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SearchButton = function () {
	  function SearchButton(elem) {
	    _classCallCheck(this, SearchButton);
	
	    this.$elem = (0, _properjsHobo2.default)(elem);
	    this.$searchForm = (0, _properjsHobo2.default)('.js-search-form');
	    this.$searchField = (0, _properjsHobo2.default)('.js-search');
	    this.$headerlogo = (0, _properjsHobo2.default)('.js-header-logo');
	    this.isOpen = false;
	
	    this.initialize();
	  }
	
	  _createClass(SearchButton, [{
	    key: 'initialize',
	    value: function initialize() {
	      this.setState();
	    }
	  }, {
	    key: 'setState',
	    value: function setState() {
	      var _this = this;
	
	      this.$elem.on('click', function () {
	        if (_this.isOpen) {
	          _this.hideSearch();
	        } else {
	          _this.showSearch();
	        }
	      });
	    }
	  }, {
	    key: 'showSearch',
	    value: function showSearch() {
	      this.$searchForm.addClass('is-open');
	      this.$headerlogo.addClass('hide');
	      this.$elem.addClass('close');
	      this.isOpen = true;
	    }
	  }, {
	    key: 'hideSearch',
	    value: function hideSearch() {
	      this.$searchForm.removeClass('is-open');
	      this.$headerlogo.removeClass('hide');
	      this.$elem.removeClass('close');
	      this.isOpen = false;
	    }
	  }]);
	
	  return SearchButton;
	}();

	exports.default = SearchButton;

/***/ },
/* 23 */
/*!*********************************************!*\
  !*** ./_src/js/app/components/MobileNav.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MobileNav = function () {
	  function MobileNav(elem) {
	    _classCallCheck(this, MobileNav);
	
	    this.$elem = (0, _properjsHobo2.default)(elem);
	    this.$lines = (0, _properjsHobo2.default)('.js-lines');
	    this.$mobileMenu = (0, _properjsHobo2.default)('.js-mobile-menu');
	    this.$htmlBody = (0, _properjsHobo2.default)('html body');
	    this.isOpen = false;
	
	    this.initialize();
	  }
	
	  _createClass(MobileNav, [{
	    key: 'initialize',
	    value: function initialize() {
	      this.setState();
	    }
	  }, {
	    key: 'setState',
	    value: function setState() {
	      var _this = this;
	
	      this.$elem.on('click', function () {
	        if (_this.isOpen) {
	          _this.closeNav();
	        } else {
	          _this.openNav();
	        }
	      });
	    }
	  }, {
	    key: 'openNav',
	    value: function openNav() {
	      this.$lines.addClass('close');
	      this.$mobileMenu.addClass('is-open');
	      this.$htmlBody.addClass('no-scroll');
	      this.isOpen = true;
	    }
	  }, {
	    key: 'closeNav',
	    value: function closeNav() {
	      this.$lines.removeClass('close');
	      this.$mobileMenu.removeClass('is-open');
	      this.$htmlBody.removeClass('no-scroll');
	      this.isOpen = false;
	    }
	  }]);
	
	  return MobileNav;
	}();

	exports.default = MobileNav;

/***/ },
/* 24 */
/*!***********************************************!*\
  !*** ./_src/js/app/components/ScrollElems.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _emitter = __webpack_require__(/*! ../utils/emitter */ 17);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ScrollElems = function () {
	  function ScrollElems($elem) {
	    _classCallCheck(this, ScrollElems);
	
	    this.$elem = $elem;
	    this.topTrigger = $elem.data('offset');
	    this.intTrigger = $elem.data('int-offset');
	    this.triggerLocation = null;
	    this.winHeight = window.innerHeight;
	    this.enterWindow = this.winHeight - 50;
	    this.topOffset = null;
	
	    this.initialize();
	  }
	
	  _createClass(ScrollElems, [{
	    key: 'initialize',
	    value: function initialize() {
	      var _this = this;
	
	      this._offset();
	      this._activate();
	
	      _emitter2.default.on('app--scroll', function () {
	        _this._activate();
	      });
	
	      _emitter2.default.on('app--resizer', function () {
	        _this._resizeEvents();
	      });
	    }
	  }, {
	    key: '_offset',
	    value: function _offset() {
	      if (this.topTrigger) {
	        this.triggerLocation = this.winHeight * this.topTrigger;
	      } else if (this.intTrigger) {
	        this.triggerLocation = this.intTrigger;
	      } else {
	        this.triggerLocation = this.enterWindow;
	      }
	    }
	  }, {
	    key: '_activate',
	    value: function _activate() {
	      this.topOffset = this.$elem[0].getBoundingClientRect().top;
	
	      if (this.topOffset <= this.triggerLocation) {
	        this.$elem.addClass('active');
	      } else {
	        this.$elem.removeClass('active');
	      }
	    }
	  }, {
	    key: '_resizeEvents',
	    value: function _resizeEvents() {
	      this.winHeight = window.innerHeight;
	      this._offset();
	      this._activate();
	    }
	  }]);
	
	  return ScrollElems;
	}();

	exports.default = ScrollElems;

/***/ },
/* 25 */
/*!*******************************!*\
  !*** ./_src/styles/main.scss ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "styles/main.css";

/***/ },
/* 26 */
/*!*****************************************!*\
  !*** ./_src/js/app/components/Modal.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _properjsHobo = __webpack_require__(/*! properjs-hobo */ 2);
	
	var _properjsHobo2 = _interopRequireDefault(_properjsHobo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Modal = function () {
	  function Modal(elem) {
	    _classCallCheck(this, Modal);
	
	    this.$elem = (0, _properjsHobo2.default)(elem);
	    this.$modal = (0, _properjsHobo2.default)('.js-modal');
	    this.$modalContent = (0, _properjsHobo2.default)('.js-modal-content');
	    this.dataModal = this.$elem.data('modal');
	
	    this.initialize();
	  }
	
	  _createClass(Modal, [{
	    key: 'initialize',
	    value: function initialize() {
	      this._clickEvents();
	    }
	  }, {
	    key: '_clickEvents',
	    value: function _clickEvents() {
	      var _this = this;
	
	      this.$elem.on('click', function (e) {
	        e.preventDefault();
	        _this.$modal.addClass('-active');
	      });
	
	      this.$modal.on('click', function (e) {
	        e.preventDefault();
	        _this.$modal.removeClass('-active');
	      });
	    }
	  }]);
	
	  return Modal;
	}();

	exports.default = Modal;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map