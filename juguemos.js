let titulo=document.querySelector("h2");
let zonadestino=document.querySelector(".recuadroUno")


titulo.addEventListener("dragstart", (evento)=>{
  evento.dataTransfer.setData("Text/plane",titulo.innerText)
  evento.dataTransfer.setData("Text","soy otro dato")
  console.log("se guardo informacion")
})


//zonadestino.addEventListener("dragover",(evento)=>{
//  evento.preventDefault();
//})


zonadestino.addEventListener("drop",(evento)=>{
  console.log(evento.dataTransfer.getData("Text"))
  let dato =evento.dataTransfer.getData("text/plane");

  zonadestino.innerHTML=`<h1>${dato}</h1>`
})


titulo.addEventListener("dragend",()=>{
    titulo.style.visibility="hidden"
})


const guardarDato=(evento)=>{
  evento.dataTransfer.setData("Text","./imagenes/rompe2.png")
}

const prevenirAccion=(evento)=>{
  evento.preventDefault()
}

const soltarDato= (evento)=>{
  let infoImagen= evento.datatransfer.getData("Text")
  zonadestino.innerHTML=`<img src="${infoImagen}"/>`
}