
import {takeEvery, all } from 'redux-saga/effects';
import * as home from './home';
import { types as homeTypes } from '@redux/home';

export default function* rootSaga() {
    yield all([
        takeEvery(homeTypes.GET_QUESTIONS, home.getQuestions),
    ])
}


