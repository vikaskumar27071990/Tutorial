import { LightningElement,track } from 'lwc';
import insertAccountMethod from '@salesforce/apex/lwcApexController1.insertAccountMethod';
import accName from '@salesforce/schema/Opportunity.Name';
import accType from '@salesforce/schema/Opportunity.Type';
import accStageName from '@salesforce/schema/Opportunity.StageName';
import accCloseDate from '@salesforce/schema/Opportunity.CloseDate';
import accBDS from '@salesforce/schema/Opportunity.BDS__c';

import accBDS_Email_Address from '@salesforce/schema/Opportunity.BDS_Email_Address__c';
import accSolicitationNumber from '@salesforce/schema/Opportunity.Solicitation_Number__c';
import accAgency from '@salesforce/schema/Opportunity.Agency__c';
import accOffice from '@salesforce/schema/Opportunity.Office__c';

import accLowestSubTier from '@salesforce/schema/Opportunity.Lowest_Sub_Tier__c';
import accNoticeType from '@salesforce/schema/Opportunity.Notice_Type__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 
export default class ExperimentOpportunityForm extends LightningElement {
    @track id;
    @track error;
    alphanum_validation= '[a-zA-Z0-9\/,.:\'+() ?-]*$';    
    name_validation='/^[a-zA-Z]+$/';
    regexEmail = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';

    @track getAccountRecord={
        Name:accName,       
        Type:accType, 
        StageName:accStageName,
        CloseDate:accCloseDate,
        BDS__c:accBDS,
        BDS_Email_Address__c:accBDS_Email_Address,
        Solicitation_Number__c:accSolicitationNumber,
        Agency__c: accAgency,
        Office__c:accOffice,
        Lowest_Sub_Tier__c:accLowestSubTier,
        Notice_Type__c:accNoticeType
    };   

    
    LowestSubTierInpChange(event){
      this.getAccountRecord.Lowest_Sub_Tier__c = event.target.value;
      //window.console.log(this.getAccountRecord.Name);
    }

    NoticeTypeInpChange(event){
      this.getAccountRecord.Notice_Type__c = event.target.value;
      //window.console.log(this.getAccountRecord.Name);
    }






SolicitationNumberInpChange(event){
      this.getAccountRecord.Solicitation_Number__c = event.target.value;
      //window.console.log(this.getAccountRecord.Name);
    }

    AgencyInpChange(event){
      this.getAccountRecord.Agency__c = event.target.value;
      //window.console.log(this.getAccountRecord.Name);
    }

    OfficeInpChange(event){
      this.getAccountRecord.Office__c = event.target.value;
      //window.console.log(this.getAccountRecord.Name);
    }


    BDSInpChange(event){
      this.getAccountRecord.BDS__c = event.target.value;
      //window.console.log(this.getAccountRecord.Name);
    }
 
    BDSEmailAddressInpChange(event){
       this.getAccountRecord.BDS_Email_Address__c = event.target.value;
       //window.console.log(this.getAccountRecord.Name);
     }
   
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