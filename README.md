![NPM](https://img.shields.io/npm/l/ifexpr) [![Build Status](https://travis-ci.com/mamal72/ifexpr.svg?branch=master)](https://travis-ci.com/mamal72/ifexpr) [![codecov](https://codecov.io/gh/mamal72/ifexpr/branch/master/graph/badge.svg)](https://codecov.io/gh/mamal72/ifexpr) ![David](https://img.shields.io/david/mamal72/ifexpr) ![npm](https://img.shields.io/npm/v/ifexpr) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/ifexpr) ![npm](https://img.shields.io/npm/dm/ifexpr)

# ifexpr

A simple functional library to offer **if** conditions as **expressions**, **not statements**.


## Installation

Using NPM:

```sh
npm i ifexpr
```

Using Yarn:

```sh
yarn add ifexpr
```


## Usage

### Description

> Note that this module has been developed using TypeScript with proper typings. So you mostly don't need to read this part and you can skip to examples section to see some real usages.

You need to pass a `boolean` or a `() => boolean` as first param.

The next 2 params can be a `T` or a `() => T`. First one will be returned/executed and returned as expression value if the passed condition/condition function is/returns truthy. The last one will be returned/executed and returned as expression value if the passed condition/condition function is/returns falsy.

### Examples:

```ts
import ifexpr from 'ifexpr'

const age = 20

const isOldEnough = ifexpr(age > 18, true, false) // returns true
const isOldEnough2 = ifexpr(() => {
  return age > 18
}, true, false) // returns true

const isOldEnough3 = ifexpr<'yes' | 'no'>(age > 18, () => {
  // some other stuff to execute in case of truthy
  return 'yes'
}, () => {
  // some other stuff to execute in case of falsy
  return 'no'
}) // returns 'yes'
```

### More examples:

You can check unit tests inside `src` directory to read all possible usages.


## Contribution

You can report bugs and issues [here](https://github.com/mamal72/ifexpr/issues/new).

You can also send a PR if you feel like you can improve or fix something. Don't forget to write/update tests for your changes.
