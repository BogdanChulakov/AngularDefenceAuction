import { IBase } from './base';

export interface IOffer extends IBase {
    price: number;
    shipingAddress:string;
    userId:string;
    orderId:string;
}
