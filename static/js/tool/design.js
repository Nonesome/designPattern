;(function(factory) {
    if(typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        factory();
    }
})(function() {
    var design = {
        singleton: function(fn) {
            var result;
            return function() {
                return result || (result = fn.apply(this, arguments));
            }
        },

        event: function() {
            var listen, trigger, obj;
            obj = {};
            var _this = this;
            listen = function(key, fn) {
                var stack, _ref;
                stack = ( _ref = obj[key] ) != null ? _ref : obj[ key ] = [];
                return stack.push( fn );
            };

            trigger = function() {
                var fn, stack, _i, _len, _ref, key;

                key = Array.prototype.shift.call(arguments);

                stack = ( _ref = obj[key] ) != null ? _ref : obj[key] = [];

                for (_i = 0, _len = stack.length; _i < _len; _i++) {

                    fn = stack[_i];

                    if (fn.apply(_this, arguments) === false) {

                        return false;

                    }

                }
            };

            return {
                listen: listen,
                trigger: trigger
            }

        }
    };
    return (window.jDesign = design);
});