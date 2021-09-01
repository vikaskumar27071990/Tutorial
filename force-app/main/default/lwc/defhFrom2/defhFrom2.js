import { LightningElement,track } from 'lwc';
import insertOpportunityMethod from '@salesforce/apex/lwcApexController2.insertAccountMethod';
import opp_Name from '@salesforce/schema/Opportunity.Name';
import opp_Type from '@salesforce/schema/Opportunity.Type';
import opp_StageName from '@salesforce/schema/Opportunity.StageName';
import opp_CloseDate from '@salesforce/schema/Opportunity.CloseDate';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class DefhFrom2 extends LightningElement {

    @track id;
    @track error;
    
    alphanum_validation= '[a-zA-Z0-9\/,.:\'+() ?-]*$';    
    name_validation='/^[a-zA-Z]+$/';
    regexEmail = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';

@track getAccountRecord={
    Name:opp_Name,       
    Type:opp_Type, 
    StageName:opp_StageName,
    CloseDate:opp_CloseDate
};   


nameInpChange(event){
    this.getAccountRecord.Name = event.target.value;
    //window.console.log(this.getAccountRecord.Name);
  }

  phoneInpChange(event){
    this.getAccountRecord.Phone = event.target.value;
    //window.console.log(this.getAccountRecord.Phone);
 }
 
  typeInpChange(event){
     this.getAccountRecord.Type = event.target.value;
     //window.console.log(this.getAccountRecord.Type);
   }

   stageNameInpChange(event){
     this.getAccountRecord.StageName = event.target.value;
     //window.console.log(this.getAccountRecord.Type);
   }

   closeDateChange(event){
     this.getAccountRecord.CloseDate = event.target.value;
     //window.console.log(this.getAccountRecord.Type);
   }

   saveOpportunityAction(){
    window.console.log('before save' + this.createOpportunity);
    insertOpportunityMethod({opportunityObj:this.getOpportunityRecord})
    .then(result=>{
      window.console.log(this.createOpportunity);
        this.getOpportunityRecord={};
        this.id=result.Id;
        window.console.log('after save' + this.id);
        
        const toastEvent = new ShowToastEvent({
          title:'Success!',
          message:'Opportunity created successfully',
          variant:'success'
        });
        this.dispatchEvent(toastEvent);
    })
    .catch(error=>{
       this.error=error.message;
       window.console.log(this.error);
    });
  }



}