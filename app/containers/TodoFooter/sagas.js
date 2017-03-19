import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { todoRemove } from 'containers/Todos/actions';
import { TODO_FOOTER_SET_FILTER, TODO_FOOTER_CLEAR_COMPLETED } from './constants';

function* setFilter({ payload: { route } }) {
  yield put(push(route));
}

function* clearCompleted({ payload: { ids } }) {
  yield put(todoRemove({ ids }));
}

function* watchers() {
  yield takeEvery(TODO_FOOTER_SET_FILTER, setFilter);
  yield takeEvery(TODO_FOOTER_CLEAR_COMPLETED, clearCompleted);
}

export default [
  watchers,
];
