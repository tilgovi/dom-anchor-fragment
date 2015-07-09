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
    let node = range.commonAncestorContainer;
    while (node != null && !node.id) {
      node = node.parentNode;
    }
    if (node == null) {
      throw new Error('no fragment identifier found');
    }
    return new FragmentAnchor(node.id);
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
    return {
      type: 'FragmentSelector',
      value: this.id,
    };
  }
}
