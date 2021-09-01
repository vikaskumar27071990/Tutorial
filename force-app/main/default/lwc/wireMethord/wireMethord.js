import { LightningElement,wire } from 'lwc';
import getAllCases from '@salesforce/apex/caseController.getAllCases';
export default class WireMethord extends LightningElement {

@wire(getAllCases) cases;

}