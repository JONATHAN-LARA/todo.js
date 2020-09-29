import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(element => crearTodoHtml(element));


todoList.todos[0].imprimirClase();


console.log(todoList);