import { takeEvery, put } from 'redux-saga/effects';
import { todoAdd } from 'containers/Todos/actions';
import { TODO_FORM_ENTER } from './constants';

function* createTodo({ payload }) {
  yield put(todoAdd(payload));
}

function* watchers() {
  yield takeEvery(TODO_FORM_ENTER, createTodo);
}

export default [
  watchers,
];
