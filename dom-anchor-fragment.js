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
    //id = $(range.commonAncestorContainer).closest('[id]').attr('id')
    return new FragmentAnchor(id);
  }

  static fromSelector(selector) {
    if (selector === undefined) {
      throw new Error('missing required parameter "selector"');
    }
    return new FragmentAnchor(selector.value);
  }

  toSelector() {
    return {
      type: 'FragmentSelector',
      value: this.id,
    };
  }

  toRange() {
    let el = global.document.getElementById(this.id);
    let range = global.document.createRange();
    range.selectNode(el);
    return range;
  }
}
