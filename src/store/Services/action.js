import * as actionTypes from './actionTypes';
import API from '../../API/API'
export const startRequest = () => {
    return {
        type: actionTypes.LOADING_DATA_START,
        payload: {}
    }
}

export const stopRequest = () => {
    return {
        type: actionTypes.LOADING_DATA_STOP,
        payload: {}
    }
}
export const GetAllServicesSuccess=(data)=>{
    console.log("data",data)
    return {
        type: actionTypes.GET_SERVICES_LIST,
        payload: data.data
    }
}

export const GetAllServices = () => {
    return async (dispatch) => {
        try {
            dispatch(startRequest());
            const response = await API.GetAllServices();
            if (response && response.data) {
                dispatch(GetAllServicesSuccess(response.data));
            } 
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(stopRequest());
        }
    }
}


