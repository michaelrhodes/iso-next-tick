var test = require('tape')
var nextTick = require('./')

test('it works', function(assert) {
  var message = ''

  nextTick(function () {
    message += ' world'
    assert.equal(message, 'hello world')
    assert.end()
  })

  message += 'hello'
})
