import { LightningElement,wire } from 'lwc';
import getDataFromApex from '@salesforce/apex/ContactController1.getData';
export default class ContactLWC extends LightningElement {

    @wire(getDataFromApex) 
wiredContactdata({ error, data }) {
    if (data) {
        this.contactdata = data;
        this.error = undefined;
        console.log('data : ', JSON.stringify(data));
    } else if (error) {
        console.log('error : ', JSON.stringify(error));
        this.error = error;
        this.contactdata = undefined;
    }
}

}