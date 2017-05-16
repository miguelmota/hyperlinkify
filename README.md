# hyperlinkify

> hyperlink urls in text"

## Install

```bash
npm install hyperlinkify
```

## Usage

basic example

```javascript
const hyperlinkify = require('hyperlinkify')

const url = 'visit http://example.com for more info'

console.log(hyperlinkify(url))
// visit <a href="http://example.com">http://example.com</a> for more info
```

with attributes

```javascript
const url = 'visit http://example.com for more info'

console.log(hyperlinkify(url, {target: '_blank', 'data-foo': 'bar'}))
// visit <a href="http://example.com" target="_blank" data-foo="bar">http://example.com</a> for more info
```

with conditional attributes

```javascript
const url = 'hello http://example.com world http://localhost:8000'

const result = hyperlinkify(url, url => {
  const attrs = {}

  if (url.indexOf('localhost') === -1) {
    attrs.target = '_blank'
  }

  return attrs
})

console.log(result)
// hello <a href="http://example.com" target="_blank">http://example.com</a> world <a href="http://localhost:8000">http://localhost:8000</a>
```

## Test

```bash
npm test
```

# License

MIT