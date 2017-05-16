const test = require('tape');
const hyperlinkify = require('../hyperlinkify');

test('test', (t) => {
  t.plan(7);

  t.equal(hyperlinkify(), '');
  t.equal(hyperlinkify(123), '123');
  t.equal(hyperlinkify('hello world'), 'hello world');
  t.equal(hyperlinkify('hello http://example.com/world'), 'hello <a href="http://example.com/world">http://example.com/world</a>');
  t.equal(hyperlinkify('hello http://example.com/world', url => ({target: '_blank'})), 'hello <a href="http://example.com/world" target="_blank">http://example.com/world</a>');
  t.equal(hyperlinkify('hello http://example.com/world foo http://localhost:9000/bar', url => {
      var attrs = {}

      if (url.indexOf('example.com') > -1) {
        attrs.target = '_blank'
      }

      return attrs
    }), 'hello <a href="http://example.com/world" target="_blank">http://example.com/world</a> foo <a href="http://localhost:9000/bar">http://localhost:9000/bar</a>');
    t.equal(hyperlinkify('hello http://example.com/world', {target: "_blank"}), 'hello <a href="http://example.com/world" target="_blank">http://example.com/world</a>');
});
