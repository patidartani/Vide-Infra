var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
          var x = e.clientX;
          var y = e.clientY;
          cursor.style.left = x + "px";
          cursor.style.top = y + "px";

});


var expertise = document.querySelector(".expertise-overlay");
var nav = document.querySelector("#nav h1 a i")
var arrow = document.querySelector(".expertise-overlay h1 i");


var flag = 0;

nav.addEventListener("click", function () {
          if (flag === 0) {
                    expertise.style.top = "0"
                    flag = 1
          } else {
                    expertise.style.top = "-100%"
                    flag = 0
          }
})
nav.addEventListener("click", function () {
          if (flag === 0) {
                    expertise.style.top = "-100%"
                    flag = 1
          } else {
                    expertise.style.display = "0"
                    flag = 0
          }
})

arrow.addEventListener("click", function () {
          if (flag === 0) {
                    expertise.style.top = "0"
                    flag = 1
          } else {
                    expertise.style.top = "-100%"
                    flag = 0
          }
})





