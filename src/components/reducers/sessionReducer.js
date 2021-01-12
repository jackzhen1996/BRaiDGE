import {GET_FULLPAGE, 
        GET_LOCANDBASICINFO,
        GET_PREDICTION

} from '../actions/session_actions.js';

const sessionReducer = (state = {markerObject: 'no data', rows: null, prediction: null}, action) => {
    switch (action.type) {
        case GET_FULLPAGE:
            console.log(action.data);
            return {
                ...state,
                markerObject: action.data
            };
        
        case GET_LOCANDBASICINFO:
            return {
                ...state,
                rows: action.data
            };
        
        case GET_PREDICTION:
            return {
                ...state,
                prediction: action.data
            }
        default:
            return state;
    }
}

export default sessionReducer;