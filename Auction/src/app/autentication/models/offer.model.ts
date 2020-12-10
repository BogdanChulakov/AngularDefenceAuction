export class OfferModel {
    constructor(
        public orderName:string,
        public price: number,
        public newPrice:number,
        public shipingAddress: string,
    ) { }
}