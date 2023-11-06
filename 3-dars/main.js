const element = document.querySelector(".element")
// function handleMouseenter(event){
//     event.target.classList.add("radius")
// }
// element.addEventListener("mouseenter", handleMouseenter)
// function handleMouseOut(event){
//     event.target.classList.remove("radius")
// }
// element.addEventListener("mouseout", handleMouseOut)
// function handleMouseMove(event){
//     document.body.style.background = `linear-gradient(rgb${event.layerX},${event.offsetY}, ${event.clientX}), rgb(${event.clientY}, ${event.screenX}, ${event.layerY}),rgb(20, 130, 50)`
// }
// element.addEventListener("mousemove", handleMouseMove)

// element.addEventListener("mousedown", () =>{
//     console.log("ishladi");
// })
// element.addEventListener("mouseup", () =>{
//     console.log("up ishaladi");
// })

let input = document.querySelector("input")
let btnCopy = document.querySelector(".btn-copy")
input.addEventListener("focus", (event) => {
    console.log("ishladi");
    event.target.style.outline = "2px solid royalblue"
    // console.log(event.target.value);
    // if(event.keyCode === 13 && event.target.value.length >= 2 ){
    //     window.open(`https://${event.target.value}.com`, "blank")
    // }
    // if(event.target.value.length > 1){
    //     btnCopy.classList.add("block")
    // }else{
    //     btnCopy.classList.remove("block")
    // }
})
input.addEventListener("blur", (event) =>{
    event.target.style.outline = "2px solid transparent"
})
input.addEventListener("cut",(event) =>{
    event.target.style.outline ="2px solid red"
})
let select = document.querySelector(".tillar")
let text =document.querySelector(".text")
select.addEventListener("change", (event) =>{
    if(event.target.value === "uzb"){
        text.textContent = "Salom"
    }else if(event.target.value === "rus"){
        text.textContent= "Alik"
    }
})
// window.addEventListener("click", (event) => {
//     if(event.target.matches(".btn-copy") && event.altKey){
//         console.log("ishladi");
//         navigator.clipboard.writeText(input.value)
//         input.value = null
//     }
//     if(!input.value.length){
//         event.target.classList.remove("block")
//     }
// })
