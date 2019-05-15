import { call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from '../reducers/rootReducer';

const fetch = () => new Promise(res => {
  setTimeout(() => {
    const data = Array.from(Array(100).keys()).map(() => ({
      name: Math.random().toString(36).substr(2, 5),
      lastName: Math.random().toString(36).substr(2, 5),
      phone: `+ ${Math.random().toString().slice(2,11)}`,
    }));

    res(data);
  }, 1500);
})

function* fetchUser() {
   try {
      const data = yield call(fetch);
      console.log('data', data);
      yield put({ type: actionTypes.DATA.SUCCESS, data });
   } catch (e) {
      yield put({type: actionTypes.DATA.FAIL, message: e.message});
   }
}

function* mySaga() {
  yield takeEvery(actionTypes.DATA.REQUEST, fetchUser);
}

export default mySaga;