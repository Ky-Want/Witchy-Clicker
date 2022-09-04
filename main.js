// Plan:
/*
*Create tools that increase how much is earned when you click (must have at least 1 click upgrade)

*Also make upgrades for the workers (must be at least 4 upgrades)
-Display the quantity of each upgrade user has purchased

*Purchasing upgrades decreases current funds

*When an upgrade is purchased the price increases

*Each upgrade has different modifier values and prices
*/

const workers = [
  {
    name: 'Dave',
    level: 0,
    price: 10,
    income: 1
  },
  {
    name: 'Zed',
    level: 0,
    price: 30,
    income: 2
  },
  {
    name: 'Mary',
    level: 0,
    price: 50,
    income: 3
  }
]

let gold = 555



// function buyWorker(workerBuy) {
//   const worker = workers.find(w => w.name == workerBuy)
//   if (gold >= worker.price) {
//     gold -= worker.price
//   }
//   update()
// }


function levelDave() {
  const worker = workers.find(w => w.name == 'Dave')
  document.getElementById('DaveLevel').innerText = worker.level.toString()
  document.getElementById('daveLevelPrice').innerText = worker.price.toString()
  document.getElementById('daveIncome').innerText = worker.income.toString()

  if (worker.price <= gold) {
    gold -= worker.price
    worker.level++
    worker.price += 10
    worker.income++
  }
  update()
}
function levelZed() {
  const worker = workers.find(w => w.name == 'Zed')
  document.getElementById('ZedLevel').innerText = worker.level.toString()
  document.getElementById('zedLevelPrice').innerText = worker.price.toString()
  document.getElementById('zedIncome').innerText = worker.income.toString()

  if (gold > worker.price) {
    gold -= worker.price
    worker.level++
    worker.price += 20
    worker.income += 1
  }
  update()
}
function levelMary() {
  const worker = workers.find(w => w.name == 'Mary')
  document.getElementById('MaryLevel').innerText = worker.level.toString()
  document.getElementById('maryLevelPrice').innerHTML = worker.price.toString()
  document.getElementById('maryIncome').innerText = worker.income.toString()

  if (gold > worker.price) {
    gold -= worker.price
    worker.level++
    worker.price += 30
    worker.income += 1
  }
  update()
}





function hourglass() {
  const worker = workers.find(w => w.name == 'Dave')

  document.getElementById('autoCount')
  document.getElementById('autoUpgrade')
  document.getElementById('autoUpgrade2')

  if (2 >= worker.income) {

  }
  update()
}


function clicker() {
  const worker = workers.find(w => w.name == 'Dave')

  document.getElementById('clickCount').innerText
  document.getElementById('clickUpgrade').innerHTML
  document.getElementById('clickUpgrade2').innerText


  update()
}







function clickCauldron() {
  gold++
  update()
}



function update() {
  document.getElementById('totalGold').innerText = gold.toString()
}




levelDave()
levelMary()
levelZed()

