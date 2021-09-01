import { LightningElement,wire,api,track } from 'lwc';
import getAllCases from '@salesforce/apex/wireMethord3.getAllCases';
//import Subject from '@salesforce/schema/Case.Subject';
export default class Wire3 extends LightningElement {

//@wire(getAllCases) cases;
 @api records;
 @api errors;
 @track subject;

 handelChange(event){
     const sVal=event.target.value;
     this.subject=sVal;
 }
@wire(getAllCases,{subject:'$subject'})
wiredCases({data,error}){
    if(data){
        this.records=data;
        this.errors=undefined;
    }
    else if(error){
        this.records=undefined;
        this.errors=error;
    }
};
}