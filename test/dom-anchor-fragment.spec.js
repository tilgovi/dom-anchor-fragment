import FragmentAnchor from '../dom-anchor-fragment'

describe('FragmentAnchor', () => {
  before(() => {
    fixture.setBase('test/fixtures')
  });

  beforeEach(() => {
    fixture.load('test.html');
  });

  afterEach(() => {
    fixture.cleanup();
  });

  it('is a function', () => {
    assert.isFunction(FragmentAnchor)
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
      range.selectNode(fixture.el);
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
      range.selectNodeContents(fixture.el.childNodes[0]);
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
});
