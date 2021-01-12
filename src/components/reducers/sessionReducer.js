const sessionReducer = (state = {markerObject: null, rows: null}, action) => {
    switch (action.type) {
        case "GET_FULLPAGE":
            console.log(action.data);
            return {markerObject: action.data};
        
        case "GET_LOCANDBASICINFO":
            console.log(action.data);
            return {rows: action.data};

        default:
            return state;
    }
}

export default sessionReducer;