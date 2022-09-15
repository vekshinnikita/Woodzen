export interface IProduct {
    id: number,
    title: string,
    url_image: string,
    types: IType[],
}

export interface IType {
    id: number,
    title: string,
    product_title?: string,
    materials?: IMaterial[],
}

export interface IMaterial {
    id: number,
    title: string,
    price: number,
    url_image: string,
    type_title: string,
    product_title: string,
}

export interface IBasketType{
    quantity: number;
    type: IMaterial;
    total_product: number;
}

export interface INews{
    id: number,
    title: string,
    url_image: string,
    prescription: string,
    description?: string,
    created_at: string,
}

export interface IOffer{
    id: number,
    title: string,
    url_image: string,
    description?: string,
    created_at: string,
}