let closeButton = document.querySelector(".close")
let divBackground = document.querySelector(".divBackground")


let forgotPassword = document.querySelector(".forgotPassword")

closeButton.addEventListener('click', ()=>{
    divBackground.style.display = 'none'
})

forgotPassword.addEventListener('click', ()=>{
    divBackground.style.display = 'block'
})