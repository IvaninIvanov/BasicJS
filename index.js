/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "778885";
    // e.g. return "UP654321";
}

function fn() {
    return "Ivanin";
}

function sn() {
    return "Ivanov";
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function checkObject(ob) {
  ob.checked = true;
}

function checkObjectInside(ob) {
  if (!!ob.data == true) {
    ob.data.checked = true;
  }
}

function arraySet(arr,ind,val) {
  if (!!arr[ind] == true) {
    arr[ind] = val;
  }
}

function addAll(arr) {
  var sum=0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function larger(a,b) {
  if (a<b == true) {
    return b;
  }
  else {
    return a;
  }
}

function largest(arr) {
  var max = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function compare(a1,a2) {
  for (var i=0; i<a1.length; i++) {
    if (a1[i] == a2[i] == true){
      return true;
    }
    else {
      return false;
    }
  }
}

function addToAll(arr,p) {
  for (var i=0; i<arr.length; i++) {
    arr[i] += p;
  }
  return arr;
}

var remembered;
function rememberThis(a) {
  remembered = a;
  return remembered;
}

function nArray(n) {
  var arr=[], buffer=0;
  for (var i=0; i<=n; i++) {
    buffer += 1;
    arr[i] = buffer;
  }
  return arr;
}

function addAllOpt(arr) {
  if (!!arr == true) {
    var sum=0;
    for (var i=0; i<arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  else {
    return 0;
  }
}

function divisors(arr,d) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%d == 0) {
      res.push(arr[i]);
    }
  }
  return res;
}

function multiples(n,m) {
  var arr=[], buffer=1;
  for (var i=0; i<=n; i++) {
    buffer = buffer*m;
    arr[i] = buffer;
  }
  return arr;
}
