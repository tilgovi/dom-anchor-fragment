import FragmentAnchor from '../dom-anchor-fragment'

describe('FragmentAnchor', () => {
  before(() => {
    fixture.setBase('test/fixtures');
  });

  beforeEach(() => {
    fixture.load('test.html');
  });

  afterEach(() => {
    fixture.cleanup();
  });

  it('is a function', () => {
    assert.isFunction(FragmentAnchor);
  });

  it('requires an id argument to the constructor', () => {
    let construct = () => new FragmentAnchor();
    assert.throws(construct,'required parameter');
    let instance = new FragmentAnchor('foo');
    assert.instanceOf(instance, FragmentAnchor);
  });

  describe('fromRange', () => {
    it('requires a range argument', () => {
      let construct = () => FragmentAnchor.fromRange();
      assert.throws(construct, 'required parameter');
    });

    it('throws an error if no fragment identifier is found', () => {
      let range = global.document.createRange();
      range.selectNode(global.document.body);
      assert.throws(() => FragmentAnchor.fromRange(range), 'no fragment');
    });

    it('returns a FragmentAnchor if the common ancestor has an id', () => {
      let range = global.document.createRange();
      range.selectNodeContents(fixture.el);
      let anchor = FragmentAnchor.fromRange(range);
      assert.equal(anchor.id, fixture.el.id);
    });

    it('returns a FragmentAnchor if any ancestor has an id', () => {
      let range = global.document.createRange();
      range.selectNodeContents(fixture.el.children[0]);
      let anchor = FragmentAnchor.fromRange(range);
      assert.equal(anchor.id, fixture.el.id);
    });
  });

  describe('fromSelector', () => {
    it('requires a selector argument', () => {
      let construct = () => FragmentAnchor.fromSelector();
      assert.throws(construct, 'required parameter');
    });

    it('returns a FragmentAnchor from the value of the selector', () => {
      let selector = {
        value: 'foo',
      };
      let anchor = FragmentAnchor.fromSelector(selector);
      assert(anchor.id === selector.value);
    });
  });

  describe('toRange', () => {
    it('returns a range selecting the contents of the Element', () => {
      let anchor = new FragmentAnchor(fixture.el.id);
      let range = anchor.toRange();
      assert.strictEqual(range.commonAncestorContainer, fixture.el);
    });

    it('throws an error if no Element exists with the stored id', () => {
      let anchor = new FragmentAnchor('bogus');
      let attempt = () => anchor.toRange();
      assert.throws(attempt, 'no element found');
    });
  });

  describe('toSelector', () => {
    it('returns a selector for an HTMLElement', () => {
      let anchor = new FragmentAnchor(fixture.el.id);
      let selector = anchor.toSelector();
      assert.equal(selector.type, 'FragmentSelector');
      assert.equal(selector.value, fixture.el.id);
      assert.equal(selector.conformsTo, 'https://tools.ietf.org/html/rfc3236');
    });

    it('returns a selector for an SVGElement', () => {
      let svg = global.document.createElementNS(
        'http://www.w3.org/2000/svg', 'svg');
      let rect = global.document.createElementNS(
        'http://www.w3.org/2000/svg', 'rect');
      rect.id = 'rectangle1';
      fixture.el.appendChild(svg);
      svg.appendChild(rect);
      let anchor = new FragmentAnchor(rect.id);
      let selector = anchor.toSelector();
      assert.equal(selector.type, 'FragmentSelector');
      assert.equal(selector.value, rect.id);
      assert.equal(selector.conformsTo, 'http://www.w3.org/TR/SVG/');
    });

    it('throws an error if no Element exists with the stored id', () => {
      let anchor = new FragmentAnchor('bogus');
      let attempt = () => anchor.toSelector();
      assert.throws(attempt, 'no element found');
    });
  });
});
