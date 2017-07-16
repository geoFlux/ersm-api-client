import * as api from './ersm-api';
export declare const ErsmApiFactory: (basePath?: string, fetch?: api.FetchAPI) => ErsmApiFactoryType;
export interface ErsmApiFactoryType {
    appData: api.AppDataApi;
    contactPeople: api.ContactPeopleApi;
    contactCategories: api.ContactCategoriesApi;
    contactSubCategories: api.ContactSubCategoriesApi;
    pdfCategories: api.PdfCategoriesApi;
    pdfs: api.PdfsApi;
    pdfScreens: api.PdfScreensApi;
    lpcs: api.LpcApi;
}
