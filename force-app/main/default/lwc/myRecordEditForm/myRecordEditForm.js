import { LightningElement,track,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class MyRecordEditForm extends LightningElement {
    @api recordId;
    @track cardTitle='New Contact';
    
    handleSuccess (){
        const evt = new ShowToastEvent({
            title: "Success!",
            message: "The Contact's record has been successfully saved.",
            variant: "success",
        });
        this.dispatchEvent(evt);
    }
    
}