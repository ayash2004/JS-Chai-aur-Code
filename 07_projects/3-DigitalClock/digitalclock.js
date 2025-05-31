// const clock = document.getElementById('clock');
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleString();
//   clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// }, 2000);
