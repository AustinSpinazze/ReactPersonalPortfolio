import { INITIAL_LOAD } from './home.types';

const INITIAL_STATE = {
    firstLoad: true
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INITIAL_LOAD:
            return {
                ...state, 
                firstLoad: false
            };
        default: return state;
    }
};

export default reducer;