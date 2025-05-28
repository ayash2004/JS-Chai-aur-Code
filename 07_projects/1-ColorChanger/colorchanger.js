const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const mainhead = document.querySelector('.canvas');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    //   mainhead.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'orange') {
    //   body.style.backgroundColor = e.target.id;
    //   mainhead.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    //   mainhead.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    //   mainhead.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        mainhead.style.backgroundColor = e.target.id;
      case 'orange': 
        body.style.backgroundColor = e.target.id;
        mainhead.style.backgroundColor = e.target.id;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        mainhead.style.backgroundColor = e.target.id;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        mainhead.style.backgroundColor = e.target.id;  
      default:
    }
  });
});

