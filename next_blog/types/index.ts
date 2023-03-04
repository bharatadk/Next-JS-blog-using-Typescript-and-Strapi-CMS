export interface ICategory {
    id: number;
    attributes: ICategoryAtrtribute;
}

export interface ICategoryAtrtribute {
    Title: string;
    Slug: string;
}

export interface ICollectionResponse<T> {
    data: T;
    meta: IResourceMeta;
}
 
export interface IResourceMeta {
    pagination: IPagination;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
