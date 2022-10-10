gsap.timeline({ defaults: { ease: "power1.inOut" }, repeat: -1, repeatDelay: 2 })
  .fromTo('.slide_1 .bottle', { y: -40 }, { y: 0, scaleY: 1, duration: .8 })
  .fromTo('.slide_1 .splash', { opacity: 0 }, { opacity: 1, duration: .5 }, ">-.2")
  .fromTo('.slide_1 .text1', { opacity: 0 }, { opacity: 1, duration: 1 }, ">")


