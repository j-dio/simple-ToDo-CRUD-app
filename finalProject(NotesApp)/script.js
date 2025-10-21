// state (array of note objects)
let notes = []

// DOM references
const form = document.querySelector('#note-form')
const titleInput = document.querySelector('#note-title')
const bodyInput = document.querySelector('#note-body')
const notesList = document.querySelector('#notes-list')

function renderNotes() {
  // clear container
  notesList.innerHTML = ''

  // if no notes, show a hint
  if (notes.length === 0) {
    notesList.innerHTML = '<p>No notes yet - add one above.</p>'
    return
  }

  // build note cards
  notes.forEach((note) => {
    const card = document.createElement('article')
    card.className = 'note-card'
    card.dataset.id = note.id

    card.innerHTML = `
      <h3 class="note-title">${escapeHtml(note.title)}</h3>
      <p class="note-body">${escapeHtml(note.body)}</p>
      <div class="note-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `

    notesList.appendChild(card)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const newNote = {
    id: Date.now(),
    title: titleInput.value.trim(),
    body: bodyInput.value.trim(),
    updateAt: Date.now(),
  }

  // Basic Validation
  if (!newNote.title && !newNote.body) return

  notes.unshift(newNote) // add to start so newest shows first
  form.reset() // clear inputs
  renderNotes()
  saveNotesToLocalStorage()
})

// rather than adding event listeners to every delete-btn, we use delegation on the container
form.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const card = e.target.closest('.note-card')
    const id = Number(card.dataset.id)
    notes = notes.filter((n) => n.id !== id) // removes our target note that we want to delete from state
    renderNotes()
    saveNotesToLocalStorage()
  }
})

// inline edit for notes when edit-btn is clicked
notesList.addEventListener('click', (e) => {
  // edit button clicked
  if (e.target.classList.contains('edit-btn')) {
    const card = e.target.closest('.note-card')
    const id = Number(card.dataset.id)
    const note = notes.find((n) => n.id === id)
    if (!note) return

    // replace display with inputs
    card.innerHTML = `
    <input class="edit-title" value="${escapeHtml(note.title)}">
    <textarea class="edit-body">${escapeHtml(note.body)}</textarea>
    <div class="note-actions">
      <button class="save-btn">Save</button>
      <button class="cancel-btn>Cancel</button>
    </div>
    `
  }
})
