/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var Binary = function () {
    function initBinary(packageRoot) {
        if (packageRoot.__PACKAGE_ENABLED) {
            __unit("binary.js");
        }

        var i2a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];

        function base64_encode(s) {
            var length = s.length;
            var groupCount = Math.floor(length / 3);
            var remaining = length - 3 * groupCount;
            var result = "";

            var idx = 0;
            for (var i = 0; i < groupCount; i++) {
                var b0 = s[idx++] & 0xff;
                var b1 = s[idx++] & 0xff;
                var b2 = s[idx++] & 0xff;
                result += i2a[b0 >> 2];
                result += i2a[b0 << 4 & 0x3f | b1 >> 4];
                result += i2a[b1 << 2 & 0x3f | b2 >> 6];
                result += i2a[b2 & 0x3f];
            }

            if (remaining == 0) {} else if (remaining == 1) {
                var b0 = s[idx++] & 0xff;
                result += i2a[b0 >> 2];
                result += i2a[b0 << 4 & 0x3f];
                result += "==";
            } else if (remaining == 2) {
                var b0 = s[idx++] & 0xff;
                var b1 = s[idx++] & 0xff;
                result += i2a[b0 >> 2];
                result += i2a[b0 << 4 & 0x3f | b1 >> 4];
                result += i2a[b1 << 2 & 0x3f];
                result += '=';
            } else {
                throw "never happen";
            }
            return result;
        }

        var a2i = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

        function get_a2i(c) {
            var result = 0 <= c && c < a2i.length ? a2i[c] : -1;
            if (result < 0) throw "Illegal character " + c;
            return result;
        }

        function base64_decode(s) {
            var length = s.length;
            var groupCount = Math.floor(length / 4);
            if (4 * groupCount != length) throw "String length must be a multiple of four.";

            var missing = 0;
            if (length != 0) {
                if (s.charAt(length - 1) == '=') {
                    missing++;
                    groupCount--;
                }
                if (s.charAt(length - 2) == '=') missing++;
            }

            var len = 3 * groupCount - missing;
            if (len < 0) {
                len = 0;
            }
            var result = new Array(len);
            // var result = new Array( 3 * groupCount - missing );
            // var result = new Array( 3 * ( groupCount +1 ) - missing );
            var idx_in = 0;
            var idx_out = 0;
            for (var i = 0; i < groupCount; i++) {
                var c0 = get_a2i(s.charCodeAt(idx_in++));
                var c1 = get_a2i(s.charCodeAt(idx_in++));
                var c2 = get_a2i(s.charCodeAt(idx_in++));
                var c3 = get_a2i(s.charCodeAt(idx_in++));
                result[idx_out++] = 0xFF & (c0 << 2 | c1 >> 4);
                result[idx_out++] = 0xFF & (c1 << 4 | c2 >> 2);
                result[idx_out++] = 0xFF & (c2 << 6 | c3);
            }

            if (missing == 0) {} else if (missing == 1) {
                var c0 = get_a2i(s.charCodeAt(idx_in++));
                var c1 = get_a2i(s.charCodeAt(idx_in++));
                var c2 = get_a2i(s.charCodeAt(idx_in++));
                result[idx_out++] = 0xFF & (c0 << 2 | c1 >> 4);
                result[idx_out++] = 0xFF & (c1 << 4 | c2 >> 2);
            } else if (missing == 2) {
                var c0 = get_a2i(s.charCodeAt(idx_in++));
                var c1 = get_a2i(s.charCodeAt(idx_in++));
                result[idx_out++] = 0xFF & (c0 << 2 | c1 >> 4);
            } else {
                throw "never happen";
            }
            return result;
        }

        function base64x_encode(s) {
            return base64x_pre_encode(base64_encode(s));
        }
        function base64x_decode(s) {
            return base64_decode(base64x_pre_decode(s));
        }

        var base64x_pre_encode_map = {};
        base64x_pre_encode_map["x"] = "xx";
        base64x_pre_encode_map["+"] = "xa";
        base64x_pre_encode_map["/"] = "xb";
        base64x_pre_encode_map["="] = "";

        function base64x_pre_encode(s) {
            var ss = "";
            for (var i = 0; i < s.length; i++) {
                var c = s.charAt(i);
                var cc = base64x_pre_encode_map[c];
                if (cc != null) {
                    ss = ss + cc;
                } else {
                    ss = ss + c;
                }
            }
            return ss;
        }

        var base64x_pre_decode_map = {};
        base64x_pre_decode_map['x'] = 'x';
        base64x_pre_decode_map['a'] = '+';
        base64x_pre_decode_map['b'] = '/';

        function base64x_pre_decode(s) {
            var ss = "";
            for (var i = 0; i < s.length; i++) {
                var c = s.charAt(i);
                if (c == 'x') {
                    c = s.charAt(++i);
                    var cc = base64x_pre_decode_map[c];
                    if (cc != null) {
                        ss = ss + cc;
                        // ss = ss + '/';
                    } else {
                            // throw "invalid character was found. ("+cc+")"; // ignore.
                        }
                } else {
                    ss = ss + c;
                }
            }
            while (ss.length % 4 != 0) {
                ss += "=";
            }
            return ss;
        }

        function equals(a, b) {
            if (a.length != b.length) return false;
            var size = a.length;
            for (var i = 0; i < size; i++) {
                // trace( a[i] + "/" + b[i] );
                if (a[i] != b[i]) return false;
            }
            return true;
        }

        function hex(i) {
            if (i == null) return "??";
            //if ( i < 0 ) i+=256;
            i &= 0xff;
            var result = i.toString(16);
            return result.length < 2 ? "0" + result : result;
        }

        function base16(data, columns, delim) {
            return base16_encode(data, columns, delim);
        }
        function base16_encode(data, columns, delim) {
            if (delim == null) {
                delim = "";
            }
            if (columns == null) {
                columns = 256;
            }
            var result = "";
            for (var i = 0; i < data.length; i++) {
                if (i % columns == 0 && 0 < i) result += "\n";
                result += hex(data[i]) + delim;
            }
            return result.toUpperCase();
        }

        var amap = {};
        amap['0'] = 0;amap['1'] = 1;amap['2'] = 2;amap['3'] = 3;
        amap['4'] = 4;amap['5'] = 5;amap['6'] = 6;amap['7'] = 7;
        amap['8'] = 8;amap['9'] = 9;amap['A'] = 10;amap['B'] = 11;
        amap['C'] = 12;amap['D'] = 13;amap['E'] = 14;amap['F'] = 15;
        amap['a'] = 10;amap['b'] = 11;
        amap['c'] = 12;amap['d'] = 13;amap['e'] = 14;amap['f'] = 15;

        function get_amap(c) {
            var cc = amap[c];
            //trace(c + "=>" + cc );
            if (cc == null) throw "found an invalid character.";
            return cc;
        }

        function base16_decode(data) {
            var ca = [];
            for (var i = 0, j = 0; i < data.length; i++) {
                var c = data.charAt(i);
                if (c == "\s") {
                    continue;
                } else {
                    ca[j++] = c;
                }
            }
            if (ca.length % 2 != 0) {
                throw "data must be a multiple of two.";
            }

            var result = new Array(ca.length >> 1);
            for (var i = 0; i < ca.length; i += 2) {
                var v = 0xff & (get_amap(ca[i]) << 4 | get_amap(ca[i + 1]));
                result[i >> 1] = v;
                // trace(  get_amap( ca[i+1] ) )
                // result[i>>1] =  get_amap( ca[i+1] );
            }
            return result;
        }
        // trace( base16_encode([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,128,255 ] ) );
        // trace( base16_encode( base16_decode("000102030405060708090A0B0C0D0E0F1080FF") ) );
        // trace( base16_encode( base16_decode( "000102030405060708090A0B0C0D0E0F102030405060708090A0B0C0D0E0F0FF" ) ) );
        //                                       000102030405060708090A0B0C0D0E0F102030405060708090A0B0C0D0E0F0FF


        /////////////////////////////////////////////////////////////////////////////////////////////

        var B10000000 = 0x80;
        var B11000000 = 0xC0;
        var B11100000 = 0xE0;
        var B11110000 = 0xF0;
        var B11111000 = 0xF8;
        var B11111100 = 0xFC;
        var B11111110 = 0xFE;
        var B01111111 = 0x7F;
        var B00111111 = 0x3F;
        var B00011111 = 0x1F;
        var B00001111 = 0x0F;
        var B00000111 = 0x07;
        var B00000011 = 0x03;
        var B00000001 = 0x01;

        function str2utf8(str) {
            var result = [];
            var length = str.length;
            var idx = 0;
            for (var i = 0; i < length; i++) {
                var c = str.charCodeAt(i);
                if (c <= 0x7f) {
                    result[idx++] = c;
                } else if (c <= 0x7ff) {
                    result[idx++] = B11000000 | B00011111 & c >>> 6;
                    result[idx++] = B10000000 | B00111111 & c >>> 0;
                } else if (c <= 0xffff) {
                    result[idx++] = B11100000 | B00001111 & c >>> 12;
                    result[idx++] = B10000000 | B00111111 & c >>> 6;
                    result[idx++] = B10000000 | B00111111 & c >>> 0;
                } else if (c <= 0x10ffff) {
                    result[idx++] = B11110000 | B00000111 & c >>> 18;
                    result[idx++] = B10000000 | B00111111 & c >>> 12;
                    result[idx++] = B10000000 | B00111111 & c >>> 6;
                    result[idx++] = B10000000 | B00111111 & c >>> 0;
                } else {
                    throw "error";
                }
            }
            return result;
        }

        function utf82str(data) {
            var result = "";
            var length = data.length;

            for (var i = 0; i < length;) {
                var c = data[i++];
                if (c < 0x80) {
                    result += String.fromCharCode(c);
                } else if (c < B11100000) {
                    result += String.fromCharCode((B00011111 & c) << 6 | (B00111111 & data[i++]) << 0);
                } else if (c < B11110000) {
                    result += String.fromCharCode((B00001111 & c) << 12 | (B00111111 & data[i++]) << 6 | (B00111111 & data[i++]) << 0);
                } else if (c < B11111000) {
                    result += String.fromCharCode((B00000111 & c) << 18 | (B00111111 & data[i++]) << 12 | (B00111111 & data[i++]) << 6 | (B00111111 & data[i++]) << 0);
                } else if (c < B11111100) {
                    result += String.fromCharCode((B00000011 & c) << 24 | (B00111111 & data[i++]) << 18 | (B00111111 & data[i++]) << 12 | (B00111111 & data[i++]) << 6 | (B00111111 & data[i++]) << 0);
                } else if (c < B11111110) {
                    result += String.fromCharCode((B00000001 & c) << 30 | (B00111111 & data[i++]) << 24 | (B00111111 & data[i++]) << 18 | (B00111111 & data[i++]) << 12 | (B00111111 & data[i++]) << 6 | (B00111111 & data[i++]) << 0);
                }
            }
            return result;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////

        // convert unicode character array to string
        function char2str(ca) {
            var result = "";
            for (var i = 0; i < ca.length; i++) {
                result += String.fromCharCode(ca[i]);
            }
            return result;
        }

        // convert string to unicode character array
        function str2char(str) {
            var result = new Array(str.length);
            for (var i = 0; i < str.length; i++) {
                result[i] = str.charCodeAt(i);
            }
            return result;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////

        // byte expressions (big endian)
        function i2ba_be(i) {
            return [0xff & i >> 24, 0xff & i >> 16, 0xff & i >> 8, 0xff & i >> 0];
        }
        function ba2i_be(bs) {
            return bs[0] << 24 | bs[1] << 16 | bs[2] << 8 | bs[3] << 0;
        }
        function s2ba_be(i) {
            return [0xff & i >> 8, 0xff & i >> 0];
        }
        function ba2s_be(bs) {
            return 0 | bs[0] << 8 | bs[1] << 0;
        }

        // byte expressions (little endian)
        function i2ba_le(i) {
            return [0xff & i >> 0, 0xff & i >> 8, 0xff & i >> 16, 0xff & i >> 24];
        }
        function ba2i_le(bs) {
            return 0 | bs[3] << 0 | bs[2] << 8 | bs[1] << 16 | bs[0] << 24;
        }
        function s2ba_le(i) {
            return [0xff & i >> 0, 0xff & i >> 8];
        }
        function ba2s_le(bs) {
            return 0 | bs[1] << 0 | bs[0] << 8;
        }

        function ia2ba_be(ia) {
            var length = ia.length << 2;
            var ba = new Array(length);
            for (var ii = 0, bi = 0; ii < ia.length && bi < ba.length;) {
                ba[bi++] = 0xff & ia[ii] >> 24;
                ba[bi++] = 0xff & ia[ii] >> 16;
                ba[bi++] = 0xff & ia[ii] >> 8;
                ba[bi++] = 0xff & ia[ii] >> 0;
                ii++;
            }
            return ba;
        }
        function ba2ia_be(ba) {
            var length = ba.length + 3 >> 2;
            var ia = new Array(length);;
            for (var ii = 0, bi = 0; ii < ia.length && bi < ba.length;) {
                ia[ii++] = (bi < ba.length ? ba[bi++] << 24 : 0) | (bi < ba.length ? ba[bi++] << 16 : 0) | (bi < ba.length ? ba[bi++] << 8 : 0) | (bi < ba.length ? ba[bi++] /*<< 0*/ : 0);
            }
            return ia;
        }

        function ia2ba_le(ia) {
            var length = ia.length << 2;
            var ba = new Array(length);
            for (var ii = 0, bi = 0; ii < ia.length && bi < ba.length;) {
                ba[bi++] = 0xff & ia[ii] >> 0;
                ba[bi++] = 0xff & ia[ii] >> 8;
                ba[bi++] = 0xff & ia[ii] >> 16;
                ba[bi++] = 0xff & ia[ii] >> 24;
                ii++;
            }
            return ba;
        }
        function ba2ia_le(ba) {
            var length = ba.length + 3 >> 2;
            var ia = new Array(length);;
            for (var ii = 0, bi = 0; ii < ia.length && bi < ba.length;) {
                ia[ii++] = (bi < ba.length ? ba[bi++] /*<< 0*/ : 0) | (bi < ba.length ? ba[bi++] << 8 : 0) | (bi < ba.length ? ba[bi++] << 16 : 0) | (bi < ba.length ? ba[bi++] << 24 : 0);
            }
            return ia;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////

        function trim(s) {
            var result = "";
            for (var idx = 0; idx < s.length; idx++) {
                var c = s.charAt(idx);
                if (c == "\s" || c == "\t" || c == "\r" || c == "\n") {} else {
                    result += c;
                }
            }
            return result;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////

        function mktst(encode, decode) {
            return function (trial, from, to) {
                var flg = true;
                for (var i = 0; i < trial; i++) {
                    for (var j = from; j < to; j++) {
                        var arr = new Array(j);
                        for (var k = 0; k < j; k++) arr[k] = Math.floor(Math.random() * 256);

                        var s = encode(arr);
                        var b = decode(s);

                        // trace( "in:"+arr.length);
                        // trace( "base64:"+s.length);
                        // trace( "out:"+b.length);
                        // trace( "in:"+arr);
                        // trace( "base64:"+s );
                        // trace( "out:"+b );
                        trace("in :" + arr.length + ":" + base16_encode(arr));
                        trace("b64:" + s.length + ":" + s);
                        trace("out:" + b.length + ":" + base16_encode(arr));
                        if (equals(arr, b)) {
                            trace("OK! ( " + i + "," + j + ")");
                        } else {
                            trace("ERR ( " + i + "," + j + ")");
                            flg = false;
                        }
                        trace("-----------");
                    }
                }
                if (flg) {
                    trace("ALL OK! ");
                } else {
                    trace("FOUND ERROR!");
                }
            };
        }

        // export

        // base64
        packageRoot.base64_encode = base64_encode;
        packageRoot.base64_decode = base64_decode;
        packageRoot.base64_test = mktst(base64_encode, base64_decode);

        // base64ex
        packageRoot.base64x_encode = base64x_encode;
        packageRoot.base64x_decode = base64x_decode;
        packageRoot.base64x_test = mktst(base64x_encode, base64x_decode);

        packageRoot.base64x_pre_encode = base64x_pre_encode;
        packageRoot.base64x_pre_decode = base64x_pre_decode;

        // base16
        packageRoot.base16_encode = base16_encode;
        packageRoot.base16_decode = base16_decode;
        packageRoot.base16 = base16;
        packageRoot.hex = base16;

        // utf8
        packageRoot.utf82str = utf82str;
        packageRoot.str2utf8 = str2utf8;
        packageRoot.str2char = str2char;
        packageRoot.char2str = char2str;

        // byte expressions
        packageRoot.i2ba = i2ba_be;
        packageRoot.ba2i = ba2i_be;
        packageRoot.i2ba_be = i2ba_be;
        packageRoot.ba2i_be = ba2i_be;
        packageRoot.i2ba_le = i2ba_le;
        packageRoot.ba2i_le = ba2i_le;

        packageRoot.s2ba = s2ba_be;
        packageRoot.ba2s = ba2s_be;
        packageRoot.s2ba_be = s2ba_be;
        packageRoot.ba2s_be = ba2s_be;
        packageRoot.s2ba_le = s2ba_le;
        packageRoot.ba2s_le = ba2s_le;

        packageRoot.ba2ia = ba2ia_be;
        packageRoot.ia2ba = ia2ba_be;
        packageRoot.ia2ba_be = ia2ba_be;
        packageRoot.ba2ia_be = ba2ia_be;
        packageRoot.ia2ba_le = ia2ba_le;
        packageRoot.ba2ia_le = ba2ia_le;

        // arrays
        packageRoot.cmparr = equals;
    }

    initBinary(this);
};

module.exports = Binary;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = __webpack_require__(22)
var ieee754 = __webpack_require__(26)
var isArray = __webpack_require__(28)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).Buffer, __webpack_require__(37)))

