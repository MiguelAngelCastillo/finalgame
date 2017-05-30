var mouse = {x: 0, y: 0}

var score = 0
var scoreText = makeText("Score: -", 660, 50, 25, "sans-serif", "black", 1)

gameOver = false

var player = makeImage("images/pixelcharacter.png", 30, 100, 30, 30, 1)
/*var enemyRight = makeImage("images/enemy.jpg", 750, random(0,400), 30, 30, 1)
var enemyLeft = makeImage("images/enemy.jpg", 0, random(0, 400), 30, 30, 1)*/

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

/*Collision logic for the missiles to enemy contact*/

function checkCollisionsMissilesRight() {
for (var i = 0; i < missilesRight.length; i++) {
  for (var j = 0; j < enemiesRight.length; j++) {
    if (missilesRight[i] != undefined && enemiesRight[j] != undefined) {
      if (collide(missilesRight[i], enemiesRight[j], 0, -20) == true) {
          drawExplosion(getX(enemiesRight[j]), getY(enemiesRight[j]))
          removeArrayElement(enemiesRight, j)
          removeArrayElement(missilesRight, i)
          console.log("same")
          score = score + 1
          scoreText.innerHTML = "Score: " + score
          }
        }
    }
  }
}

function checkCollisionsMissilesLeft() {
for (var i = 0; i < missilesLeft.length; i++) {
  for (var j = 0; j < enemiesLeft.length; j++) {
    if (missilesLeft[i] != undefined && enemiesLeft[j] != undefined) {
      if (collide(missilesLeft[i], enemiesLeft[j], 0, -20) == true) {
          drawExplosion(getX(enemiesLeft[j]), getY(enemiesLeft[j]))
          removeArrayElement(enemiesLeft, j)
          removeArrayElement(missilesLeft, i)
          console.log("same")
          score = score + 1
          scoreText.innerHTML = "Score: " + score
          }
        }
    }
  }
}
/*For the right enemy*/
function checkCollisionsMissilesUpRight() {
for (var i = 0; i < missilesUp.length; i++) {
  for (var j = 0; j < enemiesRight.length; j++) {
    if (missilesUp[i] != undefined && enemiesRight[j] != undefined) {
      if (collide(missilesUp[i], enemiesRight[j], 0, -20) == true) {
          drawExplosion(getX(enemiesRight[j]), getY(enemiesRight[j]))
          removeArrayElement(enemiesRight, j)
          removeArrayElement(missilesUp, i)
          console.log("same")
          score = score + 1
          scoreText.innerHTML = "Score: " + score
          }
        }
    }
  }
}
/*For the left enemy*/
function checkCollisionsMissilesUpLeft() {
for (var i = 0; i < missilesUp.length; i++) {
  for (var j = 0; j < enemiesLeft.length; j++) {
    if (missilesUp[i] != undefined && enemiesLeft[j] != undefined) {
      if (collide(missilesUp[i], enemiesLeft[j], 0, -20) == true) {
          drawExplosion(getX(enemiesLeft[j]), getY(enemiesLeft[j]))
          removeArrayElement(enemiesLeft, j)
          removeArrayElement(missilesUp, i)
          console.log("same")
          score = score + 1
          scoreText.innerHTML = "Score: " + score
          }
        }
    }
  }
}
/*For the right enemy*/
function checkCollisionsMissilesDownRight() {
for (var i = 0; i < missilesDown.length; i++) {
  for (var j = 0; j < enemiesRight.length; j++) {
    if (missilesDown[i] != undefined && enemiesRight[j] != undefined) {
      if (collide(missilesDown[i], enemiesRight[j], 0, -20) == true) {
          drawExplosion(getX(enemiesRight[j]), getY(enemiesRight[j]))
          removeArrayElement(enemiesRight, j)
          removeArrayElement(missilesDown, i)
          console.log("same")
          score = score + 1
          scoreText.innerHTML = "Score: " + score
          }
        }
    }
  }
}
/*For the left enemy*/
function checkCollisionsMissilesDownLeft() {
for (var i = 0; i < missilesDown.length; i++) {
  for (var j = 0; j < enemiesLeft.length; j++) {
    if (missilesDown[i] != undefined && enemiesLeft[j] != undefined) {
      if (collide(missilesDown[i], enemiesLeft[j], 0, -20) == true) {
          drawExplosion(getX(enemiesLeft[j]), getY(enemiesLeft[j]))
          removeArrayElement(enemiesLeft, j)
          removeArrayElement(missilesDown, i)
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
var missilesRight = []
var missilesLeft = []
var missilesUp = []
var missilesDown = []
var enemyMissilesRight = []


function drawPlayer() {
  setX(player, mouse.x)
  setY(player, mouse.y)
}

function drawEverything() {
  drawPlayer()
  drawEnemiesRight()
  drawEnemiesLeft()
  drawMissilesRight()
  drawMissilesLeft()
  drawMissilesUp()
  drawMissilesDown()
  checkCollisionsPlayerRight()
  checkCollisionsPlayerLeft()
  checkCollisionsMissilesRight()
  checkCollisionsMissilesLeft()
  checkCollisionsMissilesUpLeft()
  checkCollisionsMissilesUpRight()
  checkCollisionsMissilesDownRight()
  checkCollisionsMissilesDownLeft()

  if (gameOver == false) {
    requestAnimationFrame(drawEverything)
  }
}

/*Lines that generate the enemies*/

function makeEnemiesRight() {
  var enemyRight = makeImage("images/enemy.jpg", 750, random(0,400), 30, 30, 1)
  enemiesRight.push(enemyRight)
  setTimeout(makeEnemiesRight, 600)
}
setTimeout(makeEnemiesRight, 8000)

function drawEnemiesRight() {
  for (var i = 0; i < enemiesRight.length; i++){
    move(enemiesRight[i], -3, 0)
    if (getX(enemiesRight[i]) < 0) {
      setX(enemiesRight[i], 800)
    }
  }
}

function makeEnemiesLeft() {
  if(gameOver == false){
  var enemyLeft = makeImage("images/enemy.jpg", 0, random(0, 400), 30, 30, 1)
  enemiesLeft.push(enemyLeft)
    setTimeout(makeEnemiesLeft, 600)
}
}
setTimeout(makeEnemiesLeft, 8000)

function drawEnemiesLeft() {
  for (var i = 0; i < enemiesLeft.length; i++){
    move(enemiesLeft[i], 3, 0)
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

/* Lines of code that generate missiles*/

function fireMissileRight() {
  var rectangleRight = makeRect(getX(player) + 15, getY(player) + 15, 15, 10, "blue", 1)
  missilesRight.push(rectangleRight)
}

document.addEventListener("click", fireMissileRight)

function drawMissilesRight() {
  for (var i = 0; i < missilesRight.length; i++){
    move(missilesRight[i], 5, 0)
  }
}

function fireMissileLeft() {
  var rectangleLeft = makeRect(getX(player) + 15, getY(player) + 15, 15, 10, "blue", 1)
  missilesLeft.push(rectangleLeft)
}

document.addEventListener("click", fireMissileLeft)

function drawMissilesLeft() {
  for (var i = 0; i < missilesLeft.length; i++){
    move(missilesLeft[i], -5, 0)
  }
}

function fireMissileUp() {
  var rectangleUp = makeRect(getX(player) + 15, getY(player) + 15, 10, 15, "blue", 1)
  missilesUp.push(rectangleUp)
}

document.addEventListener("click", fireMissileUp)

function drawMissilesUp() {
  for (var i = 0; i < missilesUp.length; i++){
    move(missilesUp[i], 0, - 5)
  }
}

function fireMissileDown() {
  var rectangleDown = makeRect(getX(player) + 15, getY(player) + 15, 10, 15, "blue", 1)
  missilesDown.push(rectangleDown)
}

document.addEventListener("click", fireMissileDown)

function drawMissilesDown() {
  for (var i = 0; i < missilesDown.length; i++){
    move(missilesDown[i], 0, 5)
  }
}
/*Enemy fires*/
/*function enemyRightMissiles() {
  var rectangleEnemyRight = makeRect(getX(enemyRight) + 15, getY(enemyRight) + 15, 15, 10, "red", 1)
  enemyMissilesRight.push(rectangleEnemyRight)
}

function enemyRightDraw() {
  for (var i = 0; i < enemyMissilesRight.length; i++) {
    move(enemyMissilesRight[i], 0, -5)
  }
}
setTimeout(enemyRightDraw, 1000)*/

/*Player collision code*/
function checkCollisionsPlayerRight() {
   for(var i = 0; i < enemiesRight.length; i++){
       if(collide(player, enemiesRight[i]) == true){
       removeElement(player)
       removeArrayElement(enemiesRight, i)
       gameOver = true
       }
   }
}

function checkCollisionsPlayerLeft() {
   for(var i = 0; i < enemiesLeft.length; i++){
       if(collide(player, enemiesLeft[i]) == true){
       removeElement(player)
       removeArrayElement(enemiesLeft, i)
       gameOver = true
       }
   }
}

drawEverything()
makeEnemiesRight()
makeEnemiesLeft()
fireMissileRight()
fireMissileLeft()
fireMissileUp()
fireMissileDown()
