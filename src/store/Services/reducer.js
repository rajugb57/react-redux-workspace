import * as actionTypes from './actionTypes';

const initialState = {
    isLoading: false,
    servicesList:[]
}
const reducer = (state = initialState, action = null) => {
    try {
        switch (action.type) {
            case actionTypes.LOADING_DATA_START: {
                return {
                    ...state,
                    isLoading: true
                }
            }
            case actionTypes.LOADING_DATA_STOP: {
                return {
                    ...state,
                    isLoading: false
                }
            }
            case actionTypes.GET_SERVICES_LIST : {
                return {
                    ...state,
                    isLoading: false,
                    servicesList : action.payload
                }
            }
            default: return state;
        }
    } catch (e) {
        console.log(e);
    }
}
export default reducer;