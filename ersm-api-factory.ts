import * as api from './ersm-api'




export const ErsmApiFactory = (basePath?: string, fetch?: api.FetchAPI): ErsmApiFactoryType => {
    return {
        appData: new api.AppDataApi(fetch, basePath),
        contactPeople: new api.ContactPeopleApi(fetch, basePath),
        contactCategories: new api.ContactCategoriesApi(fetch, basePath),
        contactSubCategories: new api.ContactSubCategoriesApi(fetch, basePath),
        pdfCategories: new api.PdfCategoriesApi(fetch,basePath),
        pdfs: new api.PdfsApi(fetch, basePath),
        pdfScreens: new api.PdfScreensApi(fetch, basePath),
        lpcs: new api.LpcApi(fetch, basePath)
    }
}

export interface ErsmApiFactoryType{
    appData: api.AppDataApi,
    contactPeople: api.ContactPeopleApi,
    contactCategories: api.ContactCategoriesApi,
    contactSubCategories: api.ContactSubCategoriesApi,
    pdfCategories: api.PdfCategoriesApi,
    pdfs: api.PdfsApi,
    pdfScreens: api.PdfScreensApi,
    lpcs: api.LpcApi
}