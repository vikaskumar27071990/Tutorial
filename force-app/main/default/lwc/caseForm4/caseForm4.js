import { LightningElement ,track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CaseForm4 extends LightningElement {

    @track activeSections = [];


    @track fields_per_Account =[{

    label: "NEW ACCOUNT Info",
       
        fields: ["Name"]
    }];

    fields_per_section = [
        {
            label: "Case Information",
            fields: [
                "Type",
                "Subject",
                "Case_Category__c",
                "Error_Code__c",
                "Status",

                "Origin",
                "Description",
                "Asset_Name__c"
            ]
        },
        {
            label: "Account",
            fields: [
                "AccountId","Account_Name_Text__c"
            ]
        },
        {
            label: "Contact Info",
            sublabel: "",
            fields: ["ContactId"]
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