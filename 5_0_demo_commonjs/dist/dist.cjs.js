var cjs_test = (function (exports) {
    'use strict';

    var logA = function logA() {
        console.log('function logA called');
    };

    var logB = function logB() {
        console.log('function logB called');
    };

    var _5_demo_commonjs = {
    	logA: logA,
    	logB: logB
    };

    exports.default = _5_demo_commonjs;
    exports.logA = logA;
    exports.logB = logB;

    return exports;

}({}));
