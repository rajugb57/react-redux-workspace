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
export const GetAllProvidersSuccess=(data)=>{
    console.log("data",data)
    return {
        type: actionTypes.GET_PROVIDERS_LIST,
        payload: data.data
    }
}

export const GetAllProviders = () => {
    return async (dispatch) => {
        try {
            dispatch(startRequest());
            const response = await API.GetAllProviders();
            if (response && response.data) {
                dispatch(GetAllProvidersSuccess(response.data));
            } 
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(stopRequest());
        }
    }
}

export const getServiceItemProviders =(name)=>{
    return {
        type: actionTypes.GET_FILTER_PROVIDER_DATA,
        payload: name
    }
}

export const resetFilterData =()=>{
    return {
        type: actionTypes.RESET_FILTER,
        payload: ''
    }
}
