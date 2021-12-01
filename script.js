//ESTRUTURA DOM

const firstTower = document.getElementById("tower1")
const secondTower = document.getElementById("tower2")
const thirdTower = document.getElementById("tower3")

const firstDisc = document.createElement("div")
firstDisc.id = "discs"
firstDisc.classList.add("disc1")


const secondDisc = document.createElement("div")
secondDisc.id = "discs"
secondDisc.classList.add("disc2")


const thirdDisc = document.createElement("div")
thirdDisc.classList.add("disc3")
thirdDisc.id = "discs"

function start() {
    firstTower.appendChild(firstDisc)
    firstTower.appendChild(secondDisc)
    firstTower.appendChild(thirdDisc)
}
start()

const allTowers = document.querySelectorAll(".tower")

allTowers.forEach(function (tower) {
    tower.addEventListener("click", selectDisc)
})

let lastDisc

function selectDisc(event) {
    const towerClicked = event.currentTarget
    if (lastDisc == null) {
        lastDisc = towerClicked.lastElementChild
        // lastDisc == !null

    } else if (!towerClicked.lastElementChild) {
        changeTower(lastDisc, towerClicked)

    } else if (lastDisc.clientWidth < towerClicked.lastElementChild.clientWidth) {
        changeTower(lastDisc, towerClicked)
    }
    if (thirdTower.childElementCount === 3){
        
        popup() 
    }

}


function changeTower(discos, torres) {

    torres.appendChild(discos)
    lastDisc = null
}


function msgGanhador() {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

