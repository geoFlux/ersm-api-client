"use strict";
var api = require('./ersm-api');
var tmp = new api.AppDataApi;
exports.ErsmApiFactory = function (fetch, basePath) {
    return {
        appData: new api.AppDataApi(fetch, basePath),
        contactPeople: new api.ContactPeopleApi(fetch, basePath),
        contactCategories: new api.ContactCategoriesApi(fetch, basePath),
        contactSubCategories: new api.ContactSubCategoriesApi(fetch, basePath),
    };
};
