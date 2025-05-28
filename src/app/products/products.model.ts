export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface CartItem {
    productId: number;
    count: number;
}