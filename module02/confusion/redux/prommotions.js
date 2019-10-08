import * as ActionTypes from './ActionTypes';
export const prommotions = (state = {
    isLoading: true,
    errMess: null,
    prommotions: []
    }, action) => {
        switch(action.type)
        {
            case ActionTypes.ADD_PROMOS:
                return {...state, isLoading: false, errMess: null, prommotions: action.payload};
            
            case ActionTypes.PROMOS_LOADING:
                        return {...state, isLoading: true, errMess:null, prommotions: []};
        
            case ActionTypes.PROMOS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, prommotions: []};
            
            default:
                return state;

            }

            
    }
