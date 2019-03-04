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
})
.add({
  targets: '.word_box1',
  translateY: 200,
  duration: 300,
})
.add({
targets: '.word_box2',
translateY: 200,
duration: 300,
})
.add({
targets: '.word_box3',
translateY: 200,
duration: 300,
});

anime({
  targets: ".glaz",
  top: 260,
  direction: 'alternate',
  loop: true,
})

let animation2 = anime.timeline({
autoplay:false,
});

animation2
.add({
  targets: ".glaz",
  opacity: 0,
  duration: 800,
})
.add({
  targets: ".red",
  opacity: 0,
  duration: 800,
})
.add({
  targets: ".word_box1, .word_box2, .word_box3",
  opacity: 0,
  duration: 800,
})
.add({
  targets: ".large_letter1",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter2",
  translateY: 400,
  duration:400
})
.add({
  targets: ".large_letter3",
  translateY: 400,
  duration:550
})
.add({
  targets: ".large_letter4",
  translateY: 400,
  duration:350
})
.add({
  targets: ".large_letter5",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter6",
  translateY: 400,
  duration:380
})
.add({
  targets: ".large_letter7",
  translateY: 400,
  duration: 500
})
.add({
  targets: ".large_letter8",
  translateY: 400,
  duration: 400
})
.add({
  targets: ".large_letter9",
  translateY: 400,
  duration:600
})
.add({
  targets: ".large_letter10",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter11",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter12",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter13",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter14",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter15",
  translateY: 400,
  duration:300
})
.add({
  targets: ".large_letter16",
  translateY: 400,
  duration:350
})
.add({
  targets: ".large_letter17",
  translateY: 400,
  duration:400
})
.add({
  targets: ".large_letter18",
  translateY: 400,
  duration:400
})

// let animation2 = anime.timeline({
//   autoplay: false,
//
//   });
//
//   animation2
//



document.querySelector('.red').onclick = animation2.restart;
