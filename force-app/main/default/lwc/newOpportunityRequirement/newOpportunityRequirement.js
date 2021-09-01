import { LightningElement } from 'lwc';
import Opportunity_Name from '@salesforce/schema/Opportunity.Name';
import Opportunity_Type from '@salesforce/schema/Opportunity.Type';
import Opportunity_StageName from '@salesforce/schema/Opportunity.StageName';
import Opportunity_Time from '@salesforce/schema/Opportunity.Time__c';
import Opportunity_BDS from '@salesforce/schema/Opportunity.BDS__c';
import Opportunity_BDSEmailAddress from '@salesforce/schema/Opportunity.BDS_Email_Address__c';
import Opportunity_SolicitationNumber from '@salesforce/schema/Opportunity.Solicitation_Number__c';
import Opportunity_Agency from '@salesforce/schema/Opportunity.Agency__c';
import Opportunity_Office from '@salesforce/schema/Opportunity.Office__c';
import Opportunity_LowestSubTier from '@salesforce/schema/Opportunity.Lowest_Sub_Tier__c';
import Opportunity_NoticeType from '@salesforce/schema/Opportunity.Notice_Type__c';
import Opportunity_CloseDate from '@salesforce/schema/Opportunity.CloseDate';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class NewOpportunityRequirement extends NavigationMixin(LightningElement) {
  alphanum_validation= '[a-zA-Z0-9\/,.:\'+() ?-]*$'; 
    objectApiName='Opportunity';
    fieldList=[Opportunity_Name,Opportunity_Type,Opportunity_StageName,Opportunity_Time
               ,Opportunity_BDS,Opportunity_BDSEmailAddress,Opportunity_SolicitationNumber,Opportunity_Agency
               ,Opportunity_Office,Opportunity_LowestSubTier,Opportunity_NoticeType,Opportunity_CloseDate  
            ];
     handleOpportunityCreate(event){
const evt =new ShowToastEvent({
            title:"Opportunity Create",
            message:"Record ID: " + event.detail.id,
            variant:"Success",
        });
        this.dispatchEvent(evt);
        this[NavigationMixin.Navigate]({
          type: 'standard_recordPage',
          attributes:{
           recordId:event.detail.id,
           objectApiName:'Opportunity',
           actionName:'view'   
          },

        });
     }       
}