export const smoothScroll = function (targetSection, duration) {
  const target = document.querySelector(targetSection);
  console.log(target, targetSection);
  if (!target) {
    return;
  }
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - 50;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, s, d, dd) {
    t /= dd / 2;
    if (t < 1) return (d / 2) * Math.pow(2, 10 * (t - 1)) + s;
    t--;
    return (d / 2) * (-Math.pow(2, -10 * t) + 2) + s;
  }

  requestAnimationFrame(animation);
};
