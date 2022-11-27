let textClick = document.querySelector('.forgotPassword')
let ancora = document.querySelector('body')

textClick.addEventListener('click', ()=>{
    let divBackground = document.createElement("div")

    divBackground.classList.add('divBackground')

    ancora.append('divBackground')
})