var nodeTS = 0
var ntpc = 1
var ntps = 0
let costs = [25]

function add(i) {
  nodeTS += i
}

const buyUpgrade1 = () => {
  sub(1)
  ntps += 3
  Mulit(1.2, 0)
}

var sub = (value) => {
  nodeTS -= value
}

const Mulit = (value, arrayNumber) => {
  costs[arrayNumber] *= value
}

document.body.style.userSelect = 'none'

function update() {
  nodeTS += ntps
  document.getElementById("ts").innerText = nodeTS
}

setInterval(update, 99)
