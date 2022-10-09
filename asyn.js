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
  document.body.insertAdjacentHTML("beforeend", `<p>  await nb5.animate(nbTumbling, nbTiming).finished;</p>`)
  await nb4.animate(nbTumbling, nbTiming).finished;
  document.body.insertAdjacentHTML("beforeend", `<p>  await nb4.animate(nbTumbling, nbTiming).finished;</p>`)
  await nb3.animate(nbTumbling, nbTiming).finished;
  document.body.insertAdjacentHTML("beforeend", `<p>  await nb3.animate(nbTumbling, nbTiming).finished;</p>`)
  await nb2.animate(nbTumbling, nbTiming).finished;
  document.body.insertAdjacentHTML("beforeend", `<p>  await nb2.animate(nbTumbling, nbTiming).finished;</p>`)
  await nb1.animate(nbTumbling, nbTiming).finished;
  document.body.insertAdjacentHTML("beforeend", `<p>  await nb1.animate(nbTumbling, nbTiming).finished;</p>`)
}
anim();


