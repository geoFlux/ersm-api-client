export interface FetchAPI {
    (url: string, init?: any): Promise<any>;
}
export interface FetchArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    constructor(fetch?: FetchAPI, basePath?: string);
}
export interface ActionResultsCategoryResult {
    "upsert"?: Array<InlineResponse200PdfCategoriesUpsert>;
    "delete"?: Array<string>;
}
export interface ActionResultsContactCategoryMapResult {
    "upsert"?: Array<InlineResponse200ContactCategoryToSubCategoryMapUpsert>;
    "delete"?: Array<string>;
}
export interface ActionResultsContactCategoryResult {
    "upsert"?: Array<InlineResponse200ContactSubCategoriesUpsert>;
    "delete"?: Array<string>;
}
export interface ActionResultsContactPeopleMapResult {
    "upsert"?: Array<InlineResponse200ContactPeopleMapUpsert>;
    "delete"?: Array<string>;
}
export interface ActionResultsContactPeopleResultNoPicture {
    "upsert"?: Array<InlineResponse200ContactPeopleUpsert>;
    "delete"?: Array<string>;
}
export interface ActionResultsContactTypesResult {
    "upsert"?: Array<InlineResponse200PdfCategoriesUpsert>;
    "delete"?: Array<string>;
}
export interface ActionResultsGuid {
    "upsert"?: Array<string>;
    "delete"?: Array<string>;
}
export interface ActionResultsLpcResultNoPhotoOrIcon {
    "upsert"?: Array<InlineResponse200LpcUpsert>;
    "delete"?: Array<string>;
}
export interface ActionResultsPdfMetaDataResult {
    "upsert"?: Array<InlineResponse200PdfsUpsert>;
    "delete"?: Array<string>;
}
export interface AppDataResults {
    "dataVersion"?: string;
    "pdfCategories"?: InlineResponse200PdfCategories;
    "pdfs"?: InlineResponse200Pdfs;
    "contactPeople"?: InlineResponse200ContactPeople;
    "contactCategories"?: InlineResponse200PdfCategories;
    "contactSubCategories"?: InlineResponse200ContactSubCategories;
    "contactCategoryToSubCategoryMap"?: InlineResponse200ContactCategoryToSubCategoryMap;
    "contactPeopleMap"?: InlineResponse200ContactPeopleMap;
    "contactPictures"?: InlineResponse200ContactPictures;
    "lpc"?: InlineResponse200Lpc;
    "lpcPhotos"?: InlineResponse200ContactPictures;
    "lpcIcons"?: InlineResponse200ContactPictures;
}
export interface CategoryResult {
    "id"?: string;
    "label"?: string;
}
export interface ContactCategoryMapResult {
    "id"?: string;
    "categoryId"?: string;
    "subCategoryId"?: string;
}
export interface ContactCategoryResult {
    "id"?: string;
    "label"?: string;
    "orderBy"?: number;
}
export interface ContactPeopleMapResult {
    "id"?: string;
    "categoryMapId"?: string;
    "personId"?: string;
}
export interface ContactPeopleResult {
    "id"?: string;
    "region"?: string;
    "firstName"?: string;
    "lastName"?: string;
    "phone"?: string;
    "cell"?: string;
    "email"?: string;
    "hasPicture"?: boolean;
}
export interface ContactPeopleResultNoPicture {
    "id"?: string;
    "region"?: string;
    "firstName"?: string;
    "lastName"?: string;
    "phone"?: string;
    "cell"?: string;
    "email"?: string;
}
export interface ContactPersonCategoryResult {
    "categoryId"?: string;
    "categoryLabel"?: string;
    "subCategoryId"?: string;
    "subCategoryLabel"?: string;
}
export interface ContactSubCategoryResult {
    "id"?: string;
    "label"?: string;
    "orderBy"?: number;
}
export interface ContactTypesResult {
    "id"?: string;
    "label"?: string;
}
export interface InlineResponse200 {
    "dataVersion"?: string;
    "pdfCategories"?: InlineResponse200PdfCategories;
    "pdfs"?: InlineResponse200Pdfs;
    "contactPeople"?: InlineResponse200ContactPeople;
    "contactCategories"?: InlineResponse200PdfCategories;
    "contactSubCategories"?: InlineResponse200ContactSubCategories;
    "contactCategoryToSubCategoryMap"?: InlineResponse200ContactCategoryToSubCategoryMap;
    "contactPeopleMap"?: InlineResponse200ContactPeopleMap;
    "contactPictures"?: InlineResponse200ContactPictures;
    "lpc"?: InlineResponse200Lpc;
    "lpcPhotos"?: InlineResponse200ContactPictures;
    "lpcIcons"?: InlineResponse200ContactPictures;
}
export interface InlineResponse2001 {
    "id"?: string;
    "region"?: string;
    "firstName"?: string;
    "lastName"?: string;
    "phone"?: string;
    "cell"?: string;
    "email"?: string;
    "hasPicture"?: boolean;
}
export interface InlineResponse2002 {
    "categoryId"?: string;
    "categoryLabel"?: string;
    "subCategoryId"?: string;
    "subCategoryLabel"?: string;
}
export interface InlineResponse2003 {
    "id"?: string;
    "name"?: string;
    "address1"?: string;
    "city1"?: string;
    "state1"?: string;
    "zip1"?: string;
    "address2"?: string;
    "city2"?: string;
    "state2"?: string;
    "zip2"?: string;
    "web"?: string;
    "phone"?: string;
    "fax"?: string;
    "totalElectricCustomers"?: number;
    "residentialCustomers"?: number;
    "ciCustomersLessThan50kw"?: number;
    "ciCustomers51To4999Kw"?: number;
    "ciCustomersGreaterThan5000kw"?: number;
    "totalNaturalGasCustomers"?: number;
    "totalWaterCustomers"?: number;
    "totalWastewaterCustomers"?: number;
    "totalSystemAssets"?: number;
    "taxes"?: number;
    "milesOfLine"?: number;
    "customersPerMile"?: number;
    "avgResidentialUseInKwhPerMonth"?: number;
    "deliveryPoints"?: number;
    "avgLoadFactor"?: number;
    "hasPhoto"?: boolean;
    "hasIcon"?: boolean;
}
export interface InlineResponse200ContactCategoryToSubCategoryMap {
    "upsert"?: Array<InlineResponse200ContactCategoryToSubCategoryMapUpsert>;
    "delete"?: Array<string>;
}
export interface InlineResponse200ContactCategoryToSubCategoryMapUpsert {
    "id"?: string;
    "categoryId"?: string;
    "subCategoryId"?: string;
}
export interface InlineResponse200ContactPeople {
    "upsert"?: Array<InlineResponse200ContactPeopleUpsert>;
    "delete"?: Array<string>;
}
export interface InlineResponse200ContactPeopleMap {
    "upsert"?: Array<InlineResponse200ContactPeopleMapUpsert>;
    "delete"?: Array<string>;
}
export interface InlineResponse200ContactPeopleMapUpsert {
    "id"?: string;
    "categoryMapId"?: string;
    "personId"?: string;
}
export interface InlineResponse200ContactPeopleUpsert {
    "id"?: string;
    "region"?: string;
    "firstName"?: string;
    "lastName"?: string;
    "phone"?: string;
    "cell"?: string;
    "email"?: string;
}
export interface InlineResponse200ContactPictures {
    "upsert"?: Array<string>;
    "delete"?: Array<string>;
}
export interface InlineResponse200ContactSubCategories {
    "upsert"?: Array<InlineResponse200ContactSubCategoriesUpsert>;
    "delete"?: Array<string>;
}
export interface InlineResponse200ContactSubCategoriesUpsert {
    "id"?: string;
    "label"?: string;
    "orderBy"?: number;
}
export interface InlineResponse200Lpc {
    "upsert"?: Array<InlineResponse200LpcUpsert>;
    "delete"?: Array<string>;
}
export interface InlineResponse200LpcUpsert {
    "hasPhoto"?: boolean;
    "hasIcon"?: boolean;
    "id"?: string;
    "name"?: string;
    "address1"?: string;
    "city1"?: string;
    "state1"?: string;
    "zip1"?: string;
    "address2"?: string;
    "city2"?: string;
    "state2"?: string;
    "zip2"?: string;
    "web"?: string;
    "phone"?: string;
    "fax"?: string;
    "totalElectricCustomers"?: number;
    "residentialCustomers"?: number;
    "ciCustomersLessThan50kw"?: number;
    "ciCustomers51To4999Kw"?: number;
    "ciCustomersGreaterThan5000kw"?: number;
    "totalNaturalGasCustomers"?: number;
    "totalWaterCustomers"?: number;
    "totalWastewaterCustomers"?: number;
    "totalSystemAssets"?: number;
    "taxes"?: number;
    "milesOfLine"?: number;
    "customersPerMile"?: number;
    "avgResidentialUseInKwhPerMonth"?: number;
    "deliveryPoints"?: number;
    "avgLoadFactor"?: number;
}
export interface InlineResponse200PdfCategories {
    "upsert"?: Array<InlineResponse200PdfCategoriesUpsert>;
    "delete"?: Array<string>;
}
export interface InlineResponse200PdfCategoriesUpsert {
    "id"?: string;
    "label"?: string;
}
export interface InlineResponse200Pdfs {
    "upsert"?: Array<InlineResponse200PdfsUpsert>;
    "delete"?: Array<string>;
}
export interface InlineResponse200PdfsUpsert {
    "id"?: string;
    "screen"?: string;
    "categoryId"?: string;
    "label"?: string;
    "text"?: string;
}
export interface LpcResult {
    "id"?: string;
    "name"?: string;
    "address1"?: string;
    "city1"?: string;
    "state1"?: string;
    "zip1"?: string;
    "address2"?: string;
    "city2"?: string;
    "state2"?: string;
    "zip2"?: string;
    "web"?: string;
    "phone"?: string;
    "fax"?: string;
    "totalElectricCustomers"?: number;
    "residentialCustomers"?: number;
    "ciCustomersLessThan50kw"?: number;
    "ciCustomers51To4999Kw"?: number;
    "ciCustomersGreaterThan5000kw"?: number;
    "totalNaturalGasCustomers"?: number;
    "totalWaterCustomers"?: number;
    "totalWastewaterCustomers"?: number;
    "totalSystemAssets"?: number;
    "taxes"?: number;
    "milesOfLine"?: number;
    "customersPerMile"?: number;
    "avgResidentialUseInKwhPerMonth"?: number;
    "deliveryPoints"?: number;
    "avgLoadFactor"?: number;
    "hasPhoto"?: boolean;
    "hasIcon"?: boolean;
}
export interface LpcResultNoPhotoOrIcon {
    "hasPhoto"?: boolean;
    "hasIcon"?: boolean;
    "id"?: string;
    "name"?: string;
    "address1"?: string;
    "city1"?: string;
    "state1"?: string;
    "zip1"?: string;
    "address2"?: string;
    "city2"?: string;
    "state2"?: string;
    "zip2"?: string;
    "web"?: string;
    "phone"?: string;
    "fax"?: string;
    "totalElectricCustomers"?: number;
    "residentialCustomers"?: number;
    "ciCustomersLessThan50kw"?: number;
    "ciCustomers51To4999Kw"?: number;
    "ciCustomersGreaterThan5000kw"?: number;
    "totalNaturalGasCustomers"?: number;
    "totalWaterCustomers"?: number;
    "totalWastewaterCustomers"?: number;
    "totalSystemAssets"?: number;
    "taxes"?: number;
    "milesOfLine"?: number;
    "customersPerMile"?: number;
    "avgResidentialUseInKwhPerMonth"?: number;
    "deliveryPoints"?: number;
    "avgLoadFactor"?: number;
}
export interface PdfMetaDataResult {
    "id"?: string;
    "screen"?: string;
    "categoryId"?: string;
    "label"?: string;
    "text"?: string;
}
/**
 * AppDataApi - fetch parameter creator
 */
