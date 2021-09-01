import { LightningElement, track } from "lwc";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
export default class Form extends LightningElement {
    @track activeSections = [];
 
    fields_per_section = [
        {
            label: "Personal data",
            fields: [
                "Name",
                "First_Name__c",
                "Last_Name__c",
                "Salutation__c",
                "Date_Of_Birth__c"
            ]
        },
        {
            label: "Address",
            fields: [
                "Street__c",
                "House_Number__c",
                "Postal_Code__c",
                "City__c"
            ]
        },
        {
            label: "Contact Info",
            sublabel: "",
            fields: ["Email_Address__c",
                "Phone_Number__c"]
        }
    ];
 
    handleCancel(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }
 
    handleSuccess() {
        const event = new ShowToastEvent({
            variant: 'success',
            title: 'Success!',
            message: 'Record has been created',
        });
        this.dispatchEvent(event);
    }
}
