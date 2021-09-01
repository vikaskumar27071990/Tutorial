import { LightningElement,track } from 'lwc';
import insertAccountMethod from '@salesforce/apex/lwcApexController1.insertAccountMethod';
import accName from '@salesforce/schema/Opportunity.Name';
import accType from '@salesforce/schema/Opportunity.Type';
import accStageName from '@salesforce/schema/Opportunity.StageName';
import accCloseDate from '@salesforce/schema/Opportunity.CloseDate';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 
export default class Deff extends LightningElement {
    @track id;
    @track error;
    TypeValue;
    StageValue;
/*
    name_validation='/^[a-zA-Z]+$/';
    
    alphanum_validation= '[a-zA-Z0-9\/,.:\'+() ?-]*$';    
   
    regexEmail = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
*/
    @track getAccountRecord={
        Name:accName,       
        Type:accType, 
        StageName:accStageName,
        CloseDate:accCloseDate
    };   

//============================================================================================
    get Type() {
        return [
            { label: 'Existing Customer - Upgrade', value: 'Existing Customer - Upgrade' },
            { label: 'Existing Customer - Replacement', value: 'Existing Customer - Replacement' },
            { label: 'Existing Customer - Downgrade', value: 'Existing Customer - Downgrade' },
            { label: 'New Customer', value: 'New Customer' },
        ];
    }




    get StageName() {
        return [
            { label: 'Prospecting', value: 'Prospecting' },
            { label: 'Qualification', value: 'Qualification' },
            { label: 'Closed Won', value: 'Closed Won' },
            { label: 'Closed Lost', value: 'Closed Lost' },
        ];
    }

//==============================================================================================

    nameInpChange(event){
       this.getAccountRecord.Name = event.target.value;
       //window.console.log(this.getAccountRecord.Name);
     }
 
     typeInpChange(event){
        this.getAccountRecord.Type = event.target.value;
        //window.console.log(this.getAccountRecord.Type);
      }
 
      websiteInpChange(event){
        this.getAccountRecord.StageName = event.target.value;
        //window.console.log(this.getAccountRecord.Type);
      }
 
      accSiteChange(event){
        this.getAccountRecord.CloseDate = event.target.value;
        //window.console.log(this.getAccountRecord.Type);
      }
          
    
      saveAccountAction(){
        window.console.log('before save' + this.createAccount);
        insertAccountMethod({accountObj:this.getAccountRecord})
        .then(result=>{
          window.console.log(this.createAccount);
            this.getAccountRecord={};
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