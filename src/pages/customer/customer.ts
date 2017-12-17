import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {CustomerData} from '../../data/customer.data';

@Component({
    selector: 'customer-page',
    templateUrl: 'customer.html'
})

export class CustomerPage{
    customers : any[];

    constructor(private navCtrl : NavController,
                private loadingController : LoadingController,
                private customerData : CustomerData
                ){
            
                    this.initializeData();
    }

    //Methods
    itemClick(event,customer) : void{

        //TODO
        console.log(customer);
    }

    private initializeData(){
        let loader = this.loadingController.create({
            content : 'Loading customer ...'
        });

        // loader.present().then(() => {
        //     setTimeout(() => {
        //         loader.dismiss();
        //     }, 2000);
        // });
        

        loader.present().then(() => {
            this.customerData.getCustomerData().then(data => {
                //console.log('GET CUSTOMERS DONE');
                console.log(data);
                this.customers = data;
                loader.dismiss();
            });
        });
    }
}