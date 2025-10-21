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
