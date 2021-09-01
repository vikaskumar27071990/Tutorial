import { LightningElement, wire } from 'lwc';
import getClosedCases from '@salesforce/apex/CloseCaseController.getClosedCases';
export default class CloseCases extends LightningElement {

_errors;
_cases;

@wire(getClosedCases)
    wiredData({error,data}){
         if(data){
             console.log('data/n',data);
         }
         else if(error){
             console.error('Error/n',error);
         }
    }

handleClick=event =>{
    event.preventDefault();
}

}