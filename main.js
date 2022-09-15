const homeBtn = document.querySelector('#home');
const preOrderBtn = document.querySelector('#preOrder');
const aboutBtn = document.querySelector('#about');
const membershipBtn = document.querySelector('#membership');
const humanBtn = document.querySelector('#human');

const stageBtn = document.querySelectorAll('.stage');

const homeStage = document.querySelector('#home-stage');

// for(var i = 0; i < stageBtn.length; i++) {
//     stageBtn[i].onclick = function(e) {

//     }
// }

homeBtn.onclick = function(e) {
    homeStage.classList.toggle('appear');
} 

homeStage.classList.toggle('appear');
