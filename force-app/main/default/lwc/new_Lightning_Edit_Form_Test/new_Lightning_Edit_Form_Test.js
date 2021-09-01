import { LightningElement } from 'lwc';
 
export default class New_Lightning_Edit_Form_Test extends LightningElement {
    accountId;
    contactId;
   handleSuccess(event) {
       this.contactId = event.detail.id;
       alert('Id: '+event.detail.id);
   }
}