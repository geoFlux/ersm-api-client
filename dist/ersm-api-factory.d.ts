import * as api from './ersm-api';
export declare const ErsmApiFactory: (fetch?: api.FetchAPI, basePath?: string) => ErsmApi;
export interface ErsmApi {
    appData: api.AppDataApi;
    contactPeople: api.ContactPeopleApi;
    contactCategories: api.ContactCategoriesApi;
    contactSubCategories: api.ContactSubCategoriesApi;
}
