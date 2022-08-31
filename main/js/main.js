var nodeTS = 0
var ntpc = 1
var ntps = 0
let costs = [25]

function add(i) {
  nodeTS += i
}

const buyUpgrade1 = () => {
  sub(Opk(0))
  ntps += 3
  Mulit(1.2, 0)
}

var sub = (value) => {
  nodeTS -= value
}

const Mulit = (value, arrayNumber) => {
  costs[arrayNumber] *= value
}

const Opk = (array) => costs[array]

document.body.style.userSelect = 'none'

// Interval

function update() {
  nodeTS += ntps
  document.getElementById("ts").innerText = nodeTS
  document.getElementById("upg1").innerText = Opk(0)
}

setInterval(update, 99)
