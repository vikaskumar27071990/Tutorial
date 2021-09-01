import { LightningElement,wire,api } from 'lwc';
import getAllCases from '@salesforce/apex/caseController.getAllCases';
export default class WireMethord2 extends LightningElement {

//@wire(getAllCases) cases;
 @api records;
 @api errors;
@wire(getAllCases)
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