import { api, LightningElement, wire } from 'lwc';
import getAllAccountWithContact from '@salesforce/apex/AccountContactWrapper.getAllAccountWithContact';
export default class AccountContactDisplay extends LightningElement {
    @api accountsWithContact;
    @api error;
    @wire(getAllAccountWithContact)
    WiredAccountsWithContacts({error, data}){
        
        if(data){
            console.log('data==>'+JSON.stringify(data));
            this.accountsWithContact = data;
        }
        else if(error){
            console.log(error);
            this.error = error;
 
        }
    }
}