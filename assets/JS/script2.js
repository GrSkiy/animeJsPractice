let path = anime.path('path');

let animation = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750
});

animation
.add({
  targets: '.red',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  duration: 2000,
  width: {
    value: 250,
    duration: 2000,
  },
  height: {
    value: 250,
    duration: 2000,
  },
})
.add({
  targets: '.glaz',
  opacity: 1,
  duration: 500,
});


document.querySelector('.play').onclick = animation.play;
document.querySelector('.stop').onclick = animation.pause;
