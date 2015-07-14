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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbS1hbmNob3ItZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFxQixjQUFjO0FBQ3RCLGFBRFEsY0FBYyxDQUNyQixJQUFJLEVBQUUsRUFBRSxFQUFFOzRCQURILGNBQWM7O0FBRS9CLFVBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUN0QixjQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7T0FDdEQ7QUFDRCxVQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7QUFDcEIsY0FBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO09BQ3BEOztBQUVELFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQ2Q7O2lCQVhrQixjQUFjOzthQXNDMUIsbUJBQUc7QUFDUixZQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELFlBQUksRUFBRSxJQUFJLElBQUksRUFBRTtBQUNkLGdCQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDL0Q7O0FBRUQsWUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMxQyxhQUFLLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRTdCLGVBQU8sS0FBSyxDQUFDO09BQ2Q7OzthQUVTLHNCQUFHO0FBQ1gsWUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNoRCxZQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDZCxnQkFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQy9EOztBQUVELFlBQUksVUFBVSxHQUFHLHFDQUFxQyxDQUFDO0FBQ3ZELFlBQUksRUFBRSxZQUFZLFVBQVUsRUFBRTtBQUM1QixvQkFBVSxHQUFHLDJCQUEyQixDQUFDO1NBQzFDOztBQUVELGVBQU87QUFDTCxjQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLGVBQUssRUFBRSxJQUFJLENBQUMsRUFBRTtBQUNkLG9CQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDO09BQ0g7OzthQXJEZSxtQkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQzVCLFlBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUN0QixnQkFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3REO0FBQ0QsWUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQ3ZCLGdCQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDdkQ7O0FBRUQsWUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDO0FBQ3ZDLGVBQU8sRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0IsY0FBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLEdBQ2hDLElBQUksQ0FBQyw4QkFBOEIsRUFBRTtBQUN2QyxjQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztXQUN2QixNQUFNO0FBQ0wsa0JBQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztXQUNqRDtTQUNGOztBQUVELGVBQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUN4Qzs7O2FBRWtCLHNCQUFDLElBQUksRUFBaUI7WUFBZixRQUFRLHlEQUFHLEVBQUU7O0FBQ3JDLGVBQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUNqRDs7O1dBcENrQixjQUFjOzs7bUJBQWQsY0FBYyIsImZpbGUiOiJkb20tYW5jaG9yLWZyYWdtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhZ21lbnRBbmNob3Ige1xuICBjb25zdHJ1Y3Rvcihyb290LCBpZCkge1xuICAgIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgXCJyb290XCInKTtcbiAgICB9XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgXCJpZFwiJyk7XG4gICAgfVxuXG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJhbmdlKHJvb3QsIHJhbmdlKSB7XG4gICAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBcInJvb3RcIicpO1xuICAgIH1cbiAgICBpZiAocmFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBcInJhbmdlXCInKTtcbiAgICB9XG5cbiAgICBsZXQgZWwgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB3aGlsZSAoZWwgIT0gbnVsbCAmJiAhZWwuaWQpIHtcbiAgICAgIGlmIChyb290LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsKSAmXG4gICAgICAgICAgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9DT05UQUlORURfQlkpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBmcmFnbWVudCBpZGVudGlmaWVyIGZvdW5kJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGcmFnbWVudEFuY2hvcihyb290LCBlbC5pZCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVNlbGVjdG9yKHJvb3QsIHNlbGVjdG9yID0ge30pIHtcbiAgICByZXR1cm4gbmV3IEZyYWdtZW50QW5jaG9yKHJvb3QsIHNlbGVjdG9yLnZhbHVlKTtcbiAgfVxuXG4gIHRvUmFuZ2UoKSB7XG4gICAgbGV0IGVsID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5pZCk7XG4gICAgaWYgKGVsID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBmb3VuZCB3aXRoIGlkIFwiJyArIHRoaXMuaWQgKyAnXCInKTtcbiAgICB9XG5cbiAgICBsZXQgcmFuZ2UgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWwpO1xuXG4gICAgcmV0dXJuIHJhbmdlO1xuICB9XG5cbiAgdG9TZWxlY3RvcigpIHtcbiAgICBsZXQgZWwgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmlkKTtcbiAgICBpZiAoZWwgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IGZvdW5kIHdpdGggaWQgXCInICsgdGhpcy5pZCArICdcIicpO1xuICAgIH1cblxuICAgIGxldCBjb25mb3Jtc1RvID0gJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMjM2JztcbiAgICBpZiAoZWwgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICBjb25mb3Jtc1RvID0gJ2h0dHA6Ly93d3cudzMub3JnL1RSL1NWRy8nO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnRnJhZ21lbnRTZWxlY3RvcicsXG4gICAgICB2YWx1ZTogdGhpcy5pZCxcbiAgICAgIGNvbmZvcm1zVG86IGNvbmZvcm1zVG8sXG4gICAgfTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIuLyJ9