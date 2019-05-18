

import { put, call } from 'redux-saga/effects';
import { types as homeTypes } from "../redux/home"
import { Constants } from '@common';
import { appSaga } from "./app";

export function* getQuestions(action) {

    var data;
    const requestData = {
        URL: Constants.ApiConstants.BASE_URL + Constants.ApiConstants.GET_QUESTIONS,
        requestType: 'get',
    };

    data = yield call(appSaga, requestData);
    let { error } = data;
    if (!error) {
        yield put({
            type: homeTypes.GET_QUESTIONS_SUCCESS,
            payload: data.data,
        });

    } else {

        yield put({
            type: homeTypes.GET_QUESTIONS_FAILURE,
            payload: "error",
        });
    }

}
