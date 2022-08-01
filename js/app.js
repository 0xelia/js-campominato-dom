
const gridElement = document.querySelector('.grid')
let gridCells
const levelButton = document.querySelector('select')
const playButton = document.querySelector('button')
const scoreBlockEl = document.querySelector('.score_block')
console.log(scoreBlockEl)
let bombs = []
let columns 
let cells

let userScore = 0
let userScoreEl = document.createElement('p')
userScoreEl.className = 'score'

function startGame() {
    getGrid()
    bombs = getBombs(cells)
    console.log(bombs)
}

function getGrid() {
    resetGame()
    columns = parseInt(levelButton.value);
    cells = columns **2
    
    setLevel()
    
    for(i = 0; i < cells; i++){
        let gridCells = document.createElement('div')
        gridCells.className = 'square'
        gridCells.dataset.numero = i + 1
        gridCells.innerHTML = i + 1
        gridElement.append(gridCells)
        clickHandler(gridCells)
    }
    
}

function setLevel(){
    columns = parseInt(levelButton.value);
    if (columns == 10) {
        gridElement.className = 'grid_easy'
    } else if (columns == 9) {
        gridElement.className = 'grid_medium'
    } else if (columns == 7) {
        gridElement.className = 'grid_hard'
    }
}

function resetGame() {
    gridElement.innerHTML = ''
    userScore = 0
}

function getBombs(max) {
    let bombCells = [];
    while (bombCells.length < 16) {
        let bombPosition = Math.floor(Math.random() * max + 1)
        
        if(!bombCells.includes(bombPosition)){
            bombCells.push(bombPosition)
        }
    }
    
    return bombCells
}

function clickHandler(el) {
    el.addEventListener('click', function(){
        let currentCell = parseInt(this.dataset.numero)
        console.log(bombs.includes(currentCell))
        
        if (bombs.includes(currentCell)) {
            gameOver(el)
        } else {
            el.classList.add('success')
            userScore++
        }
        
        console.log('Punteggio: ' + userScore)
        
    })
}

function gameOver(el) {
    el.classList.add('fail')
    userScoreEl.innerHTML = `Il tuo punteggio: ${userScore}`
    scoreBlockEl.append(userScoreEl)
}

playButton.addEventListener('click', startGame)