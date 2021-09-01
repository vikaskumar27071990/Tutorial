import { LightningElement,track } from 'lwc';
import createAccount from '@salesforce/apex/AccountCreationController.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Opportunity.Type';
import ACCOUNT_StageName from '@salesforce/schema/Opportunity.StageName';
import ACCOUNT_CloseDate from '@salesforce/schema/Opportunity.CloseDate';

import ACCOUNT_BDS from '@salesforce/schema/Opportunity.BDS__c';
import ACCOUNT_BDSEmailAddress from '@salesforce/schema/Opportunity.BDS_Email_Address__c';
import ACCOUNT_SolicitationNumber from '@salesforce/schema/Opportunity.Solicitation_Number__c';
import ACCOUNT_Agency from '@salesforce/schema/Opportunity.Agency__c';

import ACCOUNT_Office from '@salesforce/schema/Opportunity.Office__c';
import ACCOUNT_LowestSubTier from '@salesforce/schema/Opportunity.Lowest_Sub_Tier__c';
import ACCOUNT_NoticeType from '@salesforce/schema/Opportunity.Notice_Type__c';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class OpportunityCreation extends LightningElement {
 @track id;
 @track error;
 @track accountRecord = {
    Name:ACCOUNT_NAME,
    Type:ACCOUNT_TYPE,
    StageName:ACCOUNT_StageName,
    CloseDate:ACCOUNT_CloseDate,
    BDS__c:ACCOUNT_BDS,
    BDS_Email_Address__c:ACCOUNT_BDSEmailAddress,
    Solicitation_Number__c:ACCOUNT_SolicitationNumber,
    Agency__c:ACCOUNT_Agency,
    Office__c:ACCOUNT_Office,
    Lowest_Sub_Tier__c:ACCOUNT_LowestSubTier,
    Notice_Type__c:ACCOUNT_NoticeType
 };


 handleNameChange(event){
     this.accountRecord.Name = event.target.value;
 }
 handleTypeChange(event){
    this.accountRecord.Type = event.target.value;
 }
 handleStageNameChange(event){
    this.accountRecord.StageName = event.target.value;
 }
 handleCloseDateChange(event){
    this.accountRecord.CloseDate = event.target.value;
 }
handleBDSChange(event){
    this.accountRecord.BDS__c = event.target.value;
 }
 handleBDSEmailAddressChange(event){
    this.accountRecord.BDS_Email_Address__c = event.target.value;
 }

handleBDSSolicitationNumberChange(event){
    this.accountRecord.Solicitation_Number__c = event.target.value;
 }

 handleAgencyChange(event){
    this.accountRecord.Agency__c = event.target.value;
 }

 handleOfficeChange(event){
    this.accountRecord.Office__c = event.target.value;
 }

 handleLowestSubTierChange(event){
    this.accountRecord.Lowest_Sub_Tier__c = event.target.value;
 }

 handleNoticeTypeChange(event){
    this.accountRecord.Notice_Type__c = event.target.value;
 }








 handleSaveAccount(){   
    createAccount({accountRecObj:this.accountRecord})
    .then(result=>{    
        this.accountRecord = {};
        this.id = result.Id;
        window.console.log(this.id);
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Account Record is created successfullu!',
            variant:'success'
        });
        this.dispatchEvent(toastEvent);
    })
    .catch(error=>{
        this.error = error.message;
    });
 }

}