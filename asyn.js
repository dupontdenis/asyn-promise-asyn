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
const nb4 = document.querySelector("#nb4");
const nb5 = document.querySelector("#nb5");

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function anim() {
  await delay(2000);
  await nb5.animate(nbTumbling, nbTiming).finished;
  await nb4.animate(nbTumbling, nbTiming).finished;
  await nb3.animate(nbTumbling, nbTiming).finished;
  await nb2.animate(nbTumbling, nbTiming).finished;
  await nb1.animate(nbTumbling, nbTiming).finished;
}
anim();


