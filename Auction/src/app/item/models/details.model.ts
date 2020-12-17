export class DetailsModel {
    constructor(
        public name: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public timeLimit: string,
        public userId: string
    ) { }
}