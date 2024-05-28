// variabbles
const pomButtom = document.querySelector(".tecla_pom")
const clapButtom = document.querySelector(".tecla_clap")
const timButtom = document.querySelector(".tecla_tim")
const puffButtom = document.querySelector(".tecla_puff")
const splashButtom = document.querySelector(".tecla_splash")
const toimButtom = document.querySelector(".tecla_toim")
const pshButtom = document.querySelector(".tecla_psh")
const ticButtom = document.querySelector(".tecla_tic")
const tomButtom = document.querySelector(".tecla_tom")


function asignarAudio(rutaAudio) {
    audio = new Audio(rutaAudio)
    audio.play()
    audio.currentTime = 0;
}

pomButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keyq.wav")
});
clapButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keyw.wav")
});
timButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keye.wav")
});
puffButtom.addEventListener("click", ()=>{
    asignarAudio("https://github.com/isato12/midi/commit/5a6f8b5df4813f4b52998f867998f95a33568a9e#diff-3bf1648acdde32f962a6f1232376742707e8eac8f448cbeda8673cf04301ce48")
});
splashButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keys.wav")
});
toimButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keyd.wav")
});
pshButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keyz.wav")
});
ticButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keyx.wav")
});
tomButtom.addEventListener("click", ()=>{
    asignarAudio("../sounds/keyc.wav")
});
