const homeBtn = document.querySelector('#home');
const preOrderBtn = document.querySelector('#preOrder');
const aboutBtn = document.querySelector('#about');
const membershipBtn = document.querySelector('#membership');
const humanBtn = document.querySelector('#human');

const stageBtn = document.querySelectorAll('.stage');

const homeStage = document.querySelector('#home-stage');
const preOrderStage = document.querySelector('#preOrder-stage');
const aboutStage = document.querySelector('#about-stage');


// click on button to open the stage ********************

homeBtn.onclick = function(e) {
    for(var i = 0; i < stageBtn.length; i++) {
        stageBtn[i].style.display = "none";
    }

    homeStage.style.display = 'block';
}

preOrderBtn.onclick = function(e) {
    for(var i = 0; i < stageBtn.length; i++) {
        stageBtn[i].style.display = "none";
    }

    preOrderStage.style.display = 'block';
}

aboutBtn.onclick = function(e) {
    for(var i = 0; i < stageBtn.length; i++) {
        stageBtn[i].style.display = "none";
    }

    aboutStage.style.display = 'block';
}
// 

homeBtn.click();

const input = document.querySelectorAll('.form_content--unit input');
const label = document.querySelectorAll('.form_content--unit label');

console.log(input, label);
