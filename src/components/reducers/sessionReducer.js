import {GET_FULLPAGE, GET_LOCANDBASICINFO} from '../actions/session_actions.js';

const sessionReducer = (state = {markerObject: 'no data', rows: null}, action) => {
    switch (action.type) {
        case GET_FULLPAGE:
            console.log(action.data);
            return {
                ...state,
                markerObject: action.data
            };
        
        case GET_LOCANDBASICINFO:
            //console.log(action.data);
            return {
                ...state,
                rows: action.data
            };

        default:
            return state;
    }
}

export default sessionReducer;