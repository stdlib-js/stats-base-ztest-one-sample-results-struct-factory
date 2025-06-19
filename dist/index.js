/** @license Apache-2.0 */

'use strict';

/**
* Create a new struct constructor tailored to a specified floating-point data type.
*
* @module @stdlib/stats-base-ztest-one-sample-results-struct-factory
*
* @example
* var structFactory = require( '@stdlib/stats-base-ztest-one-sample-results-struct-factory' );
*
* var Struct = structFactory( 'float64' );
* // returns <Function>
*
* var s = new Struct();
* // returns <Struct>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
