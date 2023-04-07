/* exported todos */

let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');

todos = JSON.parse(previousTodosJSON);

window.addEventListener('beforeunload', (e) => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
