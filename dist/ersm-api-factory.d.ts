import * as api from './ersm-api';
export declare const ErsmApiFactory: (basePath?: string, fetch?: api.FetchAPI) => {
    appData: api.AppDataApi;
    contactPeople: api.ContactPeopleApi;
    contactCategories: api.ContactCategoriesApi;
    contactSubCategories: api.ContactSubCategoriesApi;
};
