"use strict";
var api = require('./ersm-api');
exports.ErsmApiFactory = function (basePath, fetch) {
    return {
        appData: new api.AppDataApi(fetch, basePath),
        contactPeople: new api.ContactPeopleApi(fetch, basePath),
        contactCategories: new api.ContactCategoriesApi(fetch, basePath),
        contactSubCategories: new api.ContactSubCategoriesApi(fetch, basePath),
        pdfCategories: new api.PdfCategoriesApi(fetch, basePath),
        pdfs: new api.PdfsApi(fetch, basePath),
        pdfScreens: new api.PdfScreensApi(fetch, basePath),
        lpcs: new api.LpcApi(fetch, basePath)
    };
};
