"use strict";

function _toConsumableArray(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
    return c;
  }
  return Array.from(a);
}

var playing = true;

var timer = function () {
  return setInterval(function () {
    var a = document.getElementById("counter");
    var b = parseInt(a.innerText);
    a.innerText = b + 1;
  }, 1000);
};

var interval = timer();
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var heart = document.getElementById("heart");
var pause = document.getElementById("pause");
var commentForm = document.getElementsByTagName("form")[0];

minus.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  a.innerText = b - 1;
});

plus.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  a.innerText = b + 1;
});

heart.addEventListener("click", function () {
  var a = document.getElementById("counter");
  var b = parseInt(a.innerText);
  var c = document.querySelector(".likes");
  var d = void 0;

  if ([].concat(_toConsumableArray(c.children)).map(function (a) {
    return parseInt(a.dataset.num);
  }).includes(b)) {
    d = document.querySelector('[data-num="' + b + '"]');
    var e = parseInt(d.children[0].innerText);
    d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
  } else {
    d = document.createElement("li");
    d.setAttribute("data-num", b);
    d.innerHTML = b + " has been liked <span>1</span> time";
    c.appendChild(d);
  }
});

pause.addEventListener("click", function () {
  if (playing) {
    playing = false;
    clearInterval(interval);
    this.innerText = "resume";
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
  } else {
    playing = true;
    interval = timer();
    this.innerText = "pause";
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
  }
});

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var commentInput = this.children[0];
  var commentText = commentInput.value;
  commentInput.value = "";

  var commentsSection = document.querySelector(".comments");
  var commentElement = document.createElement("p");
  commentElement.innerText = commentText;
  commentsSection.appendChild(commentElement);
});
