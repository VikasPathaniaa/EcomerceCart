export interface CartProduct {
    id: number;
    price: number;
    amount?: any;
    totalPrice: number;
    image: string;
    category: string;
}


export interface CartState {
    cartProducts: CartProduct[];
    totalProducts: number;
    totalAmount: number;
}