/***/ },
/* 2 */
/***/ function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).Buffer))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(23),
      utf8 = __webpack_require__(2).utf8,
      isBuffer = __webpack_require__(27),
      bin = __webpack_require__(2).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(29);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	const autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

module.exports = function (ngModule) {
    __webpack_require__(11)(ngModule);
    __webpack_require__(12)(ngModule);
    __webpack_require__(14)(ngModule);
    __webpack_require__(15)(ngModule);
    __webpack_require__(13)(ngModule);
    __webpack_require__(10)(ngModule);
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Created by Nikcher on 21.03.2017.
 */
module.exports = function (ngModule) {
    __webpack_require__(21)(ngModule);
    __webpack_require__(18)(ngModule);
    __webpack_require__(19)(ngModule);
    __webpack_require__(17)(ngModule);
    __webpack_require__(20)(ngModule);
    __webpack_require__(16)(ngModule);
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/lib/loader.js!./common.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/lib/loader.js!./common.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/lib/loader.js!./menu.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/lib/loader.js!./menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = function (ngModule) {
    ngModule.controller('EditableFormCtrl', function ($scope, $filter, $http) {

        $scope.expenses = [{
            id: 1,
            date: '19.04.2017',
            section: 1,
            amount: 250
        }, {
            id: 2,
            date: '19.04.2017',
            section: 4,
            amount: 250
        }];

        $scope.sections = [{ value: 1, text: 'продукты' }, { value: 2, text: 'транспорт' }, { value: 3, text: 'одежда' }, { value: 4, text: 'прочее' }];

        /* $scope.loadGroups = function() {
             return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
                 $scope.groups = data;
             });
         };
           $scope.showGroup = function(user) {
             if(user.group && $scope.groups.length) {
                 var selected = $filter('filter')($scope.groups, {id: user.group});
                 return selected.length ? selected[0].text : 'Not set';
             } else {
                 return user.groupName || 'Not set';
             }
         };*/

        $scope.showSection = function (expense) {
            var selected = [];
            if (expense.section) {
                selected = $filter('filter')($scope.sections, { value: expense.section });
            }
            return selected.length ? selected[0].text : 'Not set';
        };

        $scope.checkName = function (data, id) {
            console.log(data);
            /*if (id === 2 && data !== 'awesome') {
                return "Username 2 should be `awesome`";
            }*/
        };

        $scope.saveUser = function (data, id) {
            //$scope.user not updated yet

            angular.extend(data, { id: id });
            console.log(data);
            console.log(id);
            //return $http.post('/saveUser', data);
        };

        // remove user
        $scope.removeUser = function (index) {
            $scope.expenses.splice(index, 1);
        };

        // add user
        $scope.addUser = function () {
            console.log('asd');
            $scope.inserted = {
                id: $scope.expenses.length + 1,
                date: new Date(),
                section: null,
                amount: null
            };
            $scope.expenses.push($scope.inserted);
        };
    });
};

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = function (ngModule) {
    ngModule.controller('appCtrl', function ($rootScope, $scope, $http) {
        var config = {
            apiKey: "AIzaSyA6Y82pVXiQ43ZbD1Fb5JODs8VRFbKXW4U",
            authDomain: "savemoney-79d3f.firebaseapp.com",
            databaseURL: "https://savemoney-79d3f.firebaseio.com",
            projectId: "savemoney-79d3f",
            storageBucket: "savemoney-79d3f.appspot.com",
            messagingSenderId: "284795746971"
        };
        firebase.initializeApp(config);

        const messaging = firebase.messaging();

        messaging.requestPermission().then(function () {
            return messaging.getToken();
        }).then(function (token) {}).catch(function (err) {
            console.log('Error Occured');
        });
        $http.get('/username').success(function (data) {
            if (data.login) {
                $rootScope.login = data.login;
            }
        });

        messaging.onMessage(function (payload) {
            console.log('onMessage: ', payload);
        });
    });
};

/***/ },
/* 12 */
/***/ function(module, exports) {

/**
 * Created by Nikcher on 19.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.controller('singUpCtrl', function ($rootScope, $scope, validationService, saltService) {
        var formValid;

        /*==========INPUTS===========*/
        if ($('.bs-float-label input').length) {
            var bs_float_on_class = "on";
            var bs_float_show_class = "show";

            $('.float-input').on('bs-check-value', function () {
                var _bs_label = $(this).closest('.bs-float-label').find('.float-label');
                if (this.value !== '') {
                    _bs_label.addClass(bs_float_show_class);
                } else {
                    _bs_label.removeClass(bs_float_show_class);
                }
            }).on("keyup", function () {
                $(this).trigger("bs-check-value");
                var formGroup = $(this).parents('.form-group');
                var glyphicon = formGroup.find('.form-control-feedback');
                if (!!this.value) {
                    validationService.resetValidationError(formGroup, glyphicon);
                } else {
                    validationService.showValidationError(formGroup, glyphicon);
                }
            }).on("focus", function () {
                $(this).closest(".bs-float-label").find('.float-label').addClass(bs_float_on_class);
                $(this).closest(".bs-float-label").find('.input-group-addon').addClass("select-label");
            }).on("blur", function () {
                $(this).closest(".bs-float-label").find('.float-label').removeClass(bs_float_on_class);
                $(this).closest(".bs-float-label").find('.input-group-addon').removeClass("select-label");
            }).trigger("bs-check-value");
        }
        /*========================================*/

        /*
        * ===============LOGIN==============*/
        $scope.singUp = function (login, password) {

            formValid = true;
            $('#loginBtn').focus();
            $('.error-validation').each(function () {
                this.remove();
            });

            var formGroup = $('.form-group.password-field-form');
            var glyphicon = formGroup.find('.form-control-feedback');
            validationService.resetLoginError(formGroup, glyphicon);

            if (typeof login === 'undefined' || !login) {
                formValid = false;
                var formGroup = $('.form-group.login-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                var errorMessage = "Введите логин";
                validationService.showValidationError(formGroup, glyphicon, errorMessage);
                formGroup = glyphicon = errorMessage = null;
            } else {
                var formGroup = $('.form-group.login-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup, glyphicon);
                formGroup = glyphicon = null;
            }
            if (typeof password === 'undefined' || !password) {
                formValid = false;
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = "Введите пароль";
                validationService.showValidationError(formGroup, glyphicon, errorMessage);
                formGroup = glyphicon = errorMessage = null;
            } else {
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup, glyphicon);
                formGroup = glyphicon = null;
            }

            if (formValid) {
                saltService.toSalt(login, password);
                //TODO sent to service
            }
        };
        //===============================================
    });
};

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = function (ngModule) {
    ngModule.controller('mainCtrl', function ($rootScope, $scope, $filter, expensesService) {

        $(function () {
            $('.noise').each(function (index) {
                var posX = -$(this).position().left,
                    posY = $(this).position().top;
                $(this).css({
                    'background-position': posX + 'px ' + posY + 'px'
                });
            });
        });
        this.lists = expensesService.getExpenses();

        $scope.user = {
            id: 1,
            name: 'awesome user',
            status: 2,
            group: 4,
            groupName: 'admin'
        };

        $scope.statuses = [{ value: 1, text: 'status1' }, { value: 2, text: 'status2' }, { value: 3, text: 'status3' }, { value: 4, text: 'status4' }];

        $scope.groups = [];
        $scope.loadGroups = function () {
            return $scope.groups.length ? null : $http.get('/groups').success(function (data) {
                $scope.groups = data;
            });
        };

        $scope.showGroup = function () {
            if ($scope.groups.length) {
                var selected = $filter('filter')($scope.groups, { id: $scope.user.group });
                return selected.length ? selected[0].text : 'Not set';
            } else {
                return $scope.user.groupName;
            }
        };

        $scope.checkName = function (data) {
            if (data !== 'awesome' && data !== 'error') {
                return "Username should be `awesome` or `error`";
            }
        };

        $scope.saveUser = function () {
            // $scope.user already updated!
            return $http.post('/saveUser', $scope.user).error(function (err) {
                if (err.field && err.msg) {
                    // err like {field: "name", msg: "Server-side error for this username!"}
                    $scope.editableForm.$setError(err.field, err.msg);
                } else {
                    // unknown error
                    $scope.editableForm.$setError('name', 'Unknown error!');
                }
            });
        };
    });
};

/***/ },
/* 14 */
/***/ function(module, exports) {

/**
 * Created by Nikcher on 20.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.controller('registrationCtrl', function ($rootScope, $window, $scope, validationService, registrationService) {
        $scope.registrationService = registrationService;
        var messagesError = ['Введите логин', 'Введите пароль', 'Повторите пароль'];
        if ($('.bs-float-label input').length) {
            var bs_float_on_class = "on";
            var bs_float_show_class = "show";

            $('.float-input').on('bs-check-value', function () {
                var _bs_label = $(this).closest('.bs-float-label').find('.float-label');
                if (this.value !== '') {
                    _bs_label.addClass(bs_float_show_class);
                } else {
                    _bs_label.removeClass(bs_float_show_class);
                }
            }).on("keyup", function () {
                $(this).trigger("bs-check-value");
                var formGroup = $(this).parents('.form-group');
                var glyphicon = formGroup.find('.form-control-feedback');
                if (!!this.value) {
                    validationService.resetValidationError(formGroup, glyphicon);
                } else {
                    validationService.showValidationError(formGroup, glyphicon);
                }
            }).on("focus", function () {
                $(this).closest(".bs-float-label").find('.float-label').addClass(bs_float_on_class);
                $(this).closest(".bs-float-label").find('.input-group-addon').addClass("select-label");
            }).on("blur", function () {
                $(this).closest(".bs-float-label").find('.float-label').removeClass(bs_float_on_class);
                $(this).closest(".bs-float-label").find('.input-group-addon').removeClass("select-label");
            }).trigger("bs-check-value");
        };

        /*
         * ===============REGISTRATION==============*/

        $scope.toRegister = function (user) {
            formValid = true;
            $('#registrationBtn').focus();

            var formGroup = $('.form-group.passwordRepeat-field-form');
            var glyphicon = formGroup.find('.form-control-feedback');
            validationService.resetLoginError(formGroup, glyphicon);

            if (typeof user === 'undefined' || !user) {
                var i = 0;
                $('input').each(function () {
                    formGroup = $(this).parents('.form-group');
                    glyphicon = formGroup.find('.form-control-feedback');
                    validationService.showValidationError(formGroup, glyphicon, messagesError[i]);
                    i++;
                });
                i = null;
                return;
            }

            if (typeof user.login === 'undefined' || !user.login) {
                formValid = false;
                var formGroup = $('.form-group.login-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = messagesError[0];
                validationService.showValidationError(formGroup, glyphicon, errorMessage);
                formGroup = glyphicon = errorMessage = null;
            } else {
                var formGroup = $('.form-group.login-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup, glyphicon);
                formGroup = glyphicon = null;
            }

            if (typeof user.password === 'undefined' || !user.password) {
                formValid = false;
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = messagesError[1];
                validationService.showValidationError(formGroup, glyphicon, errorMessage);
                formGroup = glyphicon = errorMessage = null;
            } else {
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup, glyphicon);
                formGroup = glyphicon = null;
            }

            if (typeof user.passwordRepeat === 'undefined' || !user.passwordRepeat) {
                formValid = false;
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = messagesError[2];
                validationService.showValidationError(formGroup, glyphicon, errorMessage);
                formGroup = glyphicon = errorMessage = null;
            } else {
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');

                validationService.resetValidationError(formGroup, glyphicon);
                formGroup = glyphicon = null;
            }

            if (user.passwordRepeat != user.password) {
                formValid = false;
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.showValidationError(formGroup, glyphicon);

                formGroup = $('.form-group.passwordRepeat-field-form');
                glyphicon = formGroup.find('.form-control-feedback');

                var errorMessage = "Пароли не совпадают";
                validationService.showValidationError(formGroup, glyphicon, errorMessage);
                formGroup = glyphicon = errorMessage = null;
            }
            if (formValid) {
                //TODO sent to ser
                registrationService.toRegister(user);
            }
        };

        //===============================================
    });
};

