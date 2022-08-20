document.onkeydown = keyDown;
document.onkeyup = keyUp;

const leftArmUp = document.getElementById("LeftArmUp");
const leftArmDown = document.getElementById("LeftArmDown");
const rightArmUp = document.getElementById("RightArmUp");
const rightArmDown = document.getElementById("RightArmDown");

const audioA = document.getElementById("audioA");
const audioB = document.getElementById("audioD");

let audioARelease = false
let audioDRelease = false


function keyDown(e) {
    var event = window.event ? window.event : e;
    if (event.keyCode == 68 && !audioARelease) {
        audioARelease = true
        audioA.pause();
        audioA.currentTime = 0;
        audioA.play()
        rightArmDown.classList.remove("hide");
        rightArmUp.classList.add("hide");
    }
    if (event.keyCode == 65 && !audioDRelease) {
        audioDRelease = true
        audioD.pause();
        audioD.currentTime = 0;
        audioD.play()
        leftArmDown.classList.remove("hide");
        leftArmUp.classList.add("hide");
    }
}

function keyUp(e) {
    var event = window.event ? window.event : e;
    if (event.keyCode == 68) {
        audioARelease = false
        rightArmUp.classList.remove("hide");
        rightArmDown.classList.add("hide");
    }

    if (event.keyCode == 65) {
        audioDRelease = false
        leftArmUp.classList.remove("hide");
        leftArmDown.classList.add("hide");
    }

}


