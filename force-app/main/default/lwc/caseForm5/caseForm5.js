import { LightningElement } from 'lwc';
 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';


 import Case_AccountId from '@salesforce/schema/Case.AccountId';
 import Case_ContactId from '@salesforce/schema/Case.ContactId';
 import Case_TYPE from '@salesforce/schema/Case.Type'; 
 import Case_Subject from '@salesforce/schema/Case.Subject';
 

 import Case_Category from '@salesforce/schema/Case.Case_Category__c';
 import Case_ErrorCode from '@salesforce/schema/Case.Error_Code__c';

 import Case_Status from '@salesforce/schema/Case.Status';
 import Case_Origin from '@salesforce/schema/Case.Origin';
 import Case_Description from '@salesforce/schema/Case.Description';
 import Asset_Name from '@salesforce/schema/Case.Asset_Name__c';
 import Asset_Id from '@salesforce/schema/Case.AssetId';
export default class CaseForm5 extends NavigationMixin(LightningElement) {




    navigateToNewOpportunity() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }







    Asset=Asset_Id;
    Account = Case_AccountId;
    Contact =  Case_ContactId;
    caseType = Case_TYPE;
    CaseSubject=Case_Subject;
    caseCategory=Case_Category;
    CaseErrorCode=Case_ErrorCode;
    caseStatus=Case_Status;
    caseOrigin=Case_Origin;
    CaseDescription=Case_Description;
    AssetName=Asset_Name;
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'; 
 

    handleSuccess(){
        if(this.recordId !== null){
            this.dispatchEvent(new ShowToastEvent({
                    title: "SUCCESS!",
                    message: "New Case record has been created.",
                   variant: "success",
                }),  
           );    
         }
    } 

}