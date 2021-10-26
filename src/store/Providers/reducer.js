import * as actionTypes from './actionTypes';

const initialState = {
    isLoading: false,
    selectedItem : '',
    providerMasterList:[],
    providerList:[]
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
            case actionTypes.GET_PROVIDERS_LIST : {
                return {
                    ...state,
                    isLoading: false,
                    providerMasterList : action.payload,
                    providerList : action.payload
                }
            }
            case actionTypes.GET_FILTER_PROVIDER_DATA : {
                let providerMasterList = [...state.providerMasterList];
                let selectedService = action.payload;
                let filteredData = providerMasterList.filter(row => {
                    const { subspecialties = [] } = row.attributes;
                    return subspecialties.includes(selectedService);
                });
                return {
                    ...state,
                    selectedItem:selectedService,
                    providerList : filteredData
                }
            }
            case actionTypes.RESET_FILTER : { 
                return {
                    ...state,
                    selectedItem : '',
                    providerList : [...state.providerMasterList]
                }
            }
            default: return state;
        }
    } catch (e) {
        console.log(e);
    }
}
export default reducer;