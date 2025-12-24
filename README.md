<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# structFactory

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a new [`struct`][@stdlib/dstructs/struct] constructor tailored to a specified floating-point data type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import structFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-struct-factory@esm/index.mjs';
```

#### structFactory( dtype )

Returns a new [`struct`][@stdlib/dstructs/struct] constructor tailored to a specified floating-point data type.

```javascript
var Struct = structFactory( 'float64' );
// returns <Function>

var s = new Struct();
// returns <Struct>
```

The function supports the following parameters:

-   **dtype**: floating-point data type for storing floating-point results. Must be either `'float64'` or `'float32'`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A [`struct`][@stdlib/dstructs/struct] provides a fixed-width composite data structure for storing one-sample Z-test results and provides an ABI-stable data layout for JavaScript-C interoperation.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import resolveEnum from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-alternative-resolve-enum@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import structFactory from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ztest-one-sample-results-struct-factory@esm/index.mjs';

var Struct = structFactory( 'float64' );
var results = new Struct({
    'rejected': true,
    'alpha': 0.05,
    'pValue': 0.3364,
    'statistic': 11.7586,
    'nullValue': 0.0,
    'sd': 0.4563,
    'ci': new Float64Array( [ 9.9983, 11.4123 ] ),
    'alternative': resolveEnum( 'two-sided' )
});

var str = results.toString({
    'format': 'linear'
});
console.log( str );

Struct = structFactory( 'float32' );
results = new Struct({
    'rejected': true,
    'alpha': 0.05,
    'pValue': 0.3364,
    'statistic': 11.7586,
    'nullValue': 0.0,
    'sd': 0.4563,
    'ci': new Float32Array( [ 9.9983, 11.4123 ] ),
    'alternative': resolveEnum( 'two-sided' )
});

str = results.toString({
    'format': 'linear'
});
console.log( str );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-ztest-one-sample-results-struct-factory.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-ztest-one-sample-results-struct-factory

[test-image]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-ztest-one-sample-results-struct-factory?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-ztest-one-sample-results-struct-factory.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-ztest-one-sample-results-struct-factory/blob/main/branches.md

[@stdlib/dstructs/struct]: https://github.com/stdlib-js/dstructs-struct/tree/esm

</section>

<!-- /.links -->
