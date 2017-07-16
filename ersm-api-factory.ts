import * as api from './ersm-api'




export const ErsmApiFactory = (basePath?: string, fetch?: api.FetchAPI): ErsmApi => {
    return {
        appData: new api.AppDataApi(fetch, basePath),
        contactPeople: new api.ContactPeopleApi(fetch, basePath),
        contactCategories: new api.ContactCategoriesApi(fetch, basePath),
        contactSubCategories: new api.ContactSubCategoriesApi(fetch, basePath),
    }
}

export interface ErsmApi{
    appData: api.AppDataApi,
    contactPeople: api.ContactPeopleApi,
    contactCategories: api.ContactCategoriesApi,
    contactSubCategories: api.ContactSubCategoriesApi
}