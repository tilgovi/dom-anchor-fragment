import FragmentAnchor from '../dom-anchor-fragment'

describe('FragmentAnchor', function () {
  before(function(){
    fixture.setBase('test/fixtures')
  });

  beforeEach(function () {
    fixture.load('test.html');
  });

  afterEach(function () {
    fixture.cleanup();
  });

  it('is a function', function () {
    assert.isFunction(FragmentAnchor)
  });
});
