export class OrderModel {
    constructor(
        public name: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public userId: string,
    ) { }
}