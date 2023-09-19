const menu = document.getElementById('menu')
const botaoMenu = document.getElementById('botao-menu')

function abrirMenu(event) {
    if(event.type === "touchstart"){
        event.preventDefault()
    }
    event.stopPropagation()
    menu.classList.toggle('active')
    fecharMenuFora(menu, () => {
        menu.classList.remove('active')
    })
}

function fecharMenuFora (targetElement, callback) {
    const html = document.documentElement
    function cliqueNoHTML (event) {
        if(!targetElement.contains(event.target)) {
            targetElement.removeAttribute("data-target")
            html.removeEventListener("click", cliqueNoHTML)
            html.removeEventListener("touchstart", cliqueNoHTML)
            callback()
        }
    }

    if(!targetElement.hasAttribute("data-target")) {
        html.addEventListener("click", cliqueNoHTML)
        html.addEventListener("touchstart", cliqueNoHTML)
        targetElement.setAttribute("data-target", "")
    }
}

botaoMenu.addEventListener('click', abrirMenu)
botaoMenu.addEventListener('touchstart', abrirMenu)