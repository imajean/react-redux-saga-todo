import { createSelector } from 'reselect';
import { getTodos } from 'containers/Todos/selectors';

const isCompleted = (todo) => todo.get('completed');

export default () => createSelector(
  getTodos,
  (todos) => {
    const completedTodos = todos.filter(isCompleted);
    const completedSize = completedTodos.size;
    return {
      leftCount: todos.size - completedSize,
      completedIds: completedTodos
        .map((todo) => todo.get('id'))
        .toSeq()
        .toArray(),
    };
  },
);
