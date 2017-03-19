import { takeEvery, put } from 'redux-saga/effects';
import { todoRemove, todoToggle, todoEdit } from 'containers/Todos/actions';
import { TODO_LIST_TOGGLE, TODO_LIST_REMOVE, TODO_LIST_EDIT } from './constants';

function* toggleTodo({ payload }) {
  yield put(todoToggle(payload));
}

function* removeTodo({ payload }) {
  yield put(todoRemove(payload));
}

function* editTodo({ payload }) {
  yield put(todoEdit(payload));
}

function* watchers() {
  yield takeEvery(TODO_LIST_TOGGLE, toggleTodo);
  yield takeEvery(TODO_LIST_REMOVE, removeTodo);
  yield takeEvery(TODO_LIST_EDIT, editTodo);
}

export default [
  watchers,
];
