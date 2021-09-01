import { LightningElement,api } from 'lwc';

export default class LdsViewRecord extends LightningElement {
    @api recordId;
    @api objectApiName;
    
    constructor(){
        super();
        console.log('Record Id====> ', this.recordId);
    }
    handleSubmit(){    alert('Submit');  }
    handleSuccess(){    alert('Success');  }
}