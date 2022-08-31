var nodeTS = 0
var ntpc = 1
var ntps = 0
let costs = []

function add(i) {
  nodeTS += i
}

document.body.style.userSelect = 'none'

function update() {
  nodeTS += ntps
  document.getElementById("ts").innerText = nodeTS
}

setInterval(update, 99)
