const factE1 = document.querySelector('#fact')
const btn = document.querySelector('#new-fact-btn')

async function loadFact() {
  factE1.textContent = 'Loading... 🐾'
  try {
    const res = await fetch('https://catfact.ninja/fact')
    const data = await res.json()
    factE1.textContent = data.fact
  } catch (err) {
    factE1.textContent = 'Oops! Failed to load a fact 😿'
  }
}

btn.addEventListener('click', loadFact)

loadFact()
