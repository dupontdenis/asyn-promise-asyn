const nbTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const nbTiming = {
  duration: 1000,
  iterations: 1,
  fill: 'forwards'
}

const nb1 = document.querySelector("#nb1");
const nb2 = document.querySelector("#nb2");
const nb3 = document.querySelector("#nb3");

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

delay(2000)
  .then(() => nb3.animate(nbTumbling, nbTiming).finished)
  .then(() => nb2.animate(nbTumbling, nbTiming).finished)
  .then(() => nb1.animate(nbTumbling, nbTiming).finished)
  .catch(error => console.error(`Error animating : ${error}`));
