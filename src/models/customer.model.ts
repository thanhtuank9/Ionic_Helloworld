export class Address{
    street : string;
    zip : string;
    place : string;
    country : string;
}

export enum Gender{
    FEMALE, MALE, OTHER
}

export class CustomerModel{
    firstName : string;
    lastName : string;
    gender : Gender;
    address : Address
}