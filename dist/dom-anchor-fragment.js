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
      key: 'toRange',
      value: function toRange() {
        var el = global.document.getElementById(this.id);
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
        var el = global.document.getElementById(this.id);
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
      value: function fromRange(range) {
        if (range === undefined) {
          throw new Error('missing required parameter "range"');
        }
        var el = range.commonAncestorContainer;
        while (el != null && !el.id) {
          el = el.parentElement;
        }
        if (el == null) {
          throw new Error('no fragment identifier found');
        }
        return new FragmentAnchor(el.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbS1hbmNob3ItZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFPcUIsY0FBYztBQUN0QixhQURRLGNBQWMsQ0FDckIsRUFBRSxFQUFFOzRCQURHLGNBQWM7O0FBRS9CLFVBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtBQUNwQixjQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7T0FDcEQ7QUFDRCxVQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUNkOztpQkFOa0IsY0FBYzs7YUE2QjFCLG1CQUFHO0FBQ1IsWUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pELFlBQUksRUFBRSxJQUFJLElBQUksRUFBRTtBQUNkLGdCQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDL0Q7QUFDRCxZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzFDLGFBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QixlQUFPLEtBQUssQ0FBQztPQUNkOzs7YUFFUyxzQkFBRztBQUNYLFlBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRCxZQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDZCxnQkFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQy9EO0FBQ0QsWUFBSSxVQUFVLEdBQUcscUNBQXFDLENBQUM7QUFDdkQsWUFBSSxFQUFFLFlBQVksVUFBVSxFQUFFO0FBQzVCLG9CQUFVLEdBQUcsMkJBQTJCLENBQUM7U0FDMUM7QUFDRCxlQUFPO0FBQ0wsY0FBSSxFQUFFLGtCQUFrQjtBQUN4QixlQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7QUFDZCxvQkFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztPQUNIOzs7YUE3Q2UsbUJBQUMsS0FBSyxFQUFFO0FBQ3RCLFlBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUN2QixnQkFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3ZEO0FBQ0QsWUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO0FBQ3ZDLGVBQU8sRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0IsWUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7U0FDdkI7QUFDRCxZQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDZCxnQkFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ2pEO0FBQ0QsZUFBTyxJQUFJLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7T0FDbEM7OzthQUVrQixzQkFBQyxRQUFRLEVBQUU7QUFDNUIsWUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzFCLGdCQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUQ7QUFDRCxlQUFPLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUMzQzs7O1dBM0JrQixjQUFjOzs7bUJBQWQsY0FBYyIsImZpbGUiOiJkb20tYW5jaG9yLWZyYWdtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIGNsYXNzOjogRnJhZ21lbnRBbmNob3IoaWQpXG4qXG4qIEFuIGFuY2hvciByZXByZXNlbnRpbmcgYSBmcmFnbWVudCBpZGVudGlmaWVyLlxuKlxuKiA6cGFyYW0gU3RyaW5nIGlkOiBUaGUgaWQgb2YgdGhlIGZyYWdtZW50IGlkZW50aWZpZWQgYnkgdGhlIGFuY2hvci5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFnbWVudEFuY2hvciB7XG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgXCJpZFwiJyk7XG4gICAgfVxuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmFuZ2UocmFuZ2UpIHtcbiAgICBpZiAocmFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBcInJhbmdlXCInKTtcbiAgICB9XG4gICAgbGV0IGVsID0gcmFuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgd2hpbGUgKGVsICE9IG51bGwgJiYgIWVsLmlkKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGlmIChlbCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGZyYWdtZW50IGlkZW50aWZpZXIgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGcmFnbWVudEFuY2hvcihlbC5pZCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgXCJzZWxlY3RvclwiJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRnJhZ21lbnRBbmNob3Ioc2VsZWN0b3IudmFsdWUpO1xuICB9XG5cbiAgdG9SYW5nZSgpIHtcbiAgICBsZXQgZWwgPSBnbG9iYWwuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgaWYgKGVsID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBmb3VuZCB3aXRoIGlkIFwiJyArIHRoaXMuaWQgKyAnXCInKTtcbiAgICB9XG4gICAgbGV0IHJhbmdlID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGVsKTtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICB0b1NlbGVjdG9yKCkge1xuICAgIGxldCBlbCA9IGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBpZiAoZWwgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IGZvdW5kIHdpdGggaWQgXCInICsgdGhpcy5pZCArICdcIicpO1xuICAgIH1cbiAgICBsZXQgY29uZm9ybXNUbyA9ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzIzNic7XG4gICAgaWYgKGVsIGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgY29uZm9ybXNUbyA9ICdodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdGcmFnbWVudFNlbGVjdG9yJyxcbiAgICAgIHZhbHVlOiB0aGlzLmlkLFxuICAgICAgY29uZm9ybXNUbzogY29uZm9ybXNUbyxcbiAgICB9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii4vIn0=