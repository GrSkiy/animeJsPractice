let start = anime({
  targets: '.sector',
  translateY: {
   value: 900,
   duration: 300,
   easing: 'linear',
 },
 rotate: {
   value: 360,
   duration: 800,
   easing: 'easeInOutSine'
 },
 scale: {
   value: 3,
   duration: 1000,
   delay: 800,
   easing: 'easeInOutQuart'
 },
 delay: 250, // All properties except 'scale' inherit 250ms delay
 autoplay: false,
});

// let both = document.querySelector('')

let go = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  autoplay: false,
});

go
.add({
  targets: '.slide',
  opacity: 0,
  autoplay: 0,
  duration: 250,
})
.add({
  targets: '.sector',
  top: {
   value: 500,
   duration: 250,
   easing: 'linear',
 },
 rotate: {
   value: 360,
   duration: 800,
   easing: 'easeInOutSine'
 },
})
.add({
  targets: '.sector',
  top: {
   value: 120,
   duration: 250,
   easing: 'linear',
 },
 rotate: {
   value: 360,
   duration: 800,
   easing: 'easeInOutSine'
 },
 width: {
   value: 440,
   duration: 1000,
   easing: 'easeInOutQuart'
 },
 height: {
   value: 700,
   duration: 1000,
   delay: 800,
   easing: 'easeInOutQuart'
 },
 borderRadius: {
   value: 45,
   delay: 1000,
   easing: 'spring'
 },
})
.add ({
  targets: '.first-circle',
  top: {
    value: 280,
    easing: 'easeOutElastic(1, 1)',
  },
  duration: 800,
})
.add ({
  targets: '.first-circle',
  top: {
    value: 200,
    easing: 'easeOutElastic(1, 1)',
  },
  left: {
    value: 30,
  },
  width: {
    value: 220,
  },
  height: {
    value: 220,
  },
  duration: 800,
})
.add ({
  targets: '.second-circle',
  top: {
    value: 530,
    easing: 'easeOutElastic(4, 1)',
  },
  duration: 800,
})
.add ({
  targets: '.second-circle',
  top: {
    value: 480,
    easing: 'easeOutElastic(4, 1)',
  },
  right: {
    value: 25,
  },
  width: {
    value: 162,
  },
  height: {
    value: 162,
  },
  duration: 1000,
})
.add ({
  targets: ['.first-text', '.second-text'],
  opacity: 1,
  duration: 1000,
})

let good = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  autoplay: false,
});

good
.add ({
  targets: '.path-one',
  opacity: 1,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})
.add ({
  targets: '.two',
  top: {
    value: 256,
    duration: 600,
  }
})

.add ({
  targets: '.one',
  top: {
    value: 210,
    duration: 600,
  }
})
.add ({
  targets: '.three',
  top: {
    value: 256,
    duration: 600,
  }
})
.add ({
  targets: '.path-one',
  opacity: 0,
  duration: 1000,
})
.add ({
  targets: '.two',
  top: {
    value: -90,
    duration: 600,
  }
})

.add ({
  targets: '.one',
  top: {
    value: -90,
    duration: 600,
  }
})
.add ({
  targets: '.three',
  top: {
    value: -90,
    duration: 600,
  }
})

let bad = anime.timeline({
  easing: 'easeOutExpo',
  autoplay: false,
});

bad
.add ({
  targets: '.path-two',
  opacity: 1,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 3000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
})
.add ({
  targets: '.five',
  top: {
    value: 655,
    duration: 500,
  }
})

.add ({
  targets: '.four',
  top: {
    value: 680,
    duration: 500,
  }
})
.add ({
  targets: '.six',
  top: {
    value: 655,
    duration: 500,
  }
})
.add ({
  targets: '.path-two',
  opacity: 0,
  duration: 1000,
})
.add ({
  targets: '.five',
  top: {
    value: -90,
    duration: 600,
  }
})

.add ({
  targets: '.four',
  top: {
    value: -90,
    duration: 600,
  }
})
.add ({
  targets: '.six',
  top: {
    value: -90,
    duration: 600,
  }
})



document.querySelector('.slide').onclick = go.restart;
document.querySelector('.first-text').onclick = good.restart;
document.querySelector('.second-text').onclick = bad.restart;
