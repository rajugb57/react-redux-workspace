import HttpUtility from './HttpUtility';
const BASE_API_URL = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com';
const SERVICE = 'services';
const PROVIDER = 'providers';

export default class API {
    static GetAllServices = async (model) => {
        return HttpUtility.get(BASE_API_URL+'/'+SERVICE, model)
    }
    static GetAllProviders = async (model) => {
        return HttpUtility.get(BASE_API_URL+'/'+PROVIDER+'?include=locations,schedules.location&page[number]=1&page[size]=10', model)
    }
}
