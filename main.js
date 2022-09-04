const workers = [
  {
    name: 'Dave',
    level: 0,
    price: 10,
    income: 0
  },
  {
    name: 'Zed',
    level: 0,
    price: 20,
    income: 0
  },
  {
    name: 'Mary',
    level: 0,
    price: 30,
    income: 0
  }
]

let gold = 10000
let clickCount = 1
let autoCount = 0

let autoUpgradePrice1 = 200
let autoUpgradePrice2 = 500

let autoUpgrade1 = 200
let autoUpgrade2 = 500

let clickUpgrade1 = 50
let clickUpgrade2 = 100



function levelDave() {
  const worker = workers.find(w => w.name == 'Dave')

  if (worker.price <= gold) {
    gold -= worker.price
    worker.level++
    worker.price += 10
    worker.income++
    autoCount++
  }
  update()
}

function levelZed() {
  const worker = workers.find(w => w.name == 'Zed')

  if (gold > worker.price) {
    gold -= worker.price
    worker.level++
    worker.price += 20
    worker.income += 2
    autoCount += 2
  }
  update()
}

function levelMary() {
  const worker = workers.find(w => w.name == 'Mary')

  if (gold > worker.price) {
    gold -= worker.price
    worker.level++
    worker.price += 30
    worker.income += 3
    autoCount += 3
  }
  update()
}





function clickerUpgrade() {
  if (clickUpgrade1 <= gold) {
    gold -= clickUpgrade1
    clickUpgrade1++
    clickCount++
  }
  update()
}

function clickerUpgrade2() {
  if (clickUpgrade2 <= gold) {
    gold -= clickUpgrade2
    clickUpgrade2++
    clickCount *= 2
  }
  update()
}




function automaticUpgrade1() {
  if (autoUpgrade1 <= gold) {
    gold -= autoUpgrade1
    autoUpgrade1++
    autoCount++
    autoUpgradePrice1++
  }
  update()
}

function automaticUpgrade2() {
  if (autoUpgrade2 <= gold) {
    gold -= autoUpgrade2
    autoUpgrade2++
    autoCount *= 2
    autoUpgradePrice2++
  }
  update()
}





function clickCauldron() {
  gold += clickCount
  update()
}


function update() {
  const dave = workers.find(w => w.name == 'Dave')
  const zed = workers.find(w => w.name == 'Zed')
  const mary = workers.find(w => w.name == 'Mary')

  document.getElementById('totalGold').innerHTML = gold.toString()
  document.getElementById('autoUpgradePrice1').innerHTML = autoUpgradePrice1.toString()
  document.getElementById('autoUpgradePrice2').innerHTML = autoUpgradePrice2.toString()

  document.getElementById('DaveLevel').innerText = dave.level.toString()
  document.getElementById('daveLevelPrice').innerText = dave.price.toString()
  document.getElementById('daveIncome').innerText = dave.income.toString()

  document.getElementById('ZedLevel').innerText = zed.level.toString()
  document.getElementById('zedLevelPrice').innerText = zed.price.toString()
  document.getElementById('zedIncome').innerText = zed.income.toString()

  document.getElementById('MaryLevel').innerText = mary.level.toString()
  document.getElementById('maryLevelPrice').innerHTML = mary.price.toString()
  document.getElementById('maryIncome').innerText = mary.income.toString()

  document.getElementById('autoCount').innerHTML = autoCount.toString()
  document.getElementById('clickCount').innerHTML = clickCount.toString()
  document.getElementById('clickerUpgrade2').innerHTML = clickUpgrade2.toString()
  document.getElementById('clickerUpgrade1').innerHTML = clickUpgrade1.toString()
}



