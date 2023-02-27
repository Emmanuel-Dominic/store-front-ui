export interface Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
}

export interface Infor {
    quantity:  number;
    total: number;
}

export interface User {
    name:  string;
    address: string;
    cardNumber: number;
    total: number;
    success: boolean;
}
