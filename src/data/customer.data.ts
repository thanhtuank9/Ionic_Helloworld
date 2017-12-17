import {Injectable} from "@angular/core";
import { CustomerModel } from "../models/customer.model";
import { Gender } from "../models/customer.model";
import { Address } from "../models/customer.model";

@Injectable()
export class CustomerData{

    private customerData : CustomerModel[];

    constructor(){
        this.initCustomerData();
    }

    //1. Public Functions
    public getCustomerData() : Promise<CustomerModel[]>{
        return Promise.resolve(this.customerData);
    }

    //2. Private Methods
    private initCustomerData() : void {
        this.customerData = [];

        //First record
        let _customer = new CustomerModel();
        _customer.firstName = 'Tuan 01';
        _customer.lastName = 'Nguyen';
        _customer.gender = Gender.MALE;
        _customer.address = new Address();
        _customer.address.country = 'Viet Nam';
        _customer.address.place = 'Vinh Long';

        this.customerData.push(_customer);

        //Second record
        _customer = new CustomerModel();
        _customer.firstName = 'Tuan 02';
        _customer.lastName = 'Nguyen';
        _customer.gender = Gender.MALE;
        _customer.address = new Address();
        _customer.address.country = 'Viet Nam';
        _customer.address.place = 'TP Ho Chi Minh';

        this.customerData.push(_customer);

    }

}