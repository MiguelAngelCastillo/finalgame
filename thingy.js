var mouse = {x: 0, y: 0}

var score = 0
var scoreText = makeText("Score: -", 660, 50, 25, "sans-serif", "black", 1)

gameOver = false

var player = makeImage("images/pixelcharacter.png", 30, 100, 30, 30, 1)

/*
function checkCollisionsMissiles() {
    for (var j = 0; j < enemies.length; j++) {
        for (var i = 0; i < missiles.length; i++) {
          if (collide(missiles[i], enemies[j], 0, -20) == true) {
                // YOUR CODE HERE
            }
        }
    }
}*/

function checkCollisionsMissilesRight() {
for (var i = 0; i < missiles.length; i++) {
  for (var j = 0; j < enemiesRight.length; j++) {
    if (missiles[i] != undefined && enemiesRight[j] != undefined) {
      if (collide(missiles[i], enemiesRight[j], 0, -20) == true) {
          drawExplosion(getX(enemiesRight[j]), getY(enemiesRight[j]))
          removeArrayElement(enemiesRight, j)
          removeArrayElement(missiles, i)
          console.log("same")
          score = score + 1
          scoreText.innerHTML = "Score: " + score
          }
        }
    }
  }
}


var enemiesRight = []
var enemiesLeft= []
var missiles = []

function drawPlayer() {
  setX(player, mouse.x)
  setY(player, mouse.y)
}

function drawEverything() {
  drawPlayer()
  drawEnemiesRight()
  drawEnemiesLeft()
  drawMissiles()
  checkCollisionsPlayerRight()
  checkCollisionsMissilesRight()

  if (gameOver == false) {
    requestAnimationFrame(drawEverything)
  }
}

function makeEnemiesRight() {
  var enemyRight = makeImage("images/enemy.jpg", 750, random(0,400), 30, 30, 1)
  enemiesRight.push(enemyRight)
  setTimeout(makeEnemiesRight, 600)
}
setTimeout(makeEnemiesRight, 8000)

function drawEnemiesRight() {
  for (var i = 0; i < enemiesRight.length; i++){
    move(enemiesRight[i], -4, 0)
    if (getX(enemiesRight[i]) < 0) {
      setX(enemiesRight[i], 800)
    }
  }
}

function makeEnemiesLeft() {
  var enemyLeft = makeImage("images/enemy.jpg", 0, random(0, 400), 30, 30, 1)
  enemiesLeft.push(enemyLeft)
  setTimeout(makeEnemiesLeft, 600)
}
setTimeout(makeEnemiesLeft, 8000)

function drawEnemiesLeft() {
  for (var i = 0; i < enemiesLeft.length; i++){
    move(enemiesLeft[i], 4, 0)
    if (getX(enemiesLeft[i]) > 750) {
      setX(enemiesLeft[i], 0)
    }
  }
}

/*function makeEnemiesMore() {
  var enemy = makeImage("images/enemy.jpg", 0, random(0,400), 30, 30, 1)
  enemies.push(enemy)
  setTimeout(makeEnemies, 600)
}
setTimeout(makeEnemies, 8000)

function drawEnemies() {
  for (var i = 0; i < enemies2.length; i++){
    move(enemies2[i], 4, 0)
    if (getX(enemies2[i]) < 0) {
      setX(enemies2[i], 800)
    }
  }
}*/

function fireMissile() {
  var rectangle = makeRect(getX(player) + 15, getY(player) + 15, 15, 10, "blue", 1)
  missiles.push(rectangle)
}

document.addEventListener("click", fireMissile)

function drawMissiles() {
  for (var i = 0; i < missiles.length; i++){
    move(missiles[i], 5, 0)
  }
}

function checkCollisionsPlayerRight() {
   for(var i = 0; i < enemiesRight.length; i++){
       if(collide(player, enemiesRight[i]) == true){
       removeElement(player)
       removeArrayElement(enemiesRight, i)
       gameOver = true
       }
   }
}

drawEverything()
makeEnemiesRight()
makeEnemiesLeft()
fireMissile()
