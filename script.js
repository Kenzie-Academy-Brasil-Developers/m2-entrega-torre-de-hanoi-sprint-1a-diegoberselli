
const firstTower = document.getElementById("tower1")
const secondTower = document.getElementById("tower2")
const thirdTower = document.getElementById("tower3")

const firstDisc = document.createElement("div")
    firstDisc.id = "disc1"
    firstDisc.classList.add("disc1")

const secondDisc = document.createElement("div")
    secondDisc.id = "disc2"
    secondDisc.classList.add("disc2")

const thirdDisc = document.createElement("div")
    thirdDisc.classList.add("disc3")
    thirdDisc.id = "disc3"


function start(){
    firstTower.appendChild(firstDisc)
    firstTower.appendChild(secondDisc)
    firstTower.appendChild(thirdDisc)
}
start()



let tower1 = document.getElementById('tower1');
tower1.addEventListener("click", mover)
let tower2 = document.getElementById('tower2');
tower2.addEventListener("click", mover)
let tower3 = document.getElementById('tower3');
tower3.addEventListener("click", mover)



function mover(event){

    const disc = event.target
    if(disc3.id === "disc3"){
        
        console.log(disc3)
    }
}

