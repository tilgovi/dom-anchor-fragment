(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.FragmentAnchor = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var FragmentAnchor = (function () {
    function FragmentAnchor(root, id) {
      _classCallCheck(this, FragmentAnchor);

      if (root === undefined) {
        throw new Error('missing required parameter "root"');
      }
      if (id === undefined) {
        throw new Error('missing required parameter "id"');
      }

      this.root = root;
      this.id = id;
    }

    _createClass(FragmentAnchor, [{
      key: 'toRange',
      value: function toRange() {
        var el = this.root.querySelector('#' + this.id);
        if (el == null) {
          throw new Error('no element found with id "' + this.id + '"');
        }

        var range = global.document.createRange();
        range.selectNodeContents(el);

        return range;
      }
    }, {
      key: 'toSelector',
      value: function toSelector() {
        var el = this.root.querySelector('#' + this.id);
        if (el == null) {
          throw new Error('no element found with id "' + this.id + '"');
        }

        var conformsTo = 'https://tools.ietf.org/html/rfc3236';
        if (el instanceof SVGElement) {
          conformsTo = 'http://www.w3.org/TR/SVG/';
        }

        return {
          type: 'FragmentSelector',
          value: this.id,
          conformsTo: conformsTo
        };
      }
    }], [{
      key: 'fromRange',
      value: function fromRange(root, range) {
        if (root === undefined) {
          throw new Error('missing required parameter "root"');
        }
        if (range === undefined) {
          throw new Error('missing required parameter "range"');
        }

        var el = range.commonAncestorContainer;
        while (el != null && !el.id) {
          if (root.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_CONTAINED_BY) {
            el = el.parentElement;
          } else {
            throw new Error('no fragment identifier found');
          }
        }

        return new FragmentAnchor(root, el.id);
      }
    }, {
      key: 'fromSelector',
      value: function fromSelector(root) {
        var selector = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new FragmentAnchor(root, selector.value);
      }
    }]);

    return FragmentAnchor;
  })();

  module.exports = FragmentAnchor;
});
//# sourceMappingURL=data:application/json;base64,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Y0FBYzs7O21CQUFkLGNBQWMiLCJmaWxlIjoiRnJhZ21lbnRBbmNob3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudEFuY2hvciB7XG4gIGNvbnN0cnVjdG9yKHJvb3QsIGlkKSB7XG4gICAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBcInJvb3RcIicpO1xuICAgIH1cbiAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBcImlkXCInKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmFuZ2Uocm9vdCwgcmFuZ2UpIHtcbiAgICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIFwicm9vdFwiJyk7XG4gICAgfVxuICAgIGlmIChyYW5nZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIFwicmFuZ2VcIicpO1xuICAgIH1cblxuICAgIGxldCBlbCA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIHdoaWxlIChlbCAhPSBudWxsICYmICFlbC5pZCkge1xuICAgICAgaWYgKHJvb3QuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWwpICZcbiAgICAgICAgICBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0NPTlRBSU5FRF9CWSkge1xuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGZyYWdtZW50IGlkZW50aWZpZXIgZm91bmQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZyYWdtZW50QW5jaG9yKHJvb3QsIGVsLmlkKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VsZWN0b3Iocm9vdCwgc2VsZWN0b3IgPSB7fSkge1xuICAgIHJldHVybiBuZXcgRnJhZ21lbnRBbmNob3Iocm9vdCwgc2VsZWN0b3IudmFsdWUpO1xuICB9XG5cbiAgdG9SYW5nZSgpIHtcbiAgICBsZXQgZWwgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkKTtcbiAgICBpZiAoZWwgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IGZvdW5kIHdpdGggaWQgXCInICsgdGhpcy5pZCArICdcIicpO1xuICAgIH1cblxuICAgIGxldCByYW5nZSA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhlbCk7XG5cbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICB0b1NlbGVjdG9yKCkge1xuICAgIGxldCBlbCA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuaWQpO1xuICAgIGlmIChlbCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgZm91bmQgd2l0aCBpZCBcIicgKyB0aGlzLmlkICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgbGV0IGNvbmZvcm1zVG8gPSAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMyMzYnO1xuICAgIGlmIChlbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgIGNvbmZvcm1zVG8gPSAnaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHLyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdGcmFnbWVudFNlbGVjdG9yJyxcbiAgICAgIHZhbHVlOiB0aGlzLmlkLFxuICAgICAgY29uZm9ybXNUbzogY29uZm9ybXNUbyxcbiAgICB9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4vIn0=