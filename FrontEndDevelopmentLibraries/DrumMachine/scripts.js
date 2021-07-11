const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const displays = ['CLEAR', 'DEFUSING', 'GET IT', 'SPOTTED', 'AK SHOT', 'DEAD', 'M4 SHOT', 'DEFUSED', 'VICTORY'];
const ids = ['area-clear', 'defusing', 'worry', 'target', 'ak-shot', 'death', 'm4-shot', 'defused', 'yeah'];

document.addEventListener('keydown',function(event){
    var key = event.key.toUpperCase();
    changeStyle(key);
    changeDisplay(key);
    playSound(key);
});

document.addEventListener('keyup',function(event){
    var key = event.key.toUpperCase();
    revertStyle(key);
});

function playEffects(key) {
    changeDisplay(key);
    playSound(key);
}

function changeStyle(key) {
    if(validKeys.indexOf(key) >= 0){
        let pad = document.getElementById(ids[validKeys.indexOf(key)]);
        pad.style.boxShadow = 'none';
        pad.style.backgroundColor = '#dddd00';
    }
}

function revertStyle(key) {
    if(validKeys.indexOf(key) >= 0){
        let pad = document.getElementById(ids[validKeys.indexOf(key)]);
        pad.style.boxShadow = '2px 2px black';
        pad.style.backgroundColor = '';
    }
}

function changeDisplay(key) {
    let display = document.getElementById('display');
    if(validKeys.indexOf(key) >= 0)
        display.innerHTML = displays[validKeys.indexOf(key)];
    else
        display.innerHTML = 'OOF';
}

function playSound(key) {
    let audio = document.getElementById(key);
    if(audio != null)
        audio.play();
    else
        document.getElementById('oof').play();
}