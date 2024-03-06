export interface CategoryLst {
    results:  number;
    metadata: Metadata;
    data:     Category[];
}

export interface Category {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}
export interface SubCategory {
    _id:       string;
    name:      string;
    slug:      string;
    CategoryId:string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Metadata {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
}
