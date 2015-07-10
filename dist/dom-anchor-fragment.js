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
    global.domAnchorFragment = mod.exports;
  }
})(this, function (exports, module) {
  /**
  * class:: FragmentAnchor(id)
  *
  * An anchor representing a fragment identifier.
  *
  * :param String id: The id of the fragment identified by the anchor.
  */
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var FragmentAnchor = (function () {
    function FragmentAnchor(id) {
      _classCallCheck(this, FragmentAnchor);

      if (id === undefined) {
        throw new Error('missing required parameter "id"');
      }
      this.id = id;
    }

    _createClass(FragmentAnchor, [{
      key: 'toSelector',
      value: function toSelector() {
        return {
          type: 'FragmentSelector',
          value: this.id
        };
      }
    }, {
      key: 'toRange',
      value: function toRange() {
        var el = global.document.getElementById(this.id);
        var range = global.document.createRange();
        range.selectNode(el);
        return range;
      }
    }], [{
      key: 'fromRange',
      value: function fromRange(range) {
        //id = $(range.commonAncestorContainer).closest('[id]').attr('id')
        return new FragmentAnchor(id);
      }
    }, {
      key: 'fromSelector',
      value: function fromSelector(selector) {
        if (selector === undefined) {
          throw new Error('missing required parameter "selector"');
        }
        return new FragmentAnchor(selector.value);
      }
    }]);

    return FragmentAnchor;
  })();

  module.exports = FragmentAnchor;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbS1hbmNob3ItZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFPcUIsY0FBYztBQUN0QixhQURRLGNBQWMsQ0FDckIsRUFBRSxFQUFFOzRCQURHLGNBQWM7O0FBRS9CLFVBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtBQUNwQixjQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7T0FDcEQ7QUFDRCxVQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNkOztpQkFOa0IsY0FBYzs7YUFvQnZCLHNCQUFHO0FBQ1gsZUFBTztBQUNMLGNBQUksRUFBRSxrQkFBa0I7QUFDeEIsZUFBSyxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ2YsQ0FBQztPQUNIOzs7YUFFTSxtQkFBRztBQUNSLFlBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRCxZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzFDLGFBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckIsZUFBTyxLQUFLLENBQUM7T0FDZDs7O2FBeEJlLG1CQUFDLEtBQUssRUFBRTs7QUFFdEIsZUFBTyxJQUFJLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUMvQjs7O2FBRWtCLHNCQUFDLFFBQVEsRUFBRTtBQUM1QixZQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDMUIsZ0JBQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUMxRDtBQUNELGVBQU8sSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQzNDOzs7V0FsQmtCLGNBQWM7OzttQkFBZCxjQUFjIiwiZmlsZSI6ImRvbS1hbmNob3ItZnJhZ21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogY2xhc3M6OiBGcmFnbWVudEFuY2hvcihpZClcbipcbiogQW4gYW5jaG9yIHJlcHJlc2VudGluZyBhIGZyYWdtZW50IGlkZW50aWZpZXIuXG4qXG4qIDpwYXJhbSBTdHJpbmcgaWQ6IFRoZSBpZCBvZiB0aGUgZnJhZ21lbnQgaWRlbnRpZmllZCBieSB0aGUgYW5jaG9yLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYWdtZW50QW5jaG9yIHtcbiAgY29uc3RydWN0b3IoaWQpIHtcbiAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBcImlkXCInKTtcbiAgICB9XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgc3RhdGljIGZyb21SYW5nZShyYW5nZSkge1xuICAgIC8vaWQgPSAkKHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKS5jbG9zZXN0KCdbaWRdJykuYXR0cignaWQnKVxuICAgIHJldHVybiBuZXcgRnJhZ21lbnRBbmNob3IoaWQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIFwic2VsZWN0b3JcIicpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZyYWdtZW50QW5jaG9yKHNlbGVjdG9yLnZhbHVlKTtcbiAgfVxuXG4gIHRvU2VsZWN0b3IoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdGcmFnbWVudFNlbGVjdG9yJyxcbiAgICAgIHZhbHVlOiB0aGlzLmlkLFxuICAgIH07XG4gIH1cblxuICB0b1JhbmdlKCkge1xuICAgIGxldCBlbCA9IGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBsZXQgcmFuZ2UgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlKGVsKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiLi8ifQ==