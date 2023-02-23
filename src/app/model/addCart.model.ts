import { addCartItem } from "./CartItem.model";

export interface Cart {
    id: number;
    items: addCartItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
  }