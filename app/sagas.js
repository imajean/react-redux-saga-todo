import todoFormSagas from 'containers/TodoForm/sagas';
import todoListSagas from 'containers/TodoList/sagas';
import todoFooterSagas from 'containers/TodoFooter/sagas';

export default [
  ...todoFormSagas,
  ...todoListSagas,
  ...todoFooterSagas,
];
