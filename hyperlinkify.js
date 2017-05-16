(function(root) {
  'use strict';

  var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/

  function isUrl(string){
    return matcher.test(string)
  }

  function hyperlinkify(text, attrsCallback) {
    try {
      text = text.toString()
    } catch(error) {}

    if (typeof text !== 'string') return ''

    return text.split(' ').map(function(value) {
      if (isUrl(value)) {
        var attrsObj = {}
        var attrs = []

        if (typeof attrsCallback === 'function') {
          attrsObj = attrsCallback(value)
        } else if (attrsCallback instanceof Object) {
          attrsObj = attrsCallback
        }

        if (attrsObj instanceof Object) {
          for (var key in attrsObj) {
            attrs.push(key + '="' + attrsObj[key] + '"')
          }
        }

        var attrsString = attrs.length ? ' ' + attrs.join(' ') : ''

        return '<a href="' + value + '"' + attrsString + '>' + value + '</a>'
      }

      return value
    }).join(' ')
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = hyperlinkify
    }
    exports.hyperlinkify = hyperlinkify
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return hyperlinkify
    });
  } else {
    root.hyperlinkify = hyperlinkify;
  }

})(this);