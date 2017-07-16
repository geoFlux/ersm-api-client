"use strict";
var api = require('./ersm-api');
exports.ErsmApiFactory = function (basePath, fetch) {
    return {
        appData: new api.AppDataApi(fetch, basePath),
        contactPeople: new api.ContactPeopleApi(fetch, basePath),
        contactCategories: new api.ContactCategoriesApi(fetch, basePath),
        contactSubCategories: new api.ContactSubCategoriesApi(fetch, basePath),
    };
};
// export interface ErsmApi{
//     appData: api.AppDataApi,
//     contactPeople: api.ContactPeopleApi,
//     contactCategories: api.ContactCategoriesApi,
//     contactSubCategories: api.ContactSubCategoriesApi
// } 
