let counter;
let count = 3;

function countdown() {
  counter = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
      console.log('Blast off!');
      clearInterval(counter);
    }
  }, 1000);
}

countdown(count);
