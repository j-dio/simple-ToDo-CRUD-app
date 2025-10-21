const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

// array to store all to-do items in memory/state
let todos = [];

form.addEventListener('submit', (e) => {
  // preventing default page reload
  e.preventDefault();

  // gets the text the user typed and remove extra spaced
  const text = input.value.trim();

  // if input is empty, don't do anything
  if (!text) return;

  // add a new to-do object to our array, each with a unique ID and text
  todos.push({ id: Date.now(), text });

  // clear input field after adding value
  input.value = '';

  // re-render list to show new item
  renderTodos();
});

function renderTodos() {
  // clear the list
  list.innerHTML = '';

  // loop through each to-do and create an <li> for it
  todos.forEach((todo) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todo.text; // show the task text

    const editBtn = document.createElement('button');
    editBtn.textContent = `✏️`;

    // create a delete btn for this item
    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';

    // edit functionality
    editBtn.addEventListener('click', () => {
      // create input for editing
      const input = document.createElement('input');
      input.type = 'text';
      input.value = todo.text;
      input.classList.add('edit-input');

      // replace span with input
      li.replaceChild(input, span);
      input.focus();

      // save changes when enter is pressed or input loses focus
      const saveEdit = () => {
        const newText = input.value.trim();
        if (newText) {
          todo.text = newText; // update text
        }
        renderTodos(); // re-render list to reflect changes
      };

      input.addEventListener('blur', saveEdit);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit();
      });
    });

    delBtn.classList.add('delete-btn');

    // when del btn is clicked, remove item from array
    delBtn.addEventListener('click', () => {
      // filter out deleted item based on its ID
      todos = todos.filter((t) => t.id !== todo.id);

      // re-render list after deleting
      renderTodos();
    });

    // add elements to li
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    // add list item to ul
    list.appendChild(li);
  });
}
