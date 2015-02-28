module.exports = function (fn) {
  typeof setImmediate === 'function' ?
    setImmediate(fn) :
    setTimeout(fn, 0)
}
