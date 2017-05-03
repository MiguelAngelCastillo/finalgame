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

function checkCollisionsMissiles() {
for (var i = 0; i < missiles.length; i++) {
  for (var j = 0; j < enemies.length; j++) {
    if (missiles[i] != undefined && enemies[j] != undefined) {
      if (collide(missiles[i], enemies[j], 0, -20) == true) {
          drawExplosion(getX(enemies[j]), getY(enemies[j]))
          removeArrayElement(enemies, j)
          removeArrayElement(missiles, i)
          console.log("same")
          score = score + 1
          scoreText.innerHTML = "Score: " + score
                       }
                   }
               }
           }
       }


var enemiesLeft = []
/*var enemiesRight = []*/
var missiles = []

function drawPlayer() {
  setX(player, mouse.x)
  setY(player, mouse.y)
}

function drawEverything() {
  drawPlayer()
  drawEnemies()
  drawMissiles()
  checkCollisionsPlayer()
  checkCollisionsMissiles()

  if (gameOver == false) {
    requestAnimationFrame(drawEverything)
  }
}

function makeEnemies() {
  var enemy = makeImage("images/enemy.jpg", 750, random(0,400), 30, 30, 1)
  enemies.push(enemy)
  setTimeout(makeEnemies, 600)
}
setTimeout(makeEnemies, 8000)

function drawEnemies() {
  for (var i = 0; i < enemies.length; i++){
    move(enemies[i], -4, 0)
    if (getX(enemies[i]) < 0) {
      setX(enemies[i], 800)
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

function checkCollisionsPlayer() {
   for(var i = 0; i < enemies.length; i++){
       if(collide(player, enemies[i]) == true){
       removeElement(player)
       removeArrayElement(enemies, i)
       gameOver = true
       }
   }
}

drawEverything()
makeEnemies()
/*makeEnemiesMore()*/
fireMissile()
