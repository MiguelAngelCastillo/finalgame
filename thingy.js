var mouse = {x: 0, y: 0}

var score = 0
var scoreText = makeText("Score: -", 660, 50, 25, "sans-serif", "white", 1)

gameOver = false

var player = makeImage("images/pixelcharacter.png", 30, 100, 30, 30, 1)
var enemy = makeImage("images/enemy.jpg", 30, 50, 30, 30, 1)

var enemies = []
var missiles = []

function drawPlayer() {
  setX(player, mouse.x)
  setY(player, mouse.y)
}
