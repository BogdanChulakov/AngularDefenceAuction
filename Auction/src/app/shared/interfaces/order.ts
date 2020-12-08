import { IBase } from './base';

export interface IOrder extends IBase {
  name: string;
  description: string;
  imageUrl:string;
  price: number;
}
