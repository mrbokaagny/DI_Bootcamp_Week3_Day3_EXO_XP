let divContainer = document.getElementById('container')
let btnClear = document.getElementById('clear')
let intervalToAdd

// Partie I : Afficer hello world après 2 secondes
function showAlert(){
    alert('Hello World.')
}
setTimeout(showAlert , 2000)


// Partie II : ajout d'un paragraphe après 2 secondes
function addContainerChilder(){
    let paragraphe = document.createElement('p')
    paragraphe.textContent = 'Hello World'
    divContainer.appendChild(paragraphe)
}
setTimeout(addContainerChilder , 2000)

// Partie III : ajout d'un paragraphe tout les 2 secondes
function addParagraphe(){
    let paragraphe = document.createElement('p')
    paragraphe.textContent = 'Hello World'
    divContainer.appendChild(paragraphe)

    let allParagraphe = document.getElementsByTagName('p')

    // suppression de l'intervalle une fois qu'il y a 5 paragraphe de la div
    if(allParagraphe.length == 5){
        clearInterval(intervalToAdd)
    }
}
intervalToAdd = setInterval(addParagraphe , 2000)


// suppression de l'intervalle après click sur le boutton
btnClear.onclick = () =>{
    clearInterval(intervalToAdd)
}