export declare const AppDataApiFetchParamCreator: {
    apiAppDataGet(params: {
        "dataVersion"?: string;
        "forceLpcData"?: boolean;
    }, options?: any): FetchArgs;
};
/**
 * AppDataApi - functional programming interface
 */
export declare const AppDataApiFp: {
    apiAppDataGet(params: {
        "dataVersion"?: string;
        "forceLpcData"?: boolean;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200>;
};
/**
 * AppDataApi - object-oriented interface
 */
export declare class AppDataApi extends BaseAPI {
    /**
     * @param dataVersion
     * @param forceLpcData
     */
    apiAppDataGet(params: {
        "dataVersion"?: string;
        "forceLpcData"?: boolean;
    }, options?: any): Promise<InlineResponse200>;
}
/**
 * AppDataApi - factory interface
 */
export declare const AppDataApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiAppDataGet(params: {
        "dataVersion"?: string;
        "forceLpcData"?: boolean;
    }, options?: any): Promise<InlineResponse200>;
};
/**
 * ContactCategoriesApi - fetch parameter creator
 */
export declare const ContactCategoriesApiFetchParamCreator: {
    apiContactsCategoriesByCategoryIdDelete(params: {
        "categoryId": string;
    }, options?: any): FetchArgs;
    apiContactsCategoriesByCategoryIdPeopleGet(params: {
        "categoryId": string;
    }, options?: any): FetchArgs;
    apiContactsCategoriesByCategoryIdPut(params: {
        "categoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): FetchArgs;
    apiContactsCategoriesByCategoryIdSubCategoriesBySubCategoryIdPeopleGet(params: {
        "categoryId": string;
        "subCategoryId": string;
    }, options?: any): FetchArgs;
    apiContactsCategoriesByCategoryIdSubCategoriesGet(params: {
        "categoryId": string;
    }, options?: any): FetchArgs;
    apiContactsCategoriesGet(options?: any): FetchArgs;
    apiContactsCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): FetchArgs;
};
/**
 * ContactCategoriesApi - functional programming interface
 */
export declare const ContactCategoriesApiFp: {
    apiContactsCategoriesByCategoryIdDelete(params: {
        "categoryId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsCategoriesByCategoryIdPeopleGet(params: {
        "categoryId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001[]>;
    apiContactsCategoriesByCategoryIdPut(params: {
        "categoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert>;
    apiContactsCategoriesByCategoryIdSubCategoriesBySubCategoryIdPeopleGet(params: {
        "categoryId": string;
        "subCategoryId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001[]>;
    apiContactsCategoriesByCategoryIdSubCategoriesGet(params: {
        "categoryId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    apiContactsCategoriesGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    apiContactsCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert>;
};
/**
 * ContactCategoriesApi - object-oriented interface
 */
export declare class ContactCategoriesApi extends BaseAPI {
    /**
     * *Auth Required
     * @param categoryId
     */
    apiContactsCategoriesByCategoryIdDelete(params: {
        "categoryId": string;
    }, options?: any): Promise<any>;
    /**
     * @param categoryId
     */
    apiContactsCategoriesByCategoryIdPeopleGet(params: {
        "categoryId": string;
    }, options?: any): Promise<InlineResponse2001[]>;
    /**
     * *Auth Required
     * @param categoryId
     * @param label
     * @param orderBy
     */
    apiContactsCategoriesByCategoryIdPut(params: {
        "categoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
    /**
     * @param categoryId
     * @param subCategoryId
     */
    apiContactsCategoriesByCategoryIdSubCategoriesBySubCategoryIdPeopleGet(params: {
        "categoryId": string;
        "subCategoryId": string;
    }, options?: any): Promise<InlineResponse2001[]>;
    /**
     * @param categoryId
     */
    apiContactsCategoriesByCategoryIdSubCategoriesGet(params: {
        "categoryId": string;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    /**
     */
    apiContactsCategoriesGet(options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    /**
     * *Auth Required
     * @param label
     * @param orderBy
     */
    apiContactsCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
}
/**
 * ContactCategoriesApi - factory interface
 */
export declare const ContactCategoriesApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiContactsCategoriesByCategoryIdDelete(params: {
        "categoryId": string;
    }, options?: any): Promise<any>;
    apiContactsCategoriesByCategoryIdPeopleGet(params: {
        "categoryId": string;
    }, options?: any): Promise<InlineResponse2001[]>;
    apiContactsCategoriesByCategoryIdPut(params: {
        "categoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
    apiContactsCategoriesByCategoryIdSubCategoriesBySubCategoryIdPeopleGet(params: {
        "categoryId": string;
        "subCategoryId": string;
    }, options?: any): Promise<InlineResponse2001[]>;
    apiContactsCategoriesByCategoryIdSubCategoriesGet(params: {
        "categoryId": string;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    apiContactsCategoriesGet(options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    apiContactsCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
};
/**
 * ContactPeopleApi - fetch parameter creator
 */
export declare const ContactPeopleApiFetchParamCreator: {
    apiContactsPeopleByPersonIdAddToCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdAddToSubCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdCategoriesGet(params: {
        "personId": string;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdDelete(params: {
        "personId": string;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdGet(params: {
        "personId": string;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdPictureGet(params: {
        "personId": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdPicturePost(params: {
        "personId": string;
        "uploadedFile"?: any;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdPut(params: {
        "personId": string;
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdRemoveFromCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): FetchArgs;
    apiContactsPeopleByPersonIdRemoveFromSubCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): FetchArgs;
    apiContactsPeopleGet(options?: any): FetchArgs;
    apiContactsPeoplePost(params: {
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
        "uploadedFile"?: any;
    }, options?: any): FetchArgs;
};
/**
 * ContactPeopleApi - functional programming interface
 */
export declare const ContactPeopleApiFp: {
    apiContactsPeopleByPersonIdAddToCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsPeopleByPersonIdAddToSubCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsPeopleByPersonIdCategoriesGet(params: {
        "personId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2002[]>;
    apiContactsPeopleByPersonIdDelete(params: {
        "personId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsPeopleByPersonIdGet(params: {
        "personId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001>;
    apiContactsPeopleByPersonIdPictureGet(params: {
        "personId": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsPeopleByPersonIdPicturePost(params: {
        "personId": string;
        "uploadedFile"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsPeopleByPersonIdPut(params: {
        "personId": string;
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001>;
    apiContactsPeopleByPersonIdRemoveFromCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsPeopleByPersonIdRemoveFromSubCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsPeopleGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001[]>;
    apiContactsPeoplePost(params: {
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
        "uploadedFile"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001>;
};
/**
 * ContactPeopleApi - object-oriented interface
 */
export declare class ContactPeopleApi extends BaseAPI {
    /**
     * *Auth Required
     * @param personId
     * @param categoryId
     */
    apiContactsPeopleByPersonIdAddToCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param personId
     * @param categoryId
     * @param subCategoryId
     */
    apiContactsPeopleByPersonIdAddToSubCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): Promise<any>;
    /**
     * @param personId
     */
    apiContactsPeopleByPersonIdCategoriesGet(params: {
        "personId": string;
    }, options?: any): Promise<InlineResponse2002[]>;
    /**
     * *Auth Required
     * @param personId
     */
    apiContactsPeopleByPersonIdDelete(params: {
        "personId": string;
    }, options?: any): Promise<any>;
    /**
     * @param personId
     */
    apiContactsPeopleByPersonIdGet(params: {
        "personId": string;
    }, options?: any): Promise<InlineResponse2001>;
    /**
     * @param personId
     * @param width
     * @param height
     */
    apiContactsPeopleByPersonIdPictureGet(params: {
        "personId": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param personId
     * @param uploadedFile
     */
    apiContactsPeopleByPersonIdPicturePost(params: {
        "personId": string;
        "uploadedFile"?: any;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param personId
     * @param region
     * @param firstName
     * @param lastName
     * @param phone
     * @param cell
     * @param email
     */
    apiContactsPeopleByPersonIdPut(params: {
        "personId": string;
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
    }, options?: any): Promise<InlineResponse2001>;
    /**
     * *Auth Required
     * @param personId
     * @param categoryId
     */
    apiContactsPeopleByPersonIdRemoveFromCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param personId
     * @param categoryId
     * @param subCategoryId
     */
    apiContactsPeopleByPersonIdRemoveFromSubCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): Promise<any>;
    /**
     */
    apiContactsPeopleGet(options?: any): Promise<InlineResponse2001[]>;
    /**
     * *Auth Required
     * @param region
     * @param firstName
     * @param lastName
     * @param phone
     * @param cell
     * @param email
     * @param uploadedFile
     */
    apiContactsPeoplePost(params: {
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
        "uploadedFile"?: any;
    }, options?: any): Promise<InlineResponse2001>;
}
/**
 * ContactPeopleApi - factory interface
 */
export declare const ContactPeopleApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiContactsPeopleByPersonIdAddToCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    apiContactsPeopleByPersonIdAddToSubCategoryPost(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): Promise<any>;
    apiContactsPeopleByPersonIdCategoriesGet(params: {
        "personId": string;
    }, options?: any): Promise<InlineResponse2002[]>;
    apiContactsPeopleByPersonIdDelete(params: {
        "personId": string;
    }, options?: any): Promise<any>;
    apiContactsPeopleByPersonIdGet(params: {
        "personId": string;
    }, options?: any): Promise<InlineResponse2001>;
    apiContactsPeopleByPersonIdPictureGet(params: {
        "personId": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): Promise<any>;
    apiContactsPeopleByPersonIdPicturePost(params: {
        "personId": string;
        "uploadedFile"?: any;
    }, options?: any): Promise<any>;
    apiContactsPeopleByPersonIdPut(params: {
        "personId": string;
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
    }, options?: any): Promise<InlineResponse2001>;
    apiContactsPeopleByPersonIdRemoveFromCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    apiContactsPeopleByPersonIdRemoveFromSubCategoryDelete(params: {
        "personId": string;
        "categoryId"?: string;
        "subCategoryId"?: string;
    }, options?: any): Promise<any>;
    apiContactsPeopleGet(options?: any): Promise<InlineResponse2001[]>;
    apiContactsPeoplePost(params: {
        "region"?: string;
        "firstName"?: string;
        "lastName"?: string;
        "phone"?: string;
        "cell"?: string;
        "email"?: string;
        "uploadedFile"?: any;
    }, options?: any): Promise<InlineResponse2001>;
};
/**
 * ContactSubCategoriesApi - fetch parameter creator
 */
export declare const ContactSubCategoriesApiFetchParamCreator: {
    apiContactsSubCategoriesBySubCategoryIdAddToCategoryPost(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): FetchArgs;
    apiContactsSubCategoriesBySubCategoryIdDelete(params: {
        "subCategoryId": string;
    }, options?: any): FetchArgs;
    apiContactsSubCategoriesBySubCategoryIdGet(params: {
        "subCategoryId": string;
    }, options?: any): FetchArgs;
    apiContactsSubCategoriesBySubCategoryIdPut(params: {
        "subCategoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): FetchArgs;
    apiContactsSubCategoriesBySubCategoryIdRemoveFromCategoryDelete(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): FetchArgs;
    apiContactsSubCategoriesGet(options?: any): FetchArgs;
    apiContactsSubCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): FetchArgs;
};
/**
 * ContactSubCategoriesApi - functional programming interface
 */
export declare const ContactSubCategoriesApiFp: {
    apiContactsSubCategoriesBySubCategoryIdAddToCategoryPost(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsSubCategoriesBySubCategoryIdDelete(params: {
        "subCategoryId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsSubCategoriesBySubCategoryIdGet(params: {
        "subCategoryId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert>;
    apiContactsSubCategoriesBySubCategoryIdPut(params: {
        "subCategoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert>;
    apiContactsSubCategoriesBySubCategoryIdRemoveFromCategoryDelete(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiContactsSubCategoriesGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    apiContactsSubCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200ContactSubCategoriesUpsert>;
};
/**
 * ContactSubCategoriesApi - object-oriented interface
 */
export declare class ContactSubCategoriesApi extends BaseAPI {
    /**
     * *Auth Required
     * @param subCategoryId
     * @param categoryId
     */
    apiContactsSubCategoriesBySubCategoryIdAddToCategoryPost(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param subCategoryId
     */
    apiContactsSubCategoriesBySubCategoryIdDelete(params: {
        "subCategoryId": string;
    }, options?: any): Promise<any>;
    /**
     * @param subCategoryId
     */
    apiContactsSubCategoriesBySubCategoryIdGet(params: {
        "subCategoryId": string;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
    /**
     * *Auth Required
     * @param subCategoryId
     * @param label
     * @param orderBy
     */
    apiContactsSubCategoriesBySubCategoryIdPut(params: {
        "subCategoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
    /**
     * *Auth Required
     * @param subCategoryId
     * @param categoryId
     */
    apiContactsSubCategoriesBySubCategoryIdRemoveFromCategoryDelete(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    /**
     */
    apiContactsSubCategoriesGet(options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    /**
     * *Auth Required
     * @param label
     * @param orderBy
     */
    apiContactsSubCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
}
/**
 * ContactSubCategoriesApi - factory interface
 */
export declare const ContactSubCategoriesApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiContactsSubCategoriesBySubCategoryIdAddToCategoryPost(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    apiContactsSubCategoriesBySubCategoryIdDelete(params: {
        "subCategoryId": string;
    }, options?: any): Promise<any>;
    apiContactsSubCategoriesBySubCategoryIdGet(params: {
        "subCategoryId": string;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
    apiContactsSubCategoriesBySubCategoryIdPut(params: {
        "subCategoryId": string;
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
    apiContactsSubCategoriesBySubCategoryIdRemoveFromCategoryDelete(params: {
        "subCategoryId": string;
        "categoryId"?: string;
    }, options?: any): Promise<any>;
    apiContactsSubCategoriesGet(options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert[]>;
    apiContactsSubCategoriesPost(params: {
        "label"?: string;
        "orderBy"?: number;
    }, options?: any): Promise<InlineResponse200ContactSubCategoriesUpsert>;
};
/**
 * LpcApi - fetch parameter creator
 */
export declare const LpcApiFetchParamCreator: {
    apiLpcByIdDelete(params: {
        "id": string;
    }, options?: any): FetchArgs;
    apiLpcByIdGet(params: {
        "id": string;
    }, options?: any): FetchArgs;
    apiLpcByIdIconGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): FetchArgs;
    apiLpcByIdIconPost(params: {
        "id": string;
        "icon"?: any;
    }, options?: any): FetchArgs;
    apiLpcByIdPhotoGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): FetchArgs;
    apiLpcByIdPhotoPost(params: {
        "id": string;
        "photo"?: any;
    }, options?: any): FetchArgs;
    apiLpcByIdPut(params: {
        "id": string;
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): FetchArgs;
    apiLpcGet(options?: any): FetchArgs;
    apiLpcPost(params: {
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): FetchArgs;
};
/**
 * LpcApi - functional programming interface
 */
export declare const LpcApiFp: {
    apiLpcByIdDelete(params: {
        "id": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiLpcByIdGet(params: {
        "id": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2003>;
    apiLpcByIdIconGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiLpcByIdIconPost(params: {
        "id": string;
        "icon"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiLpcByIdPhotoGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiLpcByIdPhotoPost(params: {
        "id": string;
        "photo"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiLpcByIdPut(params: {
        "id": string;
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2003>;
    apiLpcGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2003[]>;
    apiLpcPost(params: {
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2003>;
};
/**
 * LpcApi - object-oriented interface
 */
export declare class LpcApi extends BaseAPI {
    /**
     * *Auth Required
     * @param id
     */
    apiLpcByIdDelete(params: {
        "id": string;
    }, options?: any): Promise<any>;
    /**
     * @param id
     */
    apiLpcByIdGet(params: {
        "id": string;
    }, options?: any): Promise<InlineResponse2003>;
    /**
     * @param id
     * @param width
     * @param height
     */
    apiLpcByIdIconGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param id
     * @param icon
     */
    apiLpcByIdIconPost(params: {
        "id": string;
        "icon"?: any;
    }, options?: any): Promise<any>;
    /**
     * @param id
     * @param width
     * @param height
     */
    apiLpcByIdPhotoGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param id
     * @param photo
     */
    apiLpcByIdPhotoPost(params: {
        "id": string;
        "photo"?: any;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param id
     * @param name MaxLen:100
     * @param address1 MaxLen:100
     * @param city1 MaxLen:50
     * @param state1 MaxLen:2
     * @param zip1 MaxLen:50
     * @param address2 MaxLen:100
     * @param city2 MaxLen:50
     * @param state2 MaxLen:2
     * @param zip2 MaxLen:50
     * @param web MaxLen:100
     * @param phone MaxLen:10,Phone number
     * @param fax MaxLen:10,Phone number
     * @param totalElectricCustomers
     * @param residentialCustomers
     * @param cICustomersLessThan50kw
     * @param cICustomers51To4999Kw
     * @param cICustomersGreaterThan5000kw
     * @param totalNaturalGasCustomers
     * @param totalWaterCustomers
     * @param totalWastewaterCustomers
     * @param totalSystemAssets
     * @param taxes
     * @param milesOfLine
     * @param customersPerMile
     * @param avgResidentialUseInKwhPerMonth
     * @param deliveryPoints
     * @param avgLoadFactor
     * @param photo
     * @param icon
     */
    apiLpcByIdPut(params: {
        "id": string;
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): Promise<InlineResponse2003>;
    /**
     */
    apiLpcGet(options?: any): Promise<InlineResponse2003[]>;
    /**
     * *Auth Required
     * @param name MaxLen:100
     * @param address1 MaxLen:100
     * @param city1 MaxLen:50
     * @param state1 MaxLen:2
     * @param zip1 MaxLen:50
     * @param address2 MaxLen:100
     * @param city2 MaxLen:50
     * @param state2 MaxLen:2
     * @param zip2 MaxLen:50
     * @param web MaxLen:100
     * @param phone MaxLen:10,Phone number
     * @param fax MaxLen:10,Phone number
     * @param totalElectricCustomers
     * @param residentialCustomers
     * @param cICustomersLessThan50kw
     * @param cICustomers51To4999Kw
     * @param cICustomersGreaterThan5000kw
     * @param totalNaturalGasCustomers
     * @param totalWaterCustomers
     * @param totalWastewaterCustomers
     * @param totalSystemAssets
     * @param taxes
     * @param milesOfLine
     * @param customersPerMile
     * @param avgResidentialUseInKwhPerMonth
     * @param deliveryPoints
     * @param avgLoadFactor
     * @param photo
     * @param icon
     */
    apiLpcPost(params: {
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): Promise<InlineResponse2003>;
}
/**
 * LpcApi - factory interface
 */
export declare const LpcApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiLpcByIdDelete(params: {
        "id": string;
    }, options?: any): Promise<any>;
    apiLpcByIdGet(params: {
        "id": string;
    }, options?: any): Promise<InlineResponse2003>;
    apiLpcByIdIconGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): Promise<any>;
    apiLpcByIdIconPost(params: {
        "id": string;
        "icon"?: any;
    }, options?: any): Promise<any>;
    apiLpcByIdPhotoGet(params: {
        "id": string;
        "width"?: number;
        "height"?: number;
    }, options?: any): Promise<any>;
    apiLpcByIdPhotoPost(params: {
        "id": string;
        "photo"?: any;
    }, options?: any): Promise<any>;
    apiLpcByIdPut(params: {
        "id": string;
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): Promise<InlineResponse2003>;
    apiLpcGet(options?: any): Promise<InlineResponse2003[]>;
    apiLpcPost(params: {
        "name"?: string;
        "address1"?: string;
        "city1"?: string;
        "state1"?: string;
        "zip1"?: string;
        "address2"?: string;
        "city2"?: string;
        "state2"?: string;
        "zip2"?: string;
        "web"?: string;
        "phone"?: string;
        "fax"?: string;
        "totalElectricCustomers"?: number;
        "residentialCustomers"?: number;
        "cICustomersLessThan50kw"?: number;
        "cICustomers51To4999Kw"?: number;
        "cICustomersGreaterThan5000kw"?: number;
        "totalNaturalGasCustomers"?: number;
        "totalWaterCustomers"?: number;
        "totalWastewaterCustomers"?: number;
        "totalSystemAssets"?: number;
        "taxes"?: number;
        "milesOfLine"?: number;
        "customersPerMile"?: number;
        "avgResidentialUseInKwhPerMonth"?: number;
        "deliveryPoints"?: number;
        "avgLoadFactor"?: number;
        "photo"?: any;
        "icon"?: any;
    }, options?: any): Promise<InlineResponse2003>;
};
/**
 * PdfCategoriesApi - fetch parameter creator
 */
export declare const PdfCategoriesApiFetchParamCreator: {
    apiPdfCategoriesByIdDelete(params: {
        "id": string;
    }, options?: any): FetchArgs;
    apiPdfCategoriesByIdGet(params: {
        "id": string;
    }, options?: any): FetchArgs;
    apiPdfCategoriesByIdPut(params: {
        "id": string;
        "label"?: string;
    }, options?: any): FetchArgs;
    apiPdfCategoriesGet(params: {
        "screen"?: string;
    }, options?: any): FetchArgs;
    apiPdfCategoriesPost(params: {
        "label"?: string;
    }, options?: any): FetchArgs;
};
/**
 * PdfCategoriesApi - functional programming interface
 */
export declare const PdfCategoriesApiFp: {
    apiPdfCategoriesByIdDelete(params: {
        "id": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiPdfCategoriesByIdGet(params: {
        "id": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfCategoriesUpsert>;
    apiPdfCategoriesByIdPut(params: {
        "id": string;
        "label"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfCategoriesUpsert>;
    apiPdfCategoriesGet(params: {
        "screen"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfCategoriesUpsert[]>;
    apiPdfCategoriesPost(params: {
        "label"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfCategoriesUpsert>;
};
/**
 * PdfCategoriesApi - object-oriented interface
 */
export declare class PdfCategoriesApi extends BaseAPI {
    /**
     * *Auth Required
     * @param id
     */
    apiPdfCategoriesByIdDelete(params: {
        "id": string;
    }, options?: any): Promise<any>;
    /**
     * @param id
     */
    apiPdfCategoriesByIdGet(params: {
        "id": string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert>;
    /**
     * *Auth Required
     * @param id
     * @param label
     */
    apiPdfCategoriesByIdPut(params: {
        "id": string;
        "label"?: string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert>;
    /**
     * @param screen
     */
    apiPdfCategoriesGet(params: {
        "screen"?: string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert[]>;
    /**
     * *Auth Required
     * @param label
     */
    apiPdfCategoriesPost(params: {
        "label"?: string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert>;
}
/**
 * PdfCategoriesApi - factory interface
 */
export declare const PdfCategoriesApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiPdfCategoriesByIdDelete(params: {
        "id": string;
    }, options?: any): Promise<any>;
    apiPdfCategoriesByIdGet(params: {
        "id": string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert>;
    apiPdfCategoriesByIdPut(params: {
        "id": string;
        "label"?: string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert>;
    apiPdfCategoriesGet(params: {
        "screen"?: string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert[]>;
    apiPdfCategoriesPost(params: {
        "label"?: string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert>;
};
/**
 * PdfScreensApi - fetch parameter creator
 */
export declare const PdfScreensApiFetchParamCreator: {
    apiPdfScreensByScreenCategoriesByCategoryIdPdfsGet(params: {
        "screen": string;
        "categoryId": string;
    }, options?: any): FetchArgs;
    apiPdfScreensByScreenCategoriesGet(params: {
        "screen": string;
    }, options?: any): FetchArgs;
    apiPdfScreensByScreenPdfsGet(params: {
        "screen": string;
    }, options?: any): FetchArgs;
    apiPdfScreensGet(options?: any): FetchArgs;
};
/**
 * PdfScreensApi - functional programming interface
 */
export declare const PdfScreensApiFp: {
    apiPdfScreensByScreenCategoriesByCategoryIdPdfsGet(params: {
        "screen": string;
        "categoryId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfsUpsert[]>;
    apiPdfScreensByScreenCategoriesGet(params: {
        "screen": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfCategoriesUpsert[]>;
    apiPdfScreensByScreenPdfsGet(params: {
        "screen": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfsUpsert[]>;
    apiPdfScreensGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string[]>;
};
/**
 * PdfScreensApi - object-oriented interface
 */
export declare class PdfScreensApi extends BaseAPI {
    /**
     * @param screen
     * @param categoryId
     */
    apiPdfScreensByScreenCategoriesByCategoryIdPdfsGet(params: {
        "screen": string;
        "categoryId": string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert[]>;
    /**
     * @param screen
     */
    apiPdfScreensByScreenCategoriesGet(params: {
        "screen": string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert[]>;
    /**
     * @param screen
     */
    apiPdfScreensByScreenPdfsGet(params: {
        "screen": string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert[]>;
    /**
     */
    apiPdfScreensGet(options?: any): Promise<string[]>;
}
/**
 * PdfScreensApi - factory interface
 */
export declare const PdfScreensApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiPdfScreensByScreenCategoriesByCategoryIdPdfsGet(params: {
        "screen": string;
        "categoryId": string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert[]>;
    apiPdfScreensByScreenCategoriesGet(params: {
        "screen": string;
    }, options?: any): Promise<InlineResponse200PdfCategoriesUpsert[]>;
    apiPdfScreensByScreenPdfsGet(params: {
        "screen": string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert[]>;
    apiPdfScreensGet(options?: any): Promise<string[]>;
};
/**
 * PdfsApi - fetch parameter creator
 */
export declare const PdfsApiFetchParamCreator: {
    apiPdfsByIdDelete(params: {
        "id": string;
    }, options?: any): FetchArgs;
    apiPdfsByIdGet(params: {
        "id": string;
    }, options?: any): FetchArgs;
    apiPdfsByIdPut(params: {
        "id": string;
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
    }, options?: any): FetchArgs;
    apiPdfsByPdfIdDataGet(params: {
        "pdfId": string;
    }, options?: any): FetchArgs;
    apiPdfsByPdfIdDataPost(params: {
        "pdfId": string;
        "uploadedFile"?: any;
    }, options?: any): FetchArgs;
    apiPdfsGet(params: {
        "screen"?: string;
    }, options?: any): FetchArgs;
    apiPdfsPost(params: {
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
        "uploadedFile"?: any;
    }, options?: any): FetchArgs;
};
/**
 * PdfsApi - functional programming interface
 */
export declare const PdfsApiFp: {
    apiPdfsByIdDelete(params: {
        "id": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiPdfsByIdGet(params: {
        "id": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfsUpsert>;
    apiPdfsByIdPut(params: {
        "id": string;
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfsUpsert>;
    apiPdfsByPdfIdDataGet(params: {
        "pdfId": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiPdfsByPdfIdDataPost(params: {
        "pdfId": string;
        "uploadedFile"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    apiPdfsGet(params: {
        "screen"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfsUpsert[]>;
    apiPdfsPost(params: {
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
        "uploadedFile"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200PdfsUpsert>;
};
/**
 * PdfsApi - object-oriented interface
 */
export declare class PdfsApi extends BaseAPI {
    /**
     * *Auth Required
     * @param id
     */
    apiPdfsByIdDelete(params: {
        "id": string;
    }, options?: any): Promise<any>;
    /**
     * @param id
     */
    apiPdfsByIdGet(params: {
        "id": string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert>;
    /**
     * *Auth Required
     * @param id
     * @param screen
     * @param categoryId
     * @param label
     */
    apiPdfsByIdPut(params: {
        "id": string;
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert>;
    /**
     * @param pdfId
     */
    apiPdfsByPdfIdDataGet(params: {
        "pdfId": string;
    }, options?: any): Promise<any>;
    /**
     * *Auth Required
     * @param pdfId
     * @param uploadedFile
     */
    apiPdfsByPdfIdDataPost(params: {
        "pdfId": string;
        "uploadedFile"?: any;
    }, options?: any): Promise<any>;
    /**
     * @param screen
     */
    apiPdfsGet(params: {
        "screen"?: string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert[]>;
    /**
     * *Auth Required
     * @param screen
     * @param categoryId
     * @param label
     * @param uploadedFile
     */
    apiPdfsPost(params: {
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
        "uploadedFile"?: any;
    }, options?: any): Promise<InlineResponse200PdfsUpsert>;
}
/**
 * PdfsApi - factory interface
 */
export declare const PdfsApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    apiPdfsByIdDelete(params: {
        "id": string;
    }, options?: any): Promise<any>;
    apiPdfsByIdGet(params: {
        "id": string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert>;
    apiPdfsByIdPut(params: {
        "id": string;
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert>;
    apiPdfsByPdfIdDataGet(params: {
        "pdfId": string;
    }, options?: any): Promise<any>;
    apiPdfsByPdfIdDataPost(params: {
        "pdfId": string;
        "uploadedFile"?: any;
    }, options?: any): Promise<any>;
    apiPdfsGet(params: {
        "screen"?: string;
    }, options?: any): Promise<InlineResponse200PdfsUpsert[]>;
    apiPdfsPost(params: {
        "screen"?: string;
        "categoryId"?: string;
        "label"?: string;
        "uploadedFile"?: any;
    }, options?: any): Promise<InlineResponse200PdfsUpsert>;
};
