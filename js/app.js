
const gridElement = document.querySelector('.grid')
const levelButton = document.querySelector('select')
const playButton = document.querySelector('button')
console.log(levelButton)
let cellsList = [];
let bombs = []

playButton.addEventListener('click', function(){
    resetGame()
    const columns = parseInt(levelButton.value);
    const cells = columns **2

    bombs = getBombs(cells)
    console.log(bombs)

    let userScore = 0

    for (i = 0; i < cells; i++) {
        
        let gridCells = document.createElement('div')
        gridCells.className = 'square'
        gridCells.dataset.numero = i + 1
        cellsList.push(gridCells)
        gridElement.append(gridCells)
        
        
        if(columns == 10) {
            gridElement.className = 'grid_easy'
        } else if (columns == 9) {
            gridElement.className = 'grid_medium'
        } else if (columns == 7) {
            gridElement.className = 'grid_hard'
        }
        
        gridCells.addEventListener('click', function(){
            let cellClicked = parseInt(this.dataset.numero)
            
            gridCells.classList.add('success')
            userScore++

            if(bombs.includes(cellClicked)){
                gridCells.classList.add('fail')
                console.log('game over')

                let scoreBlock = document.querySelector('.score_block')
                let scoreElement = document.createElement('p')
                scoreElement.className = 'score'
                scoreElement.innerHTML = `Il Tuo Punteggio: ${userScore} pts`  
                scoreBlock.innerHTML = scoreElement}
        
            console.log(userScore)
        })
        
    }
    
        let scoreBlock = document.querySelector('.score_block')
        let scoreElement = document.createElement('p')
        scoreElement.className = 'score'
        scoreElement.append(`Il Tuo Punteggio: ${userScore} pts`)  
        scoreBlock.append(scoreElement)
        
})
    

function resetGame() {
    gridElement.innerHTML = ''
}

function gameOver() {
    gridCells.classList.add('fail')
    console.log('game over')
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
