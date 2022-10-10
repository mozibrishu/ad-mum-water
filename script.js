gsap.timeline({ defaults: { ease: "power1.inOut" }, repeat: -1, repeatDelay: 2 })
  .fromTo('.slide_1 .bottle', { y: -40 }, { y: 0, scaleY: 1, duration: .8 })
  .fromTo('.slide_1 .splash', { opacity: 0 }, { opacity: 1, duration: .5 }, ">-.2")
  .fromTo('.slide_1 .text1', { opacity: 0 }, { opacity: 1, duration: 1 }, ">")


var countryone = document.getElementById('countryone')
var countrytwo = document.getElementById('countrytwo')

var teamone = document.getElementById('teamone')
var teamtwo = document.getElementById('teamtwo')

getLiveScore();
// setInterval(function () { getLiveScore(); }, 50000);

//var data;

function getLiveScore() {

  fetch('//ms.purplepatch.online/cricket/api/t20/data.json')
    .then((response) => response.json())
    .then((data) => {

      if (data.teamone == false) {
        teamone.innerText = ''
      } else {
        teamone.innerText = data.teamone.split('-')[1];
      }

      if (data.teamtwo == false) {
        teamtwo.innerText = ''
      } else {
        teamtwo.innerText = data.teamtwo.split('-')[1];
      }

      countryone.innerText = data.countryone;
      countrytwo.innerText = data.countrytwo;

    })

}