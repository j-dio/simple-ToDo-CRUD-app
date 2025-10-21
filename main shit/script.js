const addHobbyButton = document.querySelector('#add-btn')
const hobbiesList = document.querySelector('.hobbies-list')
const formPlacementRef = document.querySelector('.add-to-list-cont')

addHobbyButton.addEventListener('click', () => {
  if (document.querySelector('.add-hobby-form')) return

  const form = document.createElement('form')
  form.classList.add('add-hobby-form')

  const emojiLabel = document.createElement('label')
  emojiLabel.textContent = 'Emoji: '
  const emojiInput = document.createElement('input')
  emojiInput.type = 'text'
  emojiInput.name = 'emoji'
  emojiInput.maxLength = 2 // to keep it simple

  const hobbyLabel = document.createElement('label')
  hobbyLabel.textContent = 'Hobby:'
  const hobbyInput = document.createElement('input')
  hobbyInput.type = 'text'
  hobbyInput.name = 'new-hobby'

  const sumbitButton = document.createElement('button')
  sumbitButton.type = 'submit'
  sumbitButton.textContent = 'Add'

  form.appendChild(emojiLabel)
  form.appendChild(emojiInput)
  form.appendChild(hobbyLabel)
  form.appendChild(hobbyInput)
  form.appendChild(sumbitButton)

  formPlacementRef.insertAdjacentElement('afterend', form)

  form.addEventListener('submit', (event) => {
    event.preventDefault() // to stop page reload

    const emoji = emojiInput.value.trim()
    const hobby = hobbyInput.value.trim()

    if (emoji && hobby) {
      const li = document.createElement('li')
      li.textContent = `${emoji} ${hobby}`
      hobbiesList.appendChild(li)
      form.remove() // removes form after adding
    } else {
      alert('Please fill out both emoji and hobby!')
    }
  })
})

// Hamburger toggle behavior
const toggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.navigation-bar')

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})
