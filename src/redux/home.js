
export const types = {

    GET_QUESTIONS: 'get_item_by_barcode',
    GET_QUESTIONS_SUCCESS: 'get_item_by_barcode_success',
    GET_QUESTIONS_FAILURE: 'get_item_by_barcode_failure',

    UPDADATED_ANSWER: "SET_UPDATEDT_ANSWERS"
}

const INITIAL_STATE = { questions: [], error: "" };

export default function reducer(state = INITIAL_STATE, action = {}) {

    switch (action.type) {

        case types.GET_QUESTIONS_SUCCESS:
            return { ...state, questions: action.payload.results };
            break;

        case types.GET_QUESTIONS_FAILURE:
            return { ...state, error: action.payload };
            break;

        case types.UPDADATED_ANSWER:
            return { ...state, questions: action.payload };
            break;

        default:
            return state;
            break;
    }
};

export const actions = {
    getQuestions: () => ({ type: types.GET_QUESTIONS }),
    updateAnswer: (array) => ({ type: types.UPDADATED_ANSWER, payload: array }),
}
