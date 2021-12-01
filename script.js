//ESTRUTURA DOM
const gameBox = document.getElementById("towers")
    gameBox.classList.add("towers")
const firstTower = document.createElement("div")
    firstTower.classList.add("tower")
    firstTower.id = "tower1"
const secondTower = document.createElement("div")
    secondTower.classList.add("tower")
    secondTower.id = "tower2"
const thirdTower = document.createElement("div")
    thirdTower.classList.add("tower")
    thirdTower.id = "tower3"

 const firstDisc = document.createElement("div")
    firstDisc.id = "discs"
    firstDisc.classList.add("disc1")
   

const secondDisc = document.createElement("div")
    secondDisc.id = "discs"
    secondDisc.classList.add("disc2")
   

const thirdDisc = document.createElement("div")
    thirdDisc.classList.add("disc3")
    thirdDisc.id = "discs"

function start(){
    gameBox.appendChild(firstTower)
    gameBox.appendChild(secondTower)
    gameBox.appendChild(thirdTower)

    firstTower.appendChild(firstDisc)
    firstTower.appendChild(secondDisc)
    firstTower.appendChild(thirdDisc)
}
start()

const allTowers = document.querySelectorAll(".tower")
    
    allTowers.forEach(function(tower){
        tower.addEventListener("click", selectDisc)
})
    
let lastDisc

function selectDisc(event){
    const towerClicked = event.currentTarget

    if(lastDisc == null){
         lastDisc = towerClicked.lastElementChild
    }else{
        changeTower(lastDisc, towerClicked)
    }
}

    
function changeTower(discos, torres){

    torres.appendChild(discos)
}


