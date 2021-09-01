import { LightningElement } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
//import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
export default class CreateOpportunityFormDefh extends NavigationMixin(LightningElement) {


    
    name='';
    CloseDate='';
     handleChange(event){
         if(event.target.label=='Name'){
             this.name =  event.target.value;
         }

         if(event.target.label=='CloseDate'){
            this.CloseDate =  event.target.value;
        }
 
        }
    createOpportunity(){
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[DATE_FIELD.fieldApiName] = this.CloseDate;
        const recordInput = { apiName: OPPORTUNITY_OBJECT.objectApiName, fields };
        
        createRecord(recordInput)
        .then(Opportunity => {
            this.OpportunityId = Opportunity.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created',
                    variant: 'success',
                }),
            );
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: Opportunity.id,
                    objectApiName: 'Opportunity',
                    actionName: 'view'
                },
            });


        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
        });
    }
}
