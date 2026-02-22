
const teclas = document.querySelectorAll('.letra')

function addC(event){
    teclas.forEach((item) => {
        if(event.key === item.innerText.toLowerCase()){
            item.classList.add('clicou')
    }})
}

function addB(event){
    teclas.forEach((item) => {
        if(event.key === item.innerText.toLowerCase()){
            item.classList.remove('clicou')
        }
    })
}

teclas.forEach((item) => {
    window.addEventListener('keydown', addC)
    window.addEventListener('keyup', addB)
})