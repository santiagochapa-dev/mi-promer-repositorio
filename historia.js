let botonpausa = document.querySelector(".pausa");

let video = document.querySelectorAll("video")



const reproducir=()=>{
    console.log("se dio play")
    video[0].play()
}

const pausar=()=>{
     console.log("pauso")
     video[0].pause()
}