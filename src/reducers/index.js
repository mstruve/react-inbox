import { combineReducers } from 'redux';
import MessageReducer from './selected_message_reducer';
import PersonReducer from './selected_person_reducer';
import MessagesReducer from './all_messages_reducer';
import PersonsReducer from './all_persons_reducer';

const rootReducer = combineReducers({
    messageInfo: MessageReducer,
    personInfo: PersonReducer,
    allMessages: MessagesReducer,
    allPersons: PersonsReducer,
});

export default rootReducer;