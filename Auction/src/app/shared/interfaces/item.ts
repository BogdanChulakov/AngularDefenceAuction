import { IBase } from './base';

export interface IItem extends IBase {
  name: string;
  description: string;
  imageUrl:string;
  price: number;
}
