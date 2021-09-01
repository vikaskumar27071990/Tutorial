import { LightningElement,track } from 'lwc';
import insertAccountMethod from '@salesforce/apex/lwcApexController.insertAccountMethod';
import accName from '@salesforce/schema/Account.Name';
import accPhone from '@salesforce/schema/Account.Phone';
import accType from '@salesforce/schema/Account.Type';
import accWebsite from '@salesforce/schema/Account.Website';
import accSite from '@salesforce/schema/Account.Site';
 
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 
export default class InsertAccountLwc extends LightningElement {
    @track accountid;
    @track error;    
    @track getAccountRecord={
        Name:accName,       
        Phone:accPhone,  
        Type:accType, 
        Website:accWebsite,         
        Site:accSite
              
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
 
      websiteInpChange(event){
        this.getAccountRecord.Website = event.target.value;
        //window.console.log(this.getAccountRecord.Type);
      }
 
      accSiteChange(event){
        this.getAccountRecord.Site = event.target.value;
        //window.console.log(this.getAccountRecord.Type);
      }
          
    
      saveAccountAction(){
        window.console.log('before save' + this.createAccount);
        insertAccountMethod({accountObj:this.getAccountRecord})
        .then(result=>{
          window.console.log(this.createAccount);
            this.getAccountRecord={};
            this.accountid=result.Id;
            window.console.log('after save' + this.accountid);
            
            const toastEvent = new ShowToastEvent({
              title:'Success!',
              message:'Account created successfully',
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