import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LASTNAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactCreator extends LightningElement {
    //Assigning CONTACT_OBJECT adaptorId to objectApiName variable
    objectApiName = CONTACT_OBJECT;
    //Assigning contact adaptorIds [CONTACT_FIRSTNAME, CONTACT_LASTNAME, CONTACT_EMAIL] field variable
    fields =  [CONTACT_FIRSTNAME, CONTACT_LASTNAME, CONTACT_EMAIL];
    //Handling the handleSuccess event and returning toast message on success
    handleSuccess(event){
        let toastSuccessMessage = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record Id'+event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastSuccessMessage);
    }
}