/***/ },
/* 15 */
/***/ function(module, exports) {


module.exports = function (ngModule) {
    ngModule.controller('singOutCtrl', function ($rootScope, $scope, singOutService) {
        $scope.singOut = function () {
            if ($rootScope.login) {
                singOutService.singOut();
            }
        };
    });
};

/***/ },
/* 16 */
/***/ function(module, exports) {


module.exports = function (ngModule) {

    ngModule.factory('expensesService', function ($http, $rootScope) {

        var service = {};
        var expenses = [{
            id: 1,
            name: "expenses1"
        }, {
            id: 2,
            name: "expenses2"
        }, {
            id: 3,
            name: "expenses3"
        }];

        service.getExpenses = function () {
            return expenses;
        };

        return service;
    });
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Created by Nikcher on 04.04.2017.
 */
module.exports = function (ngModule) {
    var Binary = __webpack_require__(0);
    var binary = new Binary();
    var md5 = __webpack_require__(4);
    ngModule.factory('loginService', function ($http, $rootScope, $location, validationService) {
        var loginError = true;
        return {
            toLogin: function (answer, password) {
                var saltPassword = md5(password);
                for (var i = 0; i < answer.iter; i++) {
                    saltPassword = md5(answer.salt + saltPassword + answer.salt);
                }
                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.resetLoginError(formGroup, glyphicon);

                $http({
                    method: "post",
                    url: "/login",
                    data: {
                        saltPassword: saltPassword
                    }

                }).success(function (data, status) {
                    if (status === 200) {
                        if (data.code != 101) {
                            if (data.login) {
                                $rootScope.login = decodeURI(data.login);
                                $location.path('/');
                            }
                        } else {
                            var errorMessage = "Неверный логин или пароль";

                            validationService.showValidationError(formGroup, glyphicon, errorMessage, loginError);

                            formGroup = glyphicon = errorMessage = null;
                        }
                    }
                });
            }
        };
    });
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

/**
 * Created by Nikcher on 28.03.2017.
 */

module.exports = function (ngModule) {
    var Binary = __webpack_require__(0);
    var binary = new Binary();
    var md5 = __webpack_require__(4);
    ngModule.factory('registrationService', function ($http, $rootScope, $location, $route, validationService) {

        return {
            toRegister: function (user) {
                var cipherPassword = encryptString(user.password);

                var loginError = true;
                var formGroup = $('.form-group.passwordRepeat-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.resetLoginError(formGroup, glyphicon);

                $http({
                    method: "post",
                    url: "/cipher",
                    data: {
                        password: cipherPassword
                    }

                }).success(function (pswdServer) {
                    var cipherPasswordServer = decryptString(pswdServer);
                    $http({
                        method: "post",
                        url: "/registration",
                        data: {
                            login: encodeURI(user.login),
                            password: cipherPasswordServer
                        }
                    }).success(function (data, status) {
                        if (status === 200) {
                            if (data.code === 100) {
                                $rootScope.login = decodeURI(data.login);
                                $location.path('/');
                            } else if (data.code === 101) {
                                var errorMessage = "Логин занят";

                                validationService.showValidationError(formGroup, glyphicon, errorMessage, loginError);

                                formGroup = glyphicon = errorMessage = null;
                            }
                        }
                    }).error(function (data, status, headers, configs) {
                        console.error(status);
                    });
                }).error(function (error, status) {
                    console.error(error);
                });
            }
        };
        function encryptString(str) {
            var hashCodeArr = binary.str2char(md5(str));
            var charArr_new = hashCodeArr.map(function (code) {
                return code ^ 123;
            });
            return binary.char2str(charArr_new);
        };
        function decryptString(str) {

            var hashCodeArrServer = binary.str2char(str);
            var charArr_newServer = hashCodeArrServer.map(function (code) {
                return code ^ 123;
            });
            return binary.char2str(charArr_newServer);
        }
    });
};

/***/ },
/* 19 */
/***/ function(module, exports) {

/**
 * Created by Nikcher on 28.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.factory('saltService', function ($http, $rootScope, loginService, validationService) {

        return {
            toSalt: function (login, password) {

                var formGroup = $('.form-group.password-field-form');
                var glyphicon = formGroup.find('.form-control-feedback');
                validationService.resetLoginError(formGroup, glyphicon);

                $http({
                    method: "post",
                    url: "/salt",
                    data: {
                        login: encodeURI(login)
                    }

                }).success(function (answer, status) {
                    if (status === 200) {
                        if (answer.code != 101) {
                            loginService.toLogin(answer.answer, password);
                        } else {

                            var errorMessage = "Неверный логин или пароль";
                            validationService.showValidationError(formGroup, glyphicon, errorMessage, true);

                            formGroup = $('.form-group.login-field-form');
                            glyphicon = formGroup.find('.form-control-feedback');
                            validationService.showValidationError(formGroup, glyphicon, "");
                            formGroup = glyphicon = errorMessage = null;
                        }
                    } else if (status === 102) {
                        //TODO error login
                    }
                });
            }
        };
    });
};

/***/ },
/* 20 */
/***/ function(module, exports) {


module.exports = function (ngModule) {
    ngModule.factory('singOutService', function ($http, $rootScope, loginService) {
        return {
            singOut: function (login, password) {

                $http({
                    method: "post",
                    url: "/singout"
                }).success(function (answer, status) {
                    if (status === 200) {
                        delete $rootScope.login;
                    } else if (status === 403) {
                        //TODO error login
                    }
                });
            }
        };
    });
};

/***/ },
/* 21 */
/***/ function(module, exports) {

/**
 * Created by Nikcher on 21.03.2017.
 */
module.exports = function (ngModule) {
    ngModule.factory('validationService', function ($http, $rootScope, $location) {

        return {
            showValidationError: function (formGroup, glyphicon, messageError, loginRegistrationError = false) {
                formGroup.addClass('has-error').removeClass('has-success');
                glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                formGroup.find('.error-validation').remove();

                if (messageError && !loginRegistrationError) {
                    var msgElem = document.createElement('div');
                    msgElem.innerHTML = messageError;
                    $(msgElem).addClass('error-validation');
                    formGroup.append(msgElem);
                } else if (messageError && loginRegistrationError) {
                    var msgElem = document.createElement('div');
                    msgElem.innerHTML = messageError;
                    $(msgElem).addClass('error-login');
                    formGroup.append(msgElem);
                }
            },
            resetValidationError: function (formGroup, glyphicon, messageError) {
                formGroup.addClass('has-success').removeClass('has-error');
                glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');

                formGroup.find('.error-validation').remove();
            },
            resetLoginError: function (formGroup, glyphicon, messageError) {
                formGroup.addClass('has-success').removeClass('has-error');
                glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');

                formGroup.find('.error-login').remove();
            }
        };
    });
};

/***/ },
/* 22 */
/***/ function(module, exports) {

"use strict";
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ },
/* 23 */
/***/ function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Droid+Serif);", ""]);

// module
exports.push([module.i, ".title_site {\n  color: #3c4f6d;\n  font-size: 30px;\n  font-family: 'Droid Serif', serif;\n}\n.title_site .title_animate {\n  color: #ffffff;\n  left: -7px;\n  position: relative;\n  -webkit-transition: color linear 0.2s;\n  -moz-transition: color linear 0.2s;\n  -o-transition: color linear 0.2s;\n  transition: color linear 0.2s;\n}\n.title_site:hover .title_animate {\n  color: #3c4f6d;\n}\nHTML {\n  height: 100%;\n}\nbody {\n  padding-top: 70px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to top left, #0a1944, #3c4f6d, #a5b5c4);\n}\n.background {\n  width: 100%;\n  height: calc(100% + 70px);\n  background-image: url(" + __webpack_require__(31) + ");\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  position: relative;\n  top: -70px;\n}\n.noise {\n  width: 170px;\n  height: 170px;\n  position: relative;\n  background-image: inherit;\n  overflow: hidden;\n  filter: blur(20px);\n}\n.main-page {\n  background-image: url(" + __webpack_require__(30) + ");\n}\n.c-modal {\n  text-align: center;\n}\n.navbar-nav a {\n  color: #FFFFFF;\n}\n.editable-input {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.table-hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.edit,\n.edit:focus {\n  background-image: url(" + __webpack_require__(34) + ");\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  width: 30px;\n  height: 30px;\n  background-color: #23A64E;\n  border: none;\n  border-radius: 5px;\n}\n.edit:hover {\n  background-color: #2ed07e;\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n}\n.edit:active {\n  background-color: #1a7e3b;\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  border: none;\n}\n.delete {\n  background-image: url(" + __webpack_require__(33) + ");\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  width: 30px;\n  height: 30px;\n  background-color: #FF5300;\n  border: none;\n  border-radius: 5px;\n}\n.delete:hover {\n  background-color: #FFA000;\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n}\n.delete:active {\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  background-color: #e94c00;\n}\n.save,\n.save:focus {\n  background-image: url(" + __webpack_require__(35) + ");\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  width: 30px;\n  height: 30px;\n  background-color: #61C3FF;\n  border: none;\n  border-radius: 5px;\n}\n.save:hover {\n  background-color: #61B3FF;\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n}\n.save:active {\n  background-color: #61A3FF;\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  border: none;\n}\n.cancel,\n.cancel:focus {\n  background-image: url(" + __webpack_require__(32) + ");\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  width: 30px;\n  height: 30px;\n  background-color: #FF5300;\n  border: none;\n  border-radius: 5px;\n}\n.cancel:hover {\n  background-color: #FFA000;\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n}\n.cancel:active {\n  background-color: #e94c00;\n  background-repeat: no-repeat;\n  background-position: 3px;\n  background-size: 24px;\n  border: none;\n}\n.navbar-form .btn,\n.login-form-element .btn {\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size: small;\n}\n.navbar-form .btn.btn-singout,\n.login-form-element .btn.btn-singout {\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n.navbar-form .btn.button-background:active,\n.login-form-element .btn.button-background:active {\n  background-color: #0087ff;\n}\n.navbar-form .btn.singup,\n.login-form-element .btn.singup {\n  color: #FFFFFF;\n  font-weight: bold;\n  font-size: small;\n  position: relative;\n}\n.navbar-form .btn.singup:link,\n.login-form-element .btn.singup:link {\n  box-shadow: none;\n}\n.navbar-form .btn.singup:hover,\n.login-form-element .btn.singup:hover {\n  text-decoration: underline;\n}\n.btn.button-background:hover,\n.btn.button-background:focus,\n.btn.singup:hover,\n.btn.singup:focus {\n  color: #FFFFFF;\n}\n.btn.button-background {\n  background-color: #0096ff;\n  border-radius: 4px;\n}\n.btn.button-background:hover {\n  background-color: #00a5ff;\n}\n@media screen and (min-width: 768px) {\n  .c-modal:before {\n    display: inline-block;\n    vertical-align: middle;\n    content: \" \";\n    height: 100%;\n  }\n}\n.c-modal.in .c-modal-dialog {\n  opacity: 1;\n  -webkit-transition: opacity 0.7s ease-out;\n  -moz-transition: opacity 0.7s ease-out;\n  -o-transition: opacity 0.7s ease-out;\n  transition: opacity 0.7s ease-out;\n}\n.c-modal-dialog {\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n  opacity: 0;\n  -webkit-transition: opacity 0.7s ease-out;\n  -moz-transition: opacity 0.7s ease-out;\n  -o-transition: opacity 0.7s ease-out;\n  transition: opacity 0.7s ease-out;\n}\n.login-form,\n.registration-form {\n  top: 95px;\n  height: 300px;\n  margin: 0;\n}\n.login-form .title,\n.registration-form .title {\n  color: #FFFFFF;\n  font-size: 27px;\n  text-align: center;\n  margin-top: 10px;\n}\n.registration-form {\n  height: 370px;\n}\n.expense_new {\n  display: inline-block;\n  margin-bottom: 15px;\n  position: relative;\n  min-height: 150px;\n  color: #FFFFFF;\n  font: 14px/16px \"Roboto\", sans-serif;\n}\n.expense_new .table_container {\n  margin: 15px;\n  position: relative;\n}\n.expense_new .title {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  text-align: center;\n  font-weight: bold;\n}\n.expense_new .total {\n  margin-left: 15px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.expense {\n  margin-bottom: 15px;\n  position: relative;\n  min-height: 150px;\n}\n.expense .title {\n  margin-left: 15px;\n  position: relative;\n}\n.expenseSize {\n  position: relative;\n}\n.list-expenses {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 150px;\n  width: 65%;\n  left: 10%;\n}\n.login-button {\n  width: 100%;\n  margin-top: 20px;\n}\n.login-form-element {\n  left: 15px;\n}\n.login-form-element.login-field {\n  margin-top: 25px;\n}\n.login-form-element.password-field {\n  margin-top: 10px;\n}\n.background-form {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  position: absolute;\n  opacity: 0.4;\n  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.5);\n}\n.float-input {\n  margin: 0;\n}\n.float-label {\n  position: absolute;\n  top: 0px;\n  left: 17px;\n  -webkit-transition: top 0.3s ease-in-out, opacity 0.5s ease-in-out;\n  transition: top 0.3s ease-in-out, opacity 0.5s ease-in-out;\n  opacity: 0;\n  color: #FFFFFF;\n}\n.float-label.show {\n  top: -20px;\n  left: 17px;\n  opacity: 1;\n}\n.main-img {\n  background-image: url(" + __webpack_require__(36) + ");\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 550px;\n  min-height: 350px;\n  opacity: 0.3;\n}\n.select-label {\n  color: #61C3FF;\n}\n@media screen and (max-width: 650px) {\n  .login-form {\n    top: 55px;\n  }\n}\n@media screen and (max-width: 750px) {\n  .main-img {\n    background-image: none;\n  }\n  .background-login-form {\n    background-color: #000000;\n  }\n}\n.error-validation,\n.error-login {\n  margin-left: 31px;\n  margin-bottom: -5px;\n  color: red;\n  font-size: medium;\n}\n.login-main {\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-family: \"MuseoSans-700\", Helvetica, Arial, Verdana, sans-serif;\n  font-size: 22px;\n  font-weight: normal;\n  line-height: 22px;\n  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.45);\n  color: #FFFFFF;\n}\n[ng\\:cloak],\n[ng-cloak],\n.ng-cloak {\n  display: none;\n}\n", ""]);

// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "@media (max-width: 760px) {\n  .navbar-header {\n    float: none;\n    box-shadow: none;\n  }\n  .navbar-left,\n  .navbar-right {\n    float: none !important;\n  }\n  .navbar-toggle {\n    display: block;\n  }\n  .navbar-collapse {\n    box-shadow: none!important;\n  }\n  .navbar-fixed-top {\n    top: 0;\n    background: rgba(255, 255, 255, 0.1);\n  }\n  .navbar-collapse.collapse {\n    display: none!important;\n  }\n  .navbar-form {\n    box-shadow: none!important;\n  }\n  .navbar-nav {\n    float: none!important;\n    margin-top: 7.5px;\n  }\n  .navbar-nav > li {\n    float: none;\n  }\n  .navbar-form {\n    box-shadow: none;\n  }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .collapse.in {\n    display: block !important;\n  }\n  .container-fluid > .navbar-collapse,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container > .navbar-header {\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n}\n.navbar-fixed-top .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-toggle .icon-bar:nth-of-type(2) {\n  top: 1px;\n}\n.navbar-toggle .icon-bar:nth-of-type(3) {\n  top: 2px;\n}\n.navbar-toggle .icon-bar {\n  position: relative;\n  transition: all 200ms ease-in-out;\n}\n.navbar-toggle.active .icon-bar:nth-of-type(1) {\n  top: 6px;\n  transform: rotate(45deg);\n}\n.navbar-toggle.active .icon-bar:nth-of-type(2) {\n  background-color: transparent;\n}\n.navbar-toggle.active .icon-bar:nth-of-type(3) {\n  top: -6px;\n  transform: rotate(-45deg);\n}\n", ""]);

// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ },
/* 27 */
/***/ function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ },
/* 28 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ },
/* 29 */
/***/ function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	var fixedCss = css.replace(/url *\( *(.+?) *\)/g, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/03983da3f1e00a0a366d41900e9ba5dc.png";

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD+UlEQVRoQ8WajVEUQRCFuyNQIxAiECIQIxAiECIQIxAiECIQIgAiECIQIhAiUCNo61tnr3rnZmZ39nb3puqKqrtjtl/36/9TmeCY2WsReS8ieyJyICI74eVvfxYRXvci8igiD6r6Z9PH69gLgtAfReQ0CD7mKoBciMjdWDDVAMwM7X4KgqP5KQ6WAMi1qmKlwacKgJl9nVjwWFCAnKnq5VAEgwAErd/0UOVFRG4DxxHk2WvTzPAPrNf6CT6TO1DraIg1egGY2aGIfBeRFF3+BtNfDXmYlzYohbvxobcJJCjhRFVRSvYUAZjZcRA+vgDBz0QEwTeOJOE5+MCrhKSAuMohyAIoCP8gIodTCB5ZBAsDggARnyyIJIBAGzgfH8IdZp/tFBSHT6zRaQ1A4ObPDOcRvGjSKZAFBUIbTymouh/7WgoAwhMpSmcJEGT0H5EQj6q679/rADAzHJNY78+diJBxB/NyCitwR4ZOX1QVX2nOCkCGOtQrBwVeLmEJqOQdu0MlDyDWPqFyr+XctkCEmovywvvDuaoi738LhC/9ihy3Y6qCSWd37ITysMIuobwFECcstL+TivVbtARW8Bm7oW8LII48KxOlHHIbIMyMkuObk6eJSBro8zsSFPMUy9qlQYQgA839eQMAMqvPui+qStXYe7YAgir1nRPsCABx9LlUVcw16CwJIiHrOQDoUX1tnqw5SmiWApFgywMA4JWnzAdVBVTVWQJEaIoIOO15BoDVOnAO2UIgOvKuAVDV3i5tm3SKFT45gLkz9iIA5gKRygVYIE7RNA3E243P1D5hZnGP8DJJGF3KJ3JhNE5kxTpojFmmsoSZ0ch8djI0iSwuJZomZoygc1sikbOaUoJxRnUxNwbgJpbIFnMhYsRF0lozM0bg1P+MBZGog55UdS/X0DDX3J1K6PieWhCZjrHT0ECjuO+ctWGvAZFoZlYdY6mpX/Wd27REZlrSbeqDH1CR4gu++2d4ezIXgCEZ28wYbvmo2OnXhwy2ZqVSDwhmofEsNj3YarVsZnFE4qNRPUKN5Qo+4a9pIo9/IzfcjamEP9CpVTc6E4LoDNrae2vH60vQiQFDaoQ/bLzuqJTbzjCrhIcbb2a8dUK0YZWVKmPqFhwDQCD8qape11Akk5nJQQxvKSpTe7hxKyYHAnPGy4b2Y5Jfu6iu2u8O2DfD+eONlnwOBDmCkOaHSrFCcXy+w1+GY6umKAjLXBMNQxGUUhqePYU9XK9Sqhr4kNIxdWqbuCmb+P9m++kXGH2XVgFwGRsHZ3o3FZB233xRGxyqAThaQYd2UV2iVkmJUAUfuq0VvJgH+syWKI9bbvuf28Tbd36K4H9ucz9WaP/8fzq0ViDG04v7AAAAAElFTkSuQmCC"

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABmElEQVRoQ+2Y8U0GIQzFXzdwEx1BN9ANdDLdQDf4vhF0EzfAkEByuSBt6SPnRfjzgPb9Wg6aCk4+5OT6sQCOzuDKwMpAMAL/5willG4A3IvIRzBo3e0ppUcAVxH5tvgxZaCIvwC4A/AiIm8W4941KaVnAK8APgE8WCBUgJ34qokOsRFffZggLAA5pe+NaNIgGuKruyftyKoA2VLHQRgiatsEMAsiKj7rMgOwIRji3QAsCJb4IYAoBFP8MMAoBFt8CMALMUN8GMAKMUs8BUCDKC9SLg/2I/yG0AAUiFZJRBFPBXBA0MTTAQwQVPELYH+4O7fNdik1C65aqPU31m9G8XU5DYIC0Lvn//w1anmkLGt62e3NhTLgEeZZ64EZBhgRNLJHgxkCiAiJ7G3BuAEYAhg2KowLgOmYZcsMwHK4PQYMmyYAhqPffsaobRWg9CrP29gqrcUrgNtNFGmlQKcU+SrN5G6TV81AKZFzZ7pC0MU3IEziXeX0qdvr2mt45LzpCB0pUPO9ALQIzZ5fGZgdYc3+yoAWodnzP0cMHEDMPIFNAAAAAElFTkSuQmCC"

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADEUlEQVR4Xu2agXHTQBBF/68AOoBUAFRA0gFUQFIBoQKgg1ABoQJIBSQVECqADiAVLPM9kkecT3crS7LvbN2MZzKxYus97e5t7o448sEj58ciYImAIzewpMCRB8BSBKtLATN7A+BV82oD+DeAbwA+kdTP7lGNADN7CuAzgNMM3RXJd14DVQgws+cAvgN47AS7JnnhubZ4ARn4nwAUGY8isEqHy5yEogUk4G8AnJP8K0AzU1pcA3gSAJ/kakKxAhLwX0ieh0/WzJQe94GEbBQUKSABf0eytwg2kaBasZ4dSJ6k0qA4AY6Cd0FS4R4dZqZpcJ0KJJOMRQlwwLfQvRLM7AcAzRqrUY2AVNgDeBl53BsSmjrwp3PtA8nk1FlEBOQKnpmp6KkJCsd/Eszsa9Ah3pBU19g79i4gB9/eeU6CmUlQODsk68UqRXKNwpzve+EdEm4jLXJyxljXiDkBU589FN4hoft1DyqEuSZobxGwLbxTguBPSaopyo6dp8BY+I4ENTxhUzQIfucRMCF8rOANht+pgBLhdyagVPidCCgZfnYBpcPPKqAG+NkE1AI/i4Ca4CcXUBv8pAJqhJ9MQK3wkwioGX60gNrhRwk4BPitBRwK/FYCDgl+sIBDgx8kYNvtqnBNqmf1dqvFjOx6l+MC95KYmWnlNbZBoa/Re1qCTp7OKA1+aARoxyW1y6Kt6rO+xcgS4d0CmuMpvxwRFZVQKvwQAdpe0rZTO+4AfGheYVpIwos2HUqGHyJAsO87Aj6S1O90OuMKwNsgOm5JnpUOP0RAWABfk9SxtNXokzDFur0j7UZd4poFzCwsgBtnbzKzhG5yb1NdylBWQKQARvfcI8dTut9bJLwrBcxsowC253QaOc+aExnapoqd3ykW3isgLICqBxo6hpI7uFg0vFdAqgNMpVfx8F4BuQ4wlCBwbU1fereoR5XxkX+cLIKODrCFVZQI+j73/8DI+538z3MCugWwetiYvZwAVfXVEdTanqw3VLJ9gPeDar1uEVDrk5vqvpcImMpkrZ+zRECtT26q+/4Hj679UJ3GnNwAAAAASUVORK5CYII="

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABfUlEQVRoQ+2Z/U0EIRDF36tArUBLuE60A7UDrURL0A60Ei3Bq0CtYMwYSLwTGDaw7G4y/LUJX/ObNywDEBsv3Lj9cIClFXQFVq2AiFwAeACwA6DfI8oTydvaibIhFIx/A3BaO1jHdtUQJYAXAJeWUSSb1pGISGaOKogSwGeN92cEUC4TogSQ88yBw2oBjj0d+xUUiPMUIbYAUFRiKwDIKe0AA9bA71pwBXL7Qa0Cuf4Vf6F1KLBaAGun7lU/2xroZaA1jgNYHpq73hWY28PW+D0VeAZwR/LLmnRKvYjowekRwHWqX0+As97GR4MDhJ5D/pVuAK07r6VKbmd2gOg5V8CIIQ+hP3+E5KHeQ8hD6NADkw/1HkJLhxCAbacSel8J4L53PhTyIL3Kv+mVC2m2eWLlLoPq9yST7xPN1+uDAF5JXiWVKVx3KPH7ClT41hcikh+TALRxeKXRQ4Y+MZ0P8nacZh8cqIenpPHasOl1ZTBQcjoHWFoFV8AVaPTAD1mTG0DXJG8ZAAAAAElFTkSuQmCC"

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/41d61da7a43b26fabd5542cb40ba37b6.jpg";

/***/ },
/* 37 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_less__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_common_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_menu_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_menu_css__);



var SM = angular.module('SM', ["ngRoute", "xeditable"]).config(function ($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'view/main.html',
        controller: 'mainCtrl',
        resolve: {
            factory: checkRouting
        }
    }).when('/registration', {
        templateUrl: 'view/registration.html',
        controller: 'registrationCtrl'
    }).when('/login', {
        templateUrl: 'view/login.html',
        controller: 'singUpCtrl'
    }).otherwise({
        redirectTo: '/'
    });

    //close menu button
    $(document).ready(function () {
        $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });
    });
});

var checkRouting = function ($q, $rootScope, $location) {
    if ($rootScope.login) {
        return true;
    } else {
        return false;
    }
};
__webpack_require__(6)(SM);
__webpack_require__(7)(SM);

/***/ }
/******/ ]);