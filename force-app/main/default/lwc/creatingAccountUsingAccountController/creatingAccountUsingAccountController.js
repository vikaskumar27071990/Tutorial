import { LightningElement,track } from 'lwc';
import createAccount from '@salesforce/apex/creatingAccountUsingAccountController.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_Type from '@salesforce/schema/Account.Type';
import ACCOUNT_Phone from '@salesforce/schema/Account.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class CreatingAccountUsingAccountController extends LightningElement {

//@track accountRecord = {...};field name mapping with given fieldName
/*
handleNameChange(event)
{ this.accountRecord.Name=event.target.value; };
*/
//Same for type and phone
@track accountid;
@track error;
@track accountRecord={
    Name:ACCOUNT_NAME,
    Type:ACCOUNT_Type,
    Phone:ACCOUNT_Phone
};
 handleNameChange(event)
 { this.accountRecord.Name=event.target.value; }

 handleTypeChange(event)
 { this.accountRecord.Type=event.target.value; }

 handlePhoneChange(event)
 { this.accountRecord.Phone=event.target.value; }

handleSaveAccount(){
    createAccount({accountRecordData:this.accountRecordData})
    
    //then <-->try
    .then(result=>{
        this.accountRecordData();//IT WELL EMPTY RECORD AFTER CREATION
        //AFTER ACCOUNT CREATION WE WANT TO SHOW SOME MSG i.e TOAST MSG
        //FOR TOAST MSG WE NEED TO CREATE A CUSTOM TOAST EVENT


        this.accountid=result.Id;//Mapping of account Id
        window.console.log(this.accountid); 
        const ToastEvent=new ShowToastEvent({
            title:'Success',
            message:'Account Created!!!!!!',
            variant:'success'
        });
        //Then dispatch It
        this.dispatchEvent(ToastEvent);
    })
    .catch(error=>{
            console.log(error);
        })   
}


}