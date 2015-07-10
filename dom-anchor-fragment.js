/**
* class:: FragmentAnchor(id)
*
* An anchor representing a fragment identifier.
*
* :param String id: The id of the fragment identified by the anchor.
*/
export default class FragmentAnchor {
  constructor(id) {
    if (id === undefined) {
      throw new Error('missing required parameter "id"');
    }
    this.id = id;
  }

  static fromRange(range) {
    if (range === undefined) {
      throw new Error('missing required parameter "range"');
    }
    let el = range.commonAncestorContainer;
    while (el != null && !el.id) {
      el = el.parentElement;
    }
    if (el == null) {
      throw new Error('no fragment identifier found');
    }
    return new FragmentAnchor(el.id);
  }

  static fromSelector(selector) {
    if (selector === undefined) {
      throw new Error('missing required parameter "selector"');
    }
    return new FragmentAnchor(selector.value);
  }

  toRange() {
    let el = global.document.getElementById(this.id);
    if (el == null) {
      throw new Error('no element found with id "' + this.id + '"');
    }
    let range = global.document.createRange();
    range.selectNodeContents(el);
    return range;
  }

  toSelector() {
    let el = global.document.getElementById(this.id);
    if (el == null) {
      throw new Error('no element found with id "' + this.id + '"');
    }
    let conformsTo = 'https://tools.ietf.org/html/rfc3236';
    if (el instanceof SVGElement) {
      conformsTo = 'http://www.w3.org/TR/SVG/';
    }
    return {
      type: 'FragmentSelector',
      value: this.id,
      conformsTo: conformsTo,
    };
  }
}
