export class RegisterModel{
    constructor(
        public email:string,
        public phoneNumber:string,
        public password:string,
        public repeatPassword:string
    ) {}
}