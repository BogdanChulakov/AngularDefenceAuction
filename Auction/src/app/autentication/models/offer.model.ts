export class OfferModel {
    constructor(
        public itemName:string,
        public price: number,
        public newPrice:number,
        public shipingAddress: string,
    ) { }
}