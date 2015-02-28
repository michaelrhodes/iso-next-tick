# iso-next-tick

A minimal, isomorphic process.nextTick implementation.

**node**: `process.nextTick`<br>
**browser**: `setImmediate || setTimeout`

[![Build status](https://travis-ci.org/michaelrhodes/iso-next-tick.svg?branch=master)](https://travis-ci.org/michaelrhodes/iso-next-tick)

This module is essentially [just-next-tick](https://github.com/azer/just-next-tick). The difference is, iso-next-tick can be browserified without pulling in the `process` object (see: [insert-module-globals](https://www.npmjs.com/package/insert-module-globals)).

## Install

```sh
$ npm install iso-next-tick
```

## Usage

```js
var nextTick = require('iso-next-tick')

nextTick(function () {
  console.log('world')
})

console.log('hello')

> hello
> world
```

## License
BSD
