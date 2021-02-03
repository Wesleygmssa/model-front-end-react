import { all } from 'redux-saga/effects';
import exemple from './example/sagas';

export default function* rooSaga() {
  return yield all([exemple]);
}
