import { FETCH_ALL_MESSAGES } from '../actions/actionTypes';


function MessagesReducer (state = {
    isLoading: false,
    data: [],
    error: false }
    , action = null) {
    switch(action.type) {
        case types.FETCH_ALL_MESSAGES:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: false});
        default:
            return state;
        }
    }
};


const rootReducer = combineReducers({
    messageInfo: MessageReducer,
    personInfo: PersonReducer,
    allMessages: MessagesReducer,
    allPersons: PersonsReducer,
});

export default rootReducer;