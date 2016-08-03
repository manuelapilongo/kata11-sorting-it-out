/*global x, java */
"use strict";

var funcs = {};

funcs.SortingCharacters = {};

(function (SortingCharacters) {

    SortingCharacters.alpha_map = {
        a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h'
      , i: 'i', j: 'j', k: 'k', l: 'l', m: 'm', n: 'n', o: 'o', p: 'p'
      , q: 'q', r: 'r', s: 's', t: 't', u: 'u', v: 'v', w: 'w', x: 'x'
      , y: 'y', z: 'z'
      , A: 'a', B: 'b', C: 'c', D: 'd', E: 'e', F: 'f', G: 'g', H: 'h'
      , I: 'i', J: 'j', K: 'k', L: 'l', M: 'm', N: 'n', O: 'o', P: 'p'
      , Q: 'q', R: 'r', S: 's', T: 't', U: 'u', V: 'v', W: 'w', X: 'x'
      , Y: 'y', Z: 'z'
    };

    SortingCharacters.alpha_pos = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8
      , i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16 
      , q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24
      , y: 25, z: 26
      , 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h'
      , 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p'
      , 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x'
      , 25: 'y', 26: 'z'
    };

    SortingCharacters.getEmptyHash = function () {
        return { 
            1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0
          , 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0
          , 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0, 24: 0
          , 25: 0, 26: 0
        };
    };

    SortingCharacters.toHash = function (str) {
        var i, len, c, int_val, int_hash = this.getEmptyHash();
        for (i = 0, len = str.length, c = str[0]; i < len; i += 1, c = str[i]) {
            int_val = this.alpha_pos[this.alpha_map[c]];
            if (int_val !== undefined) {
                int_hash[int_val] += 1;
            }
        }
        return int_hash;
    };

    SortingCharacters.hashToString = function (int_hash) {
        var i = null, c, str = "";
        for (i in int_hash) {
            c = this.alpha_pos[i];
            while (int_hash[i] > 0) {
                str += c;
                int_hash[i] -= 1;
            }
        }
        return str;
    };

    SortingCharacters.getSortedChars = function (str) {
        var int_hash = this.toHash(str), sorted_str = this.hashToString(int_hash);
          return sorted_str;
    };

    SortingCharacters.testConvesion = function (in_str, exp_str) {
        return funcs.SortingCharacters.getSortedChars(in_str) === exp_str;
    };

    SortingCharacters.test = function () {
        return this.testConvesion (
             "When not studying nuclear physics, Bambi likes to play\n\nbeach volleyball."
            ,"aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy"
        );
    };

})(funcs.SortingCharacters);

funcs.SortingBalls = (function () {

    /**** PRIVATE ****/
    var int_map = {}
      , exposed = {}
      , balls = [];

    function initIntMap () {
        var i;
        for (i = 0; i < 60; i += 1) {
            int_map[i] = false;
        }
    }

    function updateBalls () {
        var local_balls = [], pos = 0, ball;
        for (ball in int_map) {
            if (int_map[ball] === false) {
                continue;
            }
            local_balls[pos] = ball * 1;
            pos+= 1;
        }
        exposed.balls = local_balls;
    }

    function expose () {
        initIntMap();
        return exposed;
    }

    /**** PUBLIC *****/
    exposed.balls = [];

    exposed.test = function () {
        return int_map;
    };

    exposed.add = function (int_val) {
        if (int_map[int_val] === undefined) {
            throw "Ball not in range: '59>Ball>0'";
        }
        if (int_map[int_val] === false) {
            int_map[int_val] = true;
        }
        updateBalls();
    }

    /**INIT EXPORT */
    return expose();

});

function assert_equal (exp_arr, in_arr) {
    var i=0, len=0;
    if (exp_arr.length === in_arr.length && Array.isArray(exp_arr) && Array.isArray(in_arr)) {
        for (var i = 0, len = exp_arr.length; i < len; i += 1) {
            if(exp_arr[i] !== in_arr[i]) {
                return false;
            }
        }
        return true
    }
    return false;